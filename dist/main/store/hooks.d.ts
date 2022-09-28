import { TypedUseSelectorHook } from "react-redux";
import type { RootState } from "./types";
export declare const useAppDispatch: () => import("redux-thunk").ThunkDispatch<import("redux").CombinedState<{
    auth: {
        loading: boolean;
        isSignedIn: boolean;
        id: string;
        email: string;
    };
    things: import("../types").Thing[];
    groups: import("../types").Group[];
}>, undefined, import("redux").AnyAction> & import("redux").Dispatch<any>;
export declare const useAppSelector: TypedUseSelectorHook<RootState>;
