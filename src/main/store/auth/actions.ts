import type { AnyAction } from "redux";
import type { ThunkAction } from "redux-thunk";
import {
  login,
  signInWithGoogle,
  register,
  logout,
  mobileSignInWithGoogle,
} from "simi-fire";

import type { User, UserInput } from "../../types";
import {
  updateUser as dbUpdateUser,
  deleteAuthAccount as dbDeleteAccount,
  getOrCreateUser,
} from "../../db";
import type {
  AppDispatch,
  AppThunkDispatch,
  GetState,
  RootState,
  ThunkActionBoolPromise,
} from "../types";
import {
  receive,
  reset,
  setLoading,
  updateUser as rsUpdateUser,
} from "./slice";

export function signIn(
  email: string,
  password: string
): ThunkActionBoolPromise {
  return async (dispatch: AppThunkDispatch): Promise<boolean> => {
    dispatch(setLoading());
    try {
      await login(email, password);
      return true;
    } catch (error) {
      const errorCode: string | undefined = (error as any).code;
      if (errorCode) {
        if (errorCode === "auth/user-not-found") {
          throw new Error("Invalid email or password.");
        }
        if (errorCode === "auth/wrong-password") {
          throw new Error(
            "Invalid password, or this account uses Google login."
          );
        }
      }
      throw error;
    }
  };
}

export function signUp(
  email: string,
  password: string
): ThunkActionBoolPromise {
  return async (dispatch: AppThunkDispatch): Promise<boolean> => {
    dispatch(setLoading());
    try {
      await register(email, password);
      return true;
    } catch (error) {
      const errorCode: string | undefined = (error as any).code;
      if (errorCode) {
        if (errorCode === "auth/email-already-in-use") {
          throw new Error(
            "This email is already in use, or this account uses Google login."
          );
        }
        if (errorCode === "auth/invalid-email") {
          throw new Error("This email is invalid.");
        }
      }
      throw error;
    }
  };
}

export function googleSignIn(): ThunkActionBoolPromise {
  return async (dispatch: AppThunkDispatch): Promise<boolean> => {
    dispatch(setLoading());
    await signInWithGoogle();
    return true;
  };
}

export function mobileGoogleSignIn(idToken: string) {
  return (dispatch: AppThunkDispatch): boolean => {
    dispatch(setLoading());
    mobileSignInWithGoogle(idToken);
    return true;
  };
}

export function handleAuth(
  uid: string,
  email: string
): ThunkAction<Promise<User>, RootState, void, AnyAction> {
  return async (dispatch: AppThunkDispatch): Promise<User> => {
    const user: User = await getOrCreateUser(uid, email);
    dispatch(receive(user));
    return user;
  };
}

export function signOut() {
  return (dispatch: AppDispatch): boolean => {
    logout();
    dispatch(reset());
    dispatch({ type: "CLEAR_STATE_RESET" });
    return true;
  };
}

export function clearReset() {
  return (dispatch: AppDispatch): boolean => {
    dispatch(reset());
    dispatch({ type: "CLEAR_STATE_RESET" });
    return true;
  };
}

export function deleteUserAccount(): ThunkActionBoolPromise {
  return async (dispatch: AppThunkDispatch): Promise<boolean> => {
    await dbDeleteAccount();
    dispatch(reset());
    dispatch({ type: "CLEAR_STATE_RESET" });
    return true;
  };
}

export function updateUser(updates: UserInput): ThunkActionBoolPromise {
  return async (
    dispatch: AppThunkDispatch,
    getState: GetState
  ): Promise<boolean> => {
    await dbUpdateUser(getState().auth.id, updates);
    dispatch(rsUpdateUser(updates));
    return true;
  };
}
