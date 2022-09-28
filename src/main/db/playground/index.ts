/* eslint-disable no-console */
import type {
  Thing,
  Group,
  User,
  GroupOfThings,
  GroupsAndThings,
  ThingInsert,
  GroupInsert,
  UserInput,
  ThingUpdate,
  GroupUpdate,
} from "../../types";
import {
  sleep,
  mockUser,
  getRandomId,
  generateMockThing,
  generateMockGroup,
  generateMockDataSet,
} from "./helpers";

// #region User CRUD
export async function getUser(userId: string): Promise<User> {
  console.log("getUser");
  console.log("userId:", userId);
  await sleep();
  return mockUser;
}
export async function createUser(email: string): Promise<User> {
  console.log("createUser");
  console.log("email:", email);
  await sleep();
  return mockUser;
}
export async function getOrCreateUser(
  userId: string,
  email: string
): Promise<User> {
  console.log("createUser");
  console.log("userId:", userId);
  console.log("email:", email);
  await sleep();
  return mockUser;
}
export async function updateUser(
  userId: string,
  updates: UserInput
): Promise<boolean> {
  console.log("updateUser");
  console.log("userId:", userId);
  console.log("updates:", updates);
  await sleep();
  return true;
}
export async function deleteUser(userId: string): Promise<boolean> {
  console.log("deleteUser");
  console.log("userId:", userId);
  await sleep();
  return true;
}
// #endregion

// #region All Groups and Things
export async function getAllGroupsAndThings(
  userId: string
): Promise<GroupsAndThings> {
  console.log("getAllGroupsAndThings");
  console.log("userId:", userId);
  await sleep();
  return { groups: [], things: [] };
}
export async function getAllUsersThings(userId: string): Promise<Thing[]> {
  console.log("getAllUsersThings");
  console.log("userId:", userId);
  await sleep();
  return [];
}
export async function getAllUsersGroups(userId: string): Promise<Group[]> {
  console.log("getAllUsersGroups");
  console.log("userId:", userId);
  await sleep();
  return [];
}
// #endregion

// #region Doc changes
export function getThingChanges(userId: string) {
  console.log("getThingChanges");
  console.log("userId:", userId);
}
export function getGroupChanges(userId: string) {
  console.log("getGroupChanges");
  console.log("userId:", userId);
}
export function getUserChanges(userId: string) {
  console.log("getUserChanges");
  console.log("userId:", userId);
}
// #endregion

// #region Generate Ids
export function generateThingId(): string {
  console.log("generateThingId");
  return `thingId${getRandomId()}`;
}
export function generateGroupId(): string {
  console.log("generateGroupId");
  return `groupId${getRandomId()}`;
}
// #endregion

// #region Thing CRUD
export async function getThing(thingId: string): Promise<Thing> {
  console.log("getThing");
  console.log("thingId:", thingId);
  await sleep();
  return generateMockThing(thingId, null);
}
export async function getThings(thingIds: string[]): Promise<Thing[]> {
  console.log("getThings");
  console.log("thingIds:", thingIds);
  await sleep();
  return thingIds.map((thingId) => generateMockThing(thingId, null));
}
export async function createThing(thingInsert: ThingInsert): Promise<Thing> {
  console.log("createThing");
  console.log("thingInsert:", thingInsert);
  await sleep();
  return {
    ...thingInsert,
    id: generateThingId(),
  };
}
export async function createThings(
  thingInserts: ThingInsert[]
): Promise<Thing[]> {
  console.log("createThings");
  console.log("thingInserts:", thingInserts);
  await sleep();
  return thingInserts.map((thingInsert: ThingInsert) => ({
    ...thingInsert,
    id: generateThingId(),
  }));
}
export async function updateThing(
  thingId: string,
  thingUpdate: ThingUpdate
): Promise<boolean> {
  console.log("updateThing");
  console.log("thingId:", thingId);
  console.log("updates:", thingUpdate);
  await sleep();
  return true;
}
export async function setThings(things: Thing[]): Promise<boolean> {
  console.log("setThings");
  console.log("things:", things);
  await sleep();
  return true;
}
export async function deleteThing(thingId: string): Promise<boolean> {
  console.log("deleteThing");
  console.log("thingId:", thingId);
  await sleep();
  return true;
}
export async function deleteThings(thingIds: string[]): Promise<boolean> {
  console.log("deleteThings");
  console.log("thingIds:", thingIds);
  await sleep();
  return true;
}
// #endregion

// #region Thing and Group relationships
export async function addGroupToThings(
  groupId: string,
  thingIds: string[]
): Promise<boolean> {
  console.log("addGroupToThings");
  console.log("groupId:", groupId);
  console.log("thingIds:", thingIds);
  await sleep();
  return true;
}

export async function removeGroupFromThings(
  thingIds: string[]
): Promise<boolean> {
  console.log("removeGroupFromThings");
  console.log("thingIds:", thingIds);
  await sleep();
  return true;
}
// #endregion

// #region Group CRUD
export async function getGroup(groupId: string): Promise<Group> {
  console.log("getGroup");
  console.log("groupId:", groupId);
  await sleep();
  return generateMockGroup(groupId);
}
export async function getGroups(groupIds: string[]): Promise<Group[]> {
  console.log("getGroups");
  console.log("groupIds:", groupIds);
  await sleep();
  return groupIds.map(generateMockGroup);
}
export async function createGroup(groupInsert: GroupInsert): Promise<Group> {
  console.log("createGroup");
  console.log("groupInsert:", groupInsert);
  await sleep();
  return {
    ...groupInsert,
    id: generateGroupId(),
  };
}
export async function createGroups(
  groupInserts: GroupInsert[]
): Promise<Group[]> {
  console.log("createGroups");
  console.log("groupInserts:", groupInserts);
  await sleep();
  return groupInserts.map((groupInsert: GroupInsert) => ({
    ...groupInsert,
    id: generateGroupId(),
  }));
}
export async function updateGroup(
  groupId: string,
  groupUpdate: GroupUpdate
): Promise<boolean> {
  console.log("updateGroup");
  console.log("groupId:", groupId);
  console.log("updates:", groupUpdate);
  await sleep();
  return true;
}
export async function setGroups(groups: Group[]): Promise<boolean> {
  console.log("setGroups");
  console.log("groups:", groups);
  await sleep();
  return true;
}
export async function deleteGroup(groupId: string): Promise<boolean> {
  console.log("deleteGroup");
  console.log("groupId:", groupId);
  await sleep();
  return true;
}
export async function deleteGroups(groupIds: string[]): Promise<boolean> {
  console.log("deleteGroups");
  console.log("groupIds:", groupIds);
  await sleep();
  return true;
}
// #endregion

export async function createGroupOfThings(
  groupInsert: GroupInsert,
  thingInserts: ThingInsert[]
): Promise<GroupOfThings> {
  console.log("groupInsert:", groupInsert);
  console.log("thingInserts:", thingInserts);
  await sleep();
  return generateMockDataSet();
}

// #region Auth
export async function deleteAuthAccount(): Promise<boolean> {
  console.log("deleteAuthAccount");
  await sleep();
  return true;
}
// #endregion
