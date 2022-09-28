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
exports.getGroupChanges = exports.deleteGroups = exports.deleteGroup = exports.updateGroup = exports.createGroups = exports.setGroups = exports.createGroup = exports.getAllUsersGroups = exports.getGroups = exports.getGroup = exports.generateGroupId = void 0;
var simi_fire_1 = require("simi-fire");
var groupsColName = "groups";
function generateGroupId() {
    return (0, simi_fire_1.generateId)(groupsColName);
}
exports.generateGroupId = generateGroupId;
function getGroup(groupId) {
    return __awaiter(this, void 0, void 0, function () {
        var group;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, simi_fire_1.getDoc)(groupsColName, groupId)];
                case 1:
                    group = (_a.sent());
                    return [2 /*return*/, group];
            }
        });
    });
}
exports.getGroup = getGroup;
function getGroups(groupIds) {
    return __awaiter(this, void 0, void 0, function () {
        var groups;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, simi_fire_1.getDocsByIds)(groupsColName, groupIds)];
                case 1:
                    groups = (_a.sent());
                    return [2 /*return*/, groups];
            }
        });
    });
}
exports.getGroups = getGroups;
function getAllUsersGroups(userId) {
    return __awaiter(this, void 0, void 0, function () {
        var groups;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, simi_fire_1.getDocs)(groupsColName, (0, simi_fire_1.qWhereEquals)("user", userId))];
                case 1:
                    groups = (_a.sent());
                    return [2 /*return*/, groups];
            }
        });
    });
}
exports.getAllUsersGroups = getAllUsersGroups;
function createGroup(groupInsert) {
    return __awaiter(this, void 0, void 0, function () {
        var id;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, simi_fire_1.addDoc)(groupsColName, groupInsert)];
                case 1:
                    id = _a.sent();
                    return [2 /*return*/, __assign({ id: id }, groupInsert)];
            }
        });
    });
}
exports.createGroup = createGroup;
function setGroups(groups) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, simi_fire_1.setDocs)(groupsColName, groups)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    });
}
exports.setGroups = setGroups;
function createGroups(groupInserts) {
    return __awaiter(this, void 0, void 0, function () {
        var groups;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, simi_fire_1.addDocs)(groupsColName, groupInserts)];
                case 1:
                    groups = (_a.sent());
                    return [2 /*return*/, groups];
            }
        });
    });
}
exports.createGroups = createGroups;
function updateGroup(groupId, updates) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, simi_fire_1.updateDoc)(groupsColName, groupId, updates)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    });
}
exports.updateGroup = updateGroup;
function deleteGroup(groupId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, simi_fire_1.deleteDoc)(groupsColName, groupId)];
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
                case 0: return [4 /*yield*/, (0, simi_fire_1.deleteDocs)(groupsColName, groupIds)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    });
}
exports.deleteGroups = deleteGroups;
function getGroupChanges(userId, addGroup, modifyGroup, removeGroup) {
    (0, simi_fire_1.handleCollectionChanges)(groupsColName, (0, simi_fire_1.qWhereEquals)("user", userId), addGroup, modifyGroup, removeGroup);
}
exports.getGroupChanges = getGroupChanges;
//# sourceMappingURL=groups.js.map