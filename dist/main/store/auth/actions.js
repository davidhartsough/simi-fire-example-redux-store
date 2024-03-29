"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUserAccount = exports.clearReset = exports.signOut = exports.handleAuth = exports.mobileGoogleSignIn = exports.googleSignIn = exports.signUp = exports.signIn = void 0;
var simi_fire_1 = require("simi-fire");
var db_1 = require("../../db");
var slice_1 = require("./slice");
function signIn(email, password) {
    var _this = this;
    return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
        var error_1, errorCode;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dispatch((0, slice_1.setLoading)());
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, simi_fire_1.login)(email, password)];
                case 2:
                    _a.sent();
                    return [2 /*return*/, true];
                case 3:
                    error_1 = _a.sent();
                    errorCode = error_1.code;
                    if (errorCode) {
                        if (errorCode === "auth/user-not-found") {
                            throw new Error("Invalid email or password.");
                        }
                        if (errorCode === "auth/wrong-password") {
                            throw new Error("Invalid password, or this account uses Google login.");
                        }
                    }
                    throw error_1;
                case 4: return [2 /*return*/];
            }
        });
    }); };
}
exports.signIn = signIn;
function signUp(email, password) {
    var _this = this;
    return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
        var error_2, errorCode;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dispatch((0, slice_1.setLoading)());
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, simi_fire_1.register)(email, password)];
                case 2:
                    _a.sent();
                    return [2 /*return*/, true];
                case 3:
                    error_2 = _a.sent();
                    errorCode = error_2.code;
                    if (errorCode) {
                        if (errorCode === "auth/email-already-in-use") {
                            throw new Error("This email is already in use, or this account uses Google login.");
                        }
                        if (errorCode === "auth/invalid-email") {
                            throw new Error("This email is invalid.");
                        }
                    }
                    throw error_2;
                case 4: return [2 /*return*/];
            }
        });
    }); };
}
exports.signUp = signUp;
function googleSignIn() {
    var _this = this;
    return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dispatch((0, slice_1.setLoading)());
                    return [4 /*yield*/, (0, simi_fire_1.signInWithGoogle)()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    }); };
}
exports.googleSignIn = googleSignIn;
function mobileGoogleSignIn(idToken) {
    return function (dispatch) {
        dispatch((0, slice_1.setLoading)());
        (0, simi_fire_1.mobileSignInWithGoogle)(idToken);
        return true;
    };
}
exports.mobileGoogleSignIn = mobileGoogleSignIn;
function handleAuth(uid, email) {
    var _this = this;
    return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
        var user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, db_1.getOrCreateUser)(uid, email)];
                case 1:
                    user = _a.sent();
                    dispatch((0, slice_1.receive)(user));
                    return [2 /*return*/, user];
            }
        });
    }); };
}
exports.handleAuth = handleAuth;
function signOut() {
    return function (dispatch) {
        (0, simi_fire_1.logout)();
        dispatch((0, slice_1.reset)());
        dispatch({ type: "CLEAR_STATE_RESET" });
        return true;
    };
}
exports.signOut = signOut;
function clearReset() {
    return function (dispatch) {
        dispatch((0, slice_1.reset)());
        dispatch({ type: "CLEAR_STATE_RESET" });
        return true;
    };
}
exports.clearReset = clearReset;
function deleteUserAccount() {
    var _this = this;
    return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, db_1.deleteAuthAccount)()];
                case 1:
                    _a.sent();
                    dispatch((0, slice_1.reset)());
                    dispatch({ type: "CLEAR_STATE_RESET" });
                    return [2 /*return*/, true];
            }
        });
    }); };
}
exports.deleteUserAccount = deleteUserAccount;
function updateUser(updates) {
    var _this = this;
    return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, db_1.updateUser)(getState().auth.id, updates)];
                case 1:
                    _a.sent();
                    dispatch((0, slice_1.updateUser)(updates));
                    return [2 /*return*/, true];
            }
        });
    }); };
}
exports.updateUser = updateUser;
//# sourceMappingURL=actions.js.map