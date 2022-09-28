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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAuthAccount = exports.createGroupOfThings = exports.deleteGroups = exports.deleteGroup = exports.setGroups = exports.updateGroup = exports.createGroups = exports.createGroup = exports.getGroups = exports.getGroup = exports.removeGroupFromThings = exports.addGroupToThings = exports.deleteThings = exports.deleteThing = exports.setThings = exports.updateThing = exports.createThings = exports.createThing = exports.getThings = exports.getThing = exports.generateGroupId = exports.generateThingId = exports.getUserChanges = exports.getGroupChanges = exports.getThingChanges = exports.getAllUsersGroups = exports.getAllUsersThings = exports.getAllGroupsAndThings = exports.deleteUser = exports.updateUser = exports.getOrCreateUser = exports.createUser = exports.getUser = void 0;
var helpers_1 = require("./helpers");
// #region User CRUD
function getUser(userId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("getUser");
                    console.log("userId:", userId);
                    return [4 /*yield*/, (0, helpers_1.sleep)()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, helpers_1.mockUser];
            }
        });
    });
}
exports.getUser = getUser;
function createUser(email) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("createUser");
                    console.log("email:", email);
                    return [4 /*yield*/, (0, helpers_1.sleep)()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, helpers_1.mockUser];
            }
        });
    });
}
exports.createUser = createUser;
function getOrCreateUser(userId, email) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("createUser");
                    console.log("userId:", userId);
                    console.log("email:", email);
                    return [4 /*yield*/, (0, helpers_1.sleep)()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, helpers_1.mockUser];
            }
        });
    });
}
exports.getOrCreateUser = getOrCreateUser;
function updateUser(userId, updates) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("updateUser");
                    console.log("userId:", userId);
                    console.log("updates:", updates);
                    return [4 /*yield*/, (0, helpers_1.sleep)()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    });
}
exports.updateUser = updateUser;
function deleteUser(userId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("deleteUser");
                    console.log("userId:", userId);
                    return [4 /*yield*/, (0, helpers_1.sleep)()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    });
}
exports.deleteUser = deleteUser;
// #endregion
// #region All Groups and Things
function getAllGroupsAndThings(userId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("getAllGroupsAndThings");
                    console.log("userId:", userId);
                    return [4 /*yield*/, (0, helpers_1.sleep)()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, { groups: [], things: [] }];
            }
        });
    });
}
exports.getAllGroupsAndThings = getAllGroupsAndThings;
function getAllUsersThings(userId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("getAllUsersThings");
                    console.log("userId:", userId);
                    return [4 /*yield*/, (0, helpers_1.sleep)()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, []];
            }
        });
    });
}
exports.getAllUsersThings = getAllUsersThings;
function getAllUsersGroups(userId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("getAllUsersGroups");
                    console.log("userId:", userId);
                    return [4 /*yield*/, (0, helpers_1.sleep)()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, []];
            }
        });
    });
}
exports.getAllUsersGroups = getAllUsersGroups;
// #endregion
// #region Doc changes
function getThingChanges(userId) {
    console.log("getThingChanges");
    console.log("userId:", userId);
}
exports.getThingChanges = getThingChanges;
function getGroupChanges(userId) {
    console.log("getGroupChanges");
    console.log("userId:", userId);
}
exports.getGroupChanges = getGroupChanges;
function getUserChanges(userId) {
    console.log("getUserChanges");
    console.log("userId:", userId);
}
exports.getUserChanges = getUserChanges;
// #endregion
// #region Generate Ids
function generateThingId() {
    console.log("generateThingId");
    return "thingId".concat((0, helpers_1.getRandomId)());
}
exports.generateThingId = generateThingId;
function generateGroupId() {
    console.log("generateGroupId");
    return "groupId".concat((0, helpers_1.getRandomId)());
}
exports.generateGroupId = generateGroupId;
// #endregion
// #region Thing CRUD
function getThing(thingId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("getThing");
                    console.log("thingId:", thingId);
                    return [4 /*yield*/, (0, helpers_1.sleep)()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, (0, helpers_1.generateMockThing)(thingId, null)];
            }
        });
    });
}
exports.getThing = getThing;
function getThings(thingIds) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("getThings");
                    console.log("thingIds:", thingIds);
                    return [4 /*yield*/, (0, helpers_1.sleep)()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, thingIds.map(function (thingId) { return (0, helpers_1.generateMockThing)(thingId, null); })];
            }
        });
    });
}
exports.getThings = getThings;
function createThing(thingInsert) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("createThing");
                    console.log("thingInsert:", thingInsert);
                    return [4 /*yield*/, (0, helpers_1.sleep)()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, __assign(__assign({}, thingInsert), { id: generateThingId() })];
            }
        });
    });
}
exports.createThing = createThing;
function createThings(thingInserts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("createThings");
                    console.log("thingInserts:", thingInserts);
                    return [4 /*yield*/, (0, helpers_1.sleep)()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, thingInserts.map(function (thingInsert) { return (__assign(__assign({}, thingInsert), { id: generateThingId() })); })];
            }
        });
    });
}
exports.createThings = createThings;
function updateThing(thingId, thingUpdate) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("updateThing");
                    console.log("thingId:", thingId);
                    console.log("updates:", thingUpdate);
                    return [4 /*yield*/, (0, helpers_1.sleep)()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    });
}
exports.updateThing = updateThing;
function setThings(things) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("setThings");
                    console.log("things:", things);
                    return [4 /*yield*/, (0, helpers_1.sleep)()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    });
}
exports.setThings = setThings;
function deleteThing(thingId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("deleteThing");
                    console.log("thingId:", thingId);
                    return [4 /*yield*/, (0, helpers_1.sleep)()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    });
}
exports.deleteThing = deleteThing;
function deleteThings(thingIds) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("deleteThings");
                    console.log("thingIds:", thingIds);
                    return [4 /*yield*/, (0, helpers_1.sleep)()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    });
}
exports.deleteThings = deleteThings;
// #endregion
// #region Thing and Group relationships
function addGroupToThings(groupId, thingIds) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("addGroupToThings");
                    console.log("groupId:", groupId);
                    console.log("thingIds:", thingIds);
                    return [4 /*yield*/, (0, helpers_1.sleep)()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    });
}
exports.addGroupToThings = addGroupToThings;
function removeGroupFromThings(thingIds) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("removeGroupFromThings");
                    console.log("thingIds:", thingIds);
                    return [4 /*yield*/, (0, helpers_1.sleep)()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    });
}
exports.removeGroupFromThings = removeGroupFromThings;
// #endregion
// #region Group CRUD
function getGroup(groupId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("getGroup");
                    console.log("groupId:", groupId);
                    return [4 /*yield*/, (0, helpers_1.sleep)()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, (0, helpers_1.generateMockGroup)(groupId)];
            }
        });
    });
}
exports.getGroup = getGroup;
function getGroups(groupIds) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("getGroups");
                    console.log("groupIds:", groupIds);
                    return [4 /*yield*/, (0, helpers_1.sleep)()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, groupIds.map(helpers_1.generateMockGroup)];
            }
        });
    });
}
exports.getGroups = getGroups;
function createGroup(groupInsert) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("createGroup");
                    console.log("groupInsert:", groupInsert);
                    return [4 /*yield*/, (0, helpers_1.sleep)()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, __assign(__assign({}, groupInsert), { id: generateGroupId() })];
            }
        });
    });
}
exports.createGroup = createGroup;
function createGroups(groupInserts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("createGroups");
                    console.log("groupInserts:", groupInserts);
                    return [4 /*yield*/, (0, helpers_1.sleep)()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, groupInserts.map(function (groupInsert) { return (__assign(__assign({}, groupInsert), { id: generateGroupId() })); })];
            }
        });
    });
}
exports.createGroups = createGroups;
function updateGroup(groupId, groupUpdate) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("updateGroup");
                    console.log("groupId:", groupId);
                    console.log("updates:", groupUpdate);
                    return [4 /*yield*/, (0, helpers_1.sleep)()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    });
}
exports.updateGroup = updateGroup;
function setGroups(groups) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("setGroups");
                    console.log("groups:", groups);
                    return [4 /*yield*/, (0, helpers_1.sleep)()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    });
}
exports.setGroups = setGroups;
function deleteGroup(groupId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("deleteGroup");
                    console.log("groupId:", groupId);
                    return [4 /*yield*/, (0, helpers_1.sleep)()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    });
}
exports.deleteGroup = deleteGroup;
function deleteGroups(groupIds) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("deleteGroups");
                    console.log("groupIds:", groupIds);
                    return [4 /*yield*/, (0, helpers_1.sleep)()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    });
}
exports.deleteGroups = deleteGroups;
// #endregion
function createGroupOfThings(groupInsert, thingInserts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("groupInsert:", groupInsert);
                    console.log("thingInserts:", thingInserts);
                    return [4 /*yield*/, (0, helpers_1.sleep)()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, (0, helpers_1.generateMockDataSet)()];
            }
        });
    });
}
exports.createGroupOfThings = createGroupOfThings;
// #region Auth
function deleteAuthAccount() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("deleteAuthAccount");
                    return [4 /*yield*/, (0, helpers_1.sleep)()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    });
}
exports.deleteAuthAccount = deleteAuthAccount;
// #endregion
//# sourceMappingURL=index.js.map