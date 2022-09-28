import type { Action, AnyAction } from "redux";
import type { ThunkAction, ThunkDispatch } from "redux-thunk";
declare const storeForTypes: import("@reduxjs/toolkit").EnhancedStore<import("redux").CombinedState<{
    auth: {
        loading: boolean;
        isSignedIn: boolean;
        id: string;
        email: string;
    };
    things: import("../types").Thing[];
    groups: import("../types").Group[];
}>, any, [import("redux-thunk").ThunkMiddleware<import("redux").CombinedState<{
    auth: {
        loading: boolean;
        isSignedIn: boolean;
        id: string;
        email: string;
    };
    things: import("../types").Thing[];
    groups: import("../types").Group[];
}>, AnyAction, undefined>]>;
export declare type RootState = ReturnType<typeof storeForTypes.getState>;
export declare type GetState = () => RootState;
export declare type AppDispatch = typeof storeForTypes.dispatch;
export declare type AppThunkDispatch = ThunkDispatch<RootState, void, Action>;
export declare type ThunkActionBoolPromise = ThunkAction<Promise<boolean>, RootState, void, AnyAction>;
export {};
