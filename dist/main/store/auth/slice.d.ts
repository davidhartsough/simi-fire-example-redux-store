import type { User, UserInput } from "../../types";
export interface Auth extends User {
    loading: boolean;
    isSignedIn: boolean;
}
export declare const initialState: {
    loading: boolean;
    isSignedIn: boolean;
    id: string;
    email: string;
};
export declare const receive: import("@reduxjs/toolkit").ActionCreatorWithPayload<User, string>, reset: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>, setLoading: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>, updateUser: import("@reduxjs/toolkit").ActionCreatorWithPayload<UserInput, string>;
declare const _default: import("redux").Reducer<{
    loading: boolean;
    isSignedIn: boolean;
    id: string;
    email: string;
}, import("redux").AnyAction>;
export default _default;
