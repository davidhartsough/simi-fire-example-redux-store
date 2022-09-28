import { docRef, batchWrite, generateId } from "simi-fire";

import type {
  Thing,
  Group,
  GroupsAndThings,
  GroupOfThings,
  GroupInsert,
  ThingInsert,
} from "../../types";
import { chunk } from "../../utils";
import { getAllUsersGroups } from "./groups";
import { getAllUsersThings } from "./things";

const thingsColName = "things";
const groupsColName = "groups";

export async function getAllGroupsAndThings(
  userId: string
): Promise<GroupsAndThings> {
  const [groups, things] = await Promise.all([
    getAllUsersGroups(userId),
    getAllUsersThings(userId),
  ]);
  return { groups, things };
}

export async function createGroupOfThings(
  groupInsert: GroupInsert,
  thingInserts: ThingInsert[]
): Promise<GroupOfThings> {
  const groupId = generateId(groupsColName);
  const things: Thing[] = thingInserts.map(
    (newThing): Thing => ({
      ...newThing,
      id: generateId(thingsColName),
      group: groupId,
    })
  );
  const thingIds = things.map(({ id }) => id);
  const group: Group = {
    ...groupInsert,
    id: groupId,
    things: thingIds,
  };
  let batch = batchWrite();
  batch.set(docRef(groupsColName, groupId), (({ id, ...rest }) => rest)(group));
  for (const thingIdsChunk of chunk(thingIds, 200)) {
    thingIdsChunk.forEach((thingId: string) => {
      const thing = things.find(({ id }) => id === thingId);
      if (thing) {
        batch.set(docRef(thingsColName, thingId), thing);
      }
    });
    await batch.commit();
    batch = batchWrite();
  }
  return { group, things };
}

export async function addGroupToThings(
  groupId: string,
  thingIds: string[]
): Promise<boolean> {
  const batch = batchWrite();
  thingIds.forEach((thingId) => {
    batch.update(docRef(thingsColName, thingId), {
      group: groupId,
    });
  });
  await batch.commit();
  return true;
}

export async function removeGroupFromThings(
  thingIds: string[]
): Promise<boolean> {
  const batch = batchWrite();
  thingIds.forEach((thingId) => {
    batch.update(docRef(thingsColName, thingId), {
      group: null,
    });
  });
  await batch.commit();
  return true;
}
