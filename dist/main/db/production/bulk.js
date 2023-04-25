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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeGroupFromThings = exports.addGroupToThings = exports.createGroupOfThings = exports.getAllGroupsAndThings = void 0;
var simi_fire_1 = require("simi-fire");
var utils_1 = require("../../utils");
var groups_1 = require("./groups");
var things_1 = require("./things");
var thingsColName = "things";
var groupsColName = "groups";
function getAllGroupsAndThings(userId) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, groups, things;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, Promise.all([
                        (0, groups_1.getAllUsersGroups)(userId),
                        (0, things_1.getAllUsersThings)(userId),
                    ])];
                case 1:
                    _a = _b.sent(), groups = _a[0], things = _a[1];
                    return [2 /*return*/, { groups: groups, things: things }];
            }
        });
    });
}
exports.getAllGroupsAndThings = getAllGroupsAndThings;
function createGroupOfThings(groupInsert, thingInserts) {
    return __awaiter(this, void 0, void 0, function () {
        var groupId, things, thingIds, group, batch, _i, _a, thingIdsChunk;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    groupId = (0, simi_fire_1.generateId)(groupsColName);
                    things = thingInserts.map(function (newThing) { return (__assign(__assign({}, newThing), { id: (0, simi_fire_1.generateId)(thingsColName), group: groupId })); });
                    thingIds = things.map(function (_a) {
                        var id = _a.id;
                        return id;
                    });
                    group = __assign(__assign({}, groupInsert), { id: groupId, things: thingIds });
                    batch = (0, simi_fire_1.batchWrite)();
                    batch.set((0, simi_fire_1.docRef)(groupsColName, groupId), (function (_a) {
                        var id = _a.id, rest = __rest(_a, ["id"]);
                        return rest;
                    })(group));
                    _i = 0, _a = (0, utils_1.chunk)(thingIds, 200);
                    _b.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 4];
                    thingIdsChunk = _a[_i];
                    thingIdsChunk.forEach(function (thingId) {
                        var thing = things.find(function (_a) {
                            var id = _a.id;
                            return id === thingId;
                        });
                        if (thing) {
                            batch.set((0, simi_fire_1.docRef)(thingsColName, thingId), thing);
                        }
                    });
                    return [4 /*yield*/, batch.commit()];
                case 2:
                    _b.sent();
                    batch = (0, simi_fire_1.batchWrite)();
                    _b.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/, { group: group, things: things }];
            }
        });
    });
}
exports.createGroupOfThings = createGroupOfThings;
function addGroupToThings(groupId, thingIds) {
    return __awaiter(this, void 0, void 0, function () {
        var batch;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    batch = (0, simi_fire_1.batchWrite)();
                    thingIds.forEach(function (thingId) {
                        batch.update((0, simi_fire_1.docRef)(thingsColName, thingId), {
                            group: groupId,
                        });
                    });
                    return [4 /*yield*/, batch.commit()];
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
        var batch;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    batch = (0, simi_fire_1.batchWrite)();
                    thingIds.forEach(function (thingId) {
                        batch.update((0, simi_fire_1.docRef)(thingsColName, thingId), {
                            group: null,
                        });
                    });
                    return [4 /*yield*/, batch.commit()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    });
}
exports.removeGroupFromThings = removeGroupFromThings;
//# sourceMappingURL=bulk.js.map