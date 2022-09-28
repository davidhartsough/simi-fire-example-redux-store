"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var slice_1 = __importDefault(require("./auth/slice"));
var slice_2 = __importDefault(require("./things/slice"));
var slice_3 = __importDefault(require("./groups/slice"));
var appReducer = (0, redux_1.combineReducers)({
    auth: slice_1.default,
    things: slice_2.default,
    groups: slice_3.default,
});
var rootReducer = function (state, action) {
    var newState = state;
    if (action.type === "CLEAR_STATE_RESET") {
        newState = undefined;
    }
    return appReducer(newState, action);
};
exports.default = rootReducer;
//# sourceMappingURL=index.js.map