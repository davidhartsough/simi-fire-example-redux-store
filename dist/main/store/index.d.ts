declare const rootReducer: (state: any, action: any) => import("redux").CombinedState<{
    auth: {
        loading: boolean;
        isSignedIn: boolean;
        id: string;
        email: string;
    };
    things: import("../types").Thing[];
    groups: import("../types").Group[];
}>;
export default rootReducer;
