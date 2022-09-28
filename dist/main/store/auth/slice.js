"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.setLoading = exports.reset = exports.receive = exports.initialState = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
exports.initialState = {
    loading: false,
    isSignedIn: false,
    id: "",
    email: "",
};
var authSlice = (0, toolkit_1.createSlice)({
    name: "auth",
    initialState: exports.initialState,
    reducers: {
        receive: function (_, _a) {
            var payload = _a.payload;
            return (__assign({ loading: false, isSignedIn: true }, payload));
        },
        reset: function () { return exports.initialState; },
        setLoading: function (state) {
            state.loading = true;
        },
        updateUser: function (state, _a) {
            var payload = _a.payload;
            if (typeof payload.email === "string") {
                state.email = payload.email;
            }
        },
    },
});
exports.receive = (_a = authSlice.actions, _a.receive), exports.reset = _a.reset, exports.setLoading = _a.setLoading, exports.updateUser = _a.updateUser;
exports.default = authSlice.reducer;
//# sourceMappingURL=slice.js.map