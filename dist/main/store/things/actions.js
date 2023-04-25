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
exports.handleThingChanges = exports.deleteThingsByIds = exports.deleteThings = exports.deleteThingById = exports.deleteThing = exports.updateThings = exports.updateThing = exports.createThings = exports.createThing = exports.getAllUsersThings = void 0;
var db_1 = require("../../db");
var actions_1 = require("../groups/actions");
var slice_1 = require("./slice");
function getAllUsersThings() {
    var _this = this;
    return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var things;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, db_1.getAllUsersThings)(getState().auth.id)];
                case 1:
                    things = _a.sent();
                    dispatch((0, slice_1.receiveThings)(things));
                    return [2 /*return*/, true];
            }
        });
    }); };
}
exports.getAllUsersThings = getAllUsersThings;
function createThing(thingInput) {
    var _this = this;
    return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var thing, groupId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, db_1.createThing)(__assign(__assign({}, thingInput), { user: getState().auth.id, createdAt: Date.now() }))];
                case 1:
                    thing = _a.sent();
                    dispatch((0, slice_1.createThing)(thing));
                    groupId = thing.group;
                    if (!groupId) return [3 /*break*/, 3];
                    return [4 /*yield*/, dispatch((0, actions_1.addThingToGroup)(thing.id, groupId))];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/, true];
            }
        });
    }); };
}
exports.createThing = createThing;
function createThings(thingInputs) {
    var _this = this;
    return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var user, things, thingsWithGroups;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    user = getState().auth.id;
                    return [4 /*yield*/, (0, db_1.createThings)(thingInputs.map(function (thingInput, index) { return (__assign(__assign({}, thingInput), { user: user, createdAt: Date.now() + index })); }))];
                case 1:
                    things = _a.sent();
                    dispatch((0, slice_1.createThings)(things));
                    thingsWithGroups = things.filter(function (_a) {
                        var group = _a.group;
                        return !!group;
                    });
                    return [4 /*yield*/, Promise.all(thingsWithGroups.map(function (thing) {
                            return dispatch((0, actions_1.addThingToGroup)(thing.id, thing.group));
                        }))];
                case 2:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    }); };
}
exports.createThings = createThings;
function handleGroupUpdate(thingId, nextGroupId) {
    var _this = this;
    return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var prevThing, prevGroupId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(nextGroupId !== undefined)) return [3 /*break*/, 4];
                    prevThing = getState().things.find(function (_a) {
                        var id = _a.id;
                        return id === thingId;
                    });
                    if (!prevThing)
                        return [2 /*return*/, false];
                    prevGroupId = prevThing.group;
                    if (!(prevGroupId !== nextGroupId)) return [3 /*break*/, 4];
                    if (!(prevGroupId !== null)) return [3 /*break*/, 2];
                    return [4 /*yield*/, dispatch((0, actions_1.removeThingFromGroup)(thingId, prevGroupId))];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (!(nextGroupId !== null)) return [3 /*break*/, 4];
                    return [4 /*yield*/, dispatch((0, actions_1.addThingToGroup)(thingId, nextGroupId))];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [2 /*return*/, true];
            }
        });
    }); };
}
function updateThing(thingId, thingUpdate) {
    var _this = this;
    return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
        var nextGroupId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    nextGroupId = thingUpdate.group;
                    return [4 /*yield*/, dispatch(handleGroupUpdate(thingId, nextGroupId))];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, (0, db_1.updateThing)(thingId, thingUpdate)];
                case 2:
                    _a.sent();
                    dispatch((0, slice_1.modifyThing)({ thingId: thingId, thingUpdate: thingUpdate }));
                    return [2 /*return*/, true];
            }
        });
    }); };
}
exports.updateThing = updateThing;
function updateThings(things) {
    var _this = this;
    return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // TODO: for each, if group id changes, update group(s)
                return [4 /*yield*/, Promise.all(things.map(function (thing) { return dispatch(handleGroupUpdate(thing.id, thing.group)); }))];
                case 1:
                    // TODO: for each, if group id changes, update group(s)
                    _a.sent();
                    return [4 /*yield*/, (0, db_1.setThings)(things)];
                case 2:
                    _a.sent();
                    dispatch((0, slice_1.updateThings)(things));
                    return [2 /*return*/, true];
            }
        });
    }); };
}
exports.updateThings = updateThings;
function deleteThing(thing) {
    var _this = this;
    return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
        var id, group;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = thing.id, group = thing.group;
                    return [4 /*yield*/, (0, db_1.deleteThing)(id)];
                case 1:
                    _a.sent();
                    dispatch((0, slice_1.removeThing)(id));
                    if (!group) return [3 /*break*/, 3];
                    return [4 /*yield*/, dispatch((0, actions_1.removeThingFromGroup)(id, group))];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/, true];
            }
        });
    }); };
}
exports.deleteThing = deleteThing;
function deleteThingById(thingId) {
    var _this = this;
    return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var thing;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    thing = getState().things.find(function (_a) {
                        var id = _a.id;
                        return id === thingId;
                    });
                    if (!thing)
                        return [2 /*return*/, false];
                    return [4 /*yield*/, dispatch(deleteThing(thing))];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    }); };
}
exports.deleteThingById = deleteThingById;
function deleteThings(things) {
    var _this = this;
    return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
        var thingIds, thingsWithGroups;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    thingIds = things.map(function (_a) {
                        var id = _a.id;
                        return id;
                    });
                    return [4 /*yield*/, (0, db_1.deleteThings)(thingIds)];
                case 1:
                    _a.sent();
                    dispatch((0, slice_1.deleteThings)(thingIds));
                    thingsWithGroups = things.filter(function (_a) {
                        var group = _a.group;
                        return !!group;
                    });
                    return [4 /*yield*/, Promise.all(thingsWithGroups.map(function (thing) {
                            return dispatch((0, actions_1.removeThingFromGroup)(thing.id, thing.group));
                        }))];
                case 2:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    }); };
}
exports.deleteThings = deleteThings;
function deleteThingsByIds(thingIds) {
    var _this = this;
    return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var things;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    things = getState().things.filter(function (_a) {
                        var id = _a.id;
                        return thingIds.includes(id);
                    });
                    if (things.length < 1)
                        return [2 /*return*/, false];
                    return [4 /*yield*/, dispatch(deleteThings(things))];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    }); };
}
exports.deleteThingsByIds = deleteThingsByIds;
function handleThingChanges() {
    return function (dispatch, getState) {
        var addThing = function (thing) { return dispatch((0, slice_1.createThing)(thing)); };
        var editThing = function (thing) {
            return dispatch((0, slice_1.modifyThing)({
                thingId: thing.id,
                thingUpdate: {
                    name: thing.name,
                    group: thing.group,
                    value: thing.value,
                },
            }));
        };
        var removeThing = function (id) { return dispatch((0, slice_1.removeThing)(id)); };
        (0, db_1.getThingChanges)(getState().auth.id, addThing, editThing, removeThing);
        return true;
    };
}
exports.handleThingChanges = handleThingChanges;
//# sourceMappingURL=actions.js.map