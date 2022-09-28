import * as playDB from "./playground";
import * as prodDB from "./production";

const playground = process.env.REACT_APP_PLAYGROUND || "false";
const isPlayground = playground === "true";
const db = isPlayground ? playDB : prodDB;

// User CRUD
export const getUser = db.getUser;
export const createUser = db.createUser;
export const getOrCreateUser = db.getOrCreateUser;
export const updateUser = db.updateUser;
export const deleteUser = db.deleteUser;
export const deleteAuthAccount = db.deleteAuthAccount;

// Doc changes
export const getUserChanges = db.getUserChanges;
export const getThingChanges = db.getThingChanges;
export const getGroupChanges = db.getGroupChanges;

// Generate Ids
export const generateThingId = db.generateThingId;
export const generateGroupId = db.generateGroupId;

// Thing CRUD
export const getAllUsersThings = db.getAllUsersThings;
export const getThing = db.getThing;
export const getThings = db.getThings;
export const createThing = db.createThing;
export const createThings = db.createThings;
export const updateThing = db.updateThing;
export const setThings = db.setThings;
export const deleteThing = db.deleteThing;
export const deleteThings = db.deleteThings;

// Group CRUD
export const getAllUsersGroups = db.getAllUsersGroups;
export const getGroup = db.getGroup;
export const getGroups = db.getGroups;
export const createGroup = db.createGroup;
export const createGroups = db.createGroups;
export const updateGroup = db.updateGroup;
export const setGroups = db.setGroups;
export const deleteGroup = db.deleteGroup;
export const deleteGroups = db.deleteGroups;

// Thing and Group relationships (bulk actions)
export const getAllGroupsAndThings = db.getAllGroupsAndThings;
export const createGroupOfThings = db.createGroupOfThings;
export const addGroupToThings = db.addGroupToThings;
export const removeGroupFromThings = db.removeGroupFromThings;
