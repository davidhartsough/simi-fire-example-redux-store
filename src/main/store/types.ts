import { configureStore } from "@reduxjs/toolkit";
import type { Action, AnyAction } from "redux";
import type { ThunkAction, ThunkDispatch } from "redux-thunk";

import reducer from ".";

const storeForTypes = configureStore({ reducer });

export type RootState = ReturnType<typeof storeForTypes.getState>;
export type GetState = () => RootState;
export type AppDispatch = typeof storeForTypes.dispatch;
export type AppThunkDispatch = ThunkDispatch<RootState, void, Action>;
export type ThunkActionBoolPromise = ThunkAction<
  Promise<boolean>,
  RootState,
  void,
  AnyAction
>;
