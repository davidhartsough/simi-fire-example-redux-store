"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeGroupFromThings = exports.addGroupToThings = exports.createGroupOfThings = exports.getAllGroupsAndThings = exports.deleteGroups = exports.deleteGroup = exports.setGroups = exports.updateGroup = exports.createGroups = exports.createGroup = exports.getGroups = exports.getGroup = exports.getAllUsersGroups = exports.deleteThings = exports.deleteThing = exports.setThings = exports.updateThing = exports.createThings = exports.createThing = exports.getThings = exports.getThing = exports.getAllUsersThings = exports.generateGroupId = exports.generateThingId = exports.getGroupChanges = exports.getThingChanges = exports.getUserChanges = exports.deleteAuthAccount = exports.deleteUser = exports.updateUser = exports.getOrCreateUser = exports.createUser = exports.getUser = void 0;
var playDB = __importStar(require("./playground"));
var prodDB = __importStar(require("./production"));
var playground = process.env.REACT_APP_PLAYGROUND || "false";
var isPlayground = playground === "true";
var db = isPlayground ? playDB : prodDB;
// User CRUD
exports.getUser = db.getUser;
exports.createUser = db.createUser;
exports.getOrCreateUser = db.getOrCreateUser;
exports.updateUser = db.updateUser;
exports.deleteUser = db.deleteUser;
exports.deleteAuthAccount = db.deleteAuthAccount;
// Doc changes
exports.getUserChanges = db.getUserChanges;
exports.getThingChanges = db.getThingChanges;
exports.getGroupChanges = db.getGroupChanges;
// Generate Ids
exports.generateThingId = db.generateThingId;
exports.generateGroupId = db.generateGroupId;
// Thing CRUD
exports.getAllUsersThings = db.getAllUsersThings;
exports.getThing = db.getThing;
exports.getThings = db.getThings;
exports.createThing = db.createThing;
exports.createThings = db.createThings;
exports.updateThing = db.updateThing;
exports.setThings = db.setThings;
exports.deleteThing = db.deleteThing;
exports.deleteThings = db.deleteThings;
// Group CRUD
exports.getAllUsersGroups = db.getAllUsersGroups;
exports.getGroup = db.getGroup;
exports.getGroups = db.getGroups;
exports.createGroup = db.createGroup;
exports.createGroups = db.createGroups;
exports.updateGroup = db.updateGroup;
exports.setGroups = db.setGroups;
exports.deleteGroup = db.deleteGroup;
exports.deleteGroups = db.deleteGroups;
// Thing and Group relationships (bulk actions)
exports.getAllGroupsAndThings = db.getAllGroupsAndThings;
exports.createGroupOfThings = db.createGroupOfThings;
exports.addGroupToThings = db.addGroupToThings;
exports.removeGroupFromThings = db.removeGroupFromThings;
//# sourceMappingURL=index.js.map