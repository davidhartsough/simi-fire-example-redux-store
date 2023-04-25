import type { Action, AnyAction } from "redux";
import type { ThunkAction, ThunkDispatch } from "redux-thunk";
declare const storeForTypes: import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<import("redux").EmptyObject & {
    auth: {
        loading: boolean;
        isSignedIn: boolean;
        id: string;
        email: string;
    };
    things: import("../types").Thing[];
    groups: import("../types").Group[];
}, any, [import("redux-thunk").ThunkMiddleware<import("redux").CombinedState<{
    auth: {
        loading: boolean;
        isSignedIn: boolean;
        id: string;
        email: string;
    };
    things: import("../types").Thing[];
    groups: import("../types").Group[];
}>, AnyAction, undefined>]>;
export type RootState = ReturnType<typeof storeForTypes.getState>;
export type GetState = () => RootState;
export type AppDispatch = typeof storeForTypes.dispatch;
export type AppThunkDispatch = ThunkDispatch<RootState, void, Action>;
export type ThunkActionBoolPromise = ThunkAction<Promise<boolean>, RootState, void, AnyAction>;
export {};
