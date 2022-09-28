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
        while (_) try {
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeThingFromGroup = exports.addThingToGroup = exports.handleGroupChanges = exports.deleteGroups = exports.deleteGroup = exports.updateGroups = exports.updateGroup = exports.createGroups = exports.createGroup = exports.getAllUsersGroups = exports.removeGroupIdsFromThings = exports.removeGroupIdFromThings = void 0;
var db_1 = require("../../db");
var slice_1 = require("../things/slice");
var slice_2 = require("./slice");
//
function removeGroupIdFromThings(groupId) {
    var _this = this;
    return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var thingIds;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    thingIds = getState()
                        .things.filter(function (_a) {
                        var group = _a.group;
                        return group === groupId;
                    })
                        .map(function (_a) {
                        var id = _a.id;
                        return id;
                    });
                    return [4 /*yield*/, (0, db_1.removeGroupFromThings)(thingIds)];
                case 1:
                    _a.sent();
                    dispatch((0, slice_1.removeThingsFromGroup)(thingIds));
                    return [2 /*return*/, true];
            }
        });
    }); };
}
exports.removeGroupIdFromThings = removeGroupIdFromThings;
function removeGroupIdsFromThings(groupIds) {
    var _this = this;
    return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var thingIds;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    thingIds = getState()
                        .things.filter(function (_a) {
                        var group = _a.group;
                        return group && groupIds.includes(group);
                    })
                        .map(function (_a) {
                        var id = _a.id;
                        return id;
                    });
                    return [4 /*yield*/, (0, db_1.removeGroupFromThings)(thingIds)];
                case 1:
                    _a.sent();
                    dispatch((0, slice_1.removeThingsFromGroup)(thingIds));
                    return [2 /*return*/, true];
            }
        });
    }); };
}
exports.removeGroupIdsFromThings = removeGroupIdsFromThings;
//
function getAllUsersGroups() {
    var _this = this;
    return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var groups;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, db_1.getAllUsersGroups)(getState().auth.id)];
                case 1:
                    groups = _a.sent();
                    dispatch((0, slice_2.receiveGroups)(groups));
                    return [2 /*return*/, true];
            }
        });
    }); };
}
exports.getAllUsersGroups = getAllUsersGroups;
function createGroup(groupInput) {
    var _this = this;
    return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var group;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, db_1.createGroup)(__assign(__assign({}, groupInput), { user: getState().auth.id, createdAt: Date.now() }))];
                case 1:
                    group = _a.sent();
                    dispatch((0, slice_2.createGroup)(group));
                    return [2 /*return*/, true];
            }
        });
    }); };
}
exports.createGroup = createGroup;
function createGroups(groupInputs) {
    var _this = this;
    return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var user, groups;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    user = getState().auth.id;
                    return [4 /*yield*/, (0, db_1.createGroups)(groupInputs.map(function (groupInput, index) { return (__assign(__assign({}, groupInput), { user: user, createdAt: Date.now() + index })); }))];
                case 1:
                    groups = _a.sent();
                    dispatch((0, slice_2.createGroups)(groups));
                    return [2 /*return*/, true];
            }
        });
    }); };
}
exports.createGroups = createGroups;
function updateGroup(groupId, groupUpdate) {
    var _this = this;
    return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, db_1.updateGroup)(groupId, groupUpdate)];
                case 1:
                    _a.sent();
                    dispatch((0, slice_2.modifyGroup)({ groupId: groupId, groupUpdate: groupUpdate }));
                    return [2 /*return*/, true];
            }
        });
    }); };
}
exports.updateGroup = updateGroup;
function updateGroups(groups) {
    var _this = this;
    return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, db_1.setGroups)(groups)];
                case 1:
                    _a.sent();
                    dispatch((0, slice_2.updateGroups)(groups));
                    return [2 /*return*/, true];
            }
        });
    }); };
}
exports.updateGroups = updateGroups;
function deleteGroup(groupId) {
    var _this = this;
    return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dispatch(removeGroupIdFromThings(groupId))];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, (0, db_1.deleteGroup)(groupId)];
                case 2:
                    _a.sent();
                    dispatch((0, slice_2.removeGroup)(groupId));
                    return [2 /*return*/, true];
            }
        });
    }); };
}
exports.deleteGroup = deleteGroup;
function deleteGroups(groupIds) {
    var _this = this;
    return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dispatch(removeGroupIdsFromThings(groupIds))];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, (0, db_1.deleteGroups)(groupIds)];
                case 2:
                    _a.sent();
                    dispatch((0, slice_2.deleteGroups)(groupIds));
                    return [2 /*return*/, true];
            }
        });
    }); };
}
exports.deleteGroups = deleteGroups;
function handleGroupChanges() {
    return function (dispatch, getState) {
        var addGroup = function (group) { return dispatch((0, slice_2.createGroup)(group)); };
        var editGroup = function (group) {
            return dispatch((0, slice_2.modifyGroup)({
                groupId: group.id,
                groupUpdate: {
                    name: group.name,
                    things: group.things,
                },
            }));
        };
        var removeGroup = function (id) { return dispatch((0, slice_2.removeGroup)(id)); };
        (0, db_1.getGroupChanges)(getState().auth.id, addGroup, editGroup, removeGroup);
        return true;
    };
}
exports.handleGroupChanges = handleGroupChanges;
//
function addThingToGroup(thingId, groupId) {
    var _this = this;
    return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var group;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    group = getState().groups.find(function (_a) {
                        var id = _a.id;
                        return id === groupId;
                    });
                    if (!group)
                        return [2 /*return*/, false];
                    return [4 /*yield*/, dispatch(updateGroup(groupId, {
                            things: __spreadArray(__spreadArray([], group.things, true), [thingId], false),
                        }))];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    }); };
}
exports.addThingToGroup = addThingToGroup;
function removeThingFromGroup(thingId, groupId) {
    var _this = this;
    return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var group;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    group = getState().groups.find(function (_a) {
                        var id = _a.id;
                        return id === groupId;
                    });
                    if (!group)
                        return [2 /*return*/, false];
                    return [4 /*yield*/, dispatch(updateGroup(groupId, {
                            things: group.things.filter(function (id) { return id !== thingId; }),
                        }))];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    }); };
}
exports.removeThingFromGroup = removeThingFromGroup;
//# sourceMappingURL=actions.js.map