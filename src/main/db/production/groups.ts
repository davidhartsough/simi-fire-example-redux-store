import {
  docRef,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  qWhereEquals,
  batchWrite,
  generateId,
  handleCollectionChanges,
  getDocsByIds,
  setDocs,
  deleteDocs,
  NonNullDocChangeHandler,
  addDocs,
} from "simi-fire";

import type { Group, GroupInsert, GroupUpdate } from "../../types";

const groupsColName = "groups";

export function generateGroupId(): string {
  return generateId(groupsColName);
}

export async function getGroup(groupId: string): Promise<Group | null> {
  const group = (await getDoc(groupsColName, groupId)) as Group | null;
  return group;
}

export async function getGroups(groupIds: string[]): Promise<Group[]> {
  const groups = (await getDocsByIds(groupsColName, groupIds)) as Group[];
  return groups;
}

export async function getAllUsersGroups(userId: string): Promise<Group[]> {
  const groups = (await getDocs(
    groupsColName,
    qWhereEquals("user", userId)
  )) as Group[];
  return groups;
}

export async function createGroup(groupInsert: GroupInsert): Promise<Group> {
  const id = await addDoc(groupsColName, groupInsert);
  return { id, ...groupInsert };
}

export async function setGroups(groups: Group[]): Promise<boolean> {
  await setDocs(groupsColName, groups);
  return true;
}

export async function createGroups(
  groupInserts: GroupInsert[]
): Promise<Group[]> {
  const groups: Group[] = (await addDocs(
    groupsColName,
    groupInserts
  )) as Group[];
  return groups;
}

export async function updateGroup(
  groupId: string,
  updates: GroupUpdate
): Promise<boolean> {
  await updateDoc(groupsColName, groupId, updates);
  return true;
}

export async function deleteGroup(groupId: string): Promise<boolean> {
  await deleteDoc(groupsColName, groupId);
  return true;
}

export async function deleteGroups(groupIds: string[]): Promise<boolean> {
  await deleteDocs(groupsColName, groupIds);
  return true;
}

export function getGroupChanges(
  userId: string,
  addGroup: (group: Group) => void,
  modifyGroup: (group: Group) => void,
  removeGroup: (id: string) => void
) {
  handleCollectionChanges(
    groupsColName,
    qWhereEquals("user", userId),
    addGroup as NonNullDocChangeHandler,
    modifyGroup as NonNullDocChangeHandler,
    removeGroup
  );
}
