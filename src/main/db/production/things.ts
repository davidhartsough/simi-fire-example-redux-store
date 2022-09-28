import {
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  qWhereEquals,
  generateId,
  getDocsByIds,
  handleCollectionChanges,
  setDocs,
  deleteDocs,
  NonNullDocChangeHandler,
  batchWrite,
  docRef,
  addDocs,
} from "simi-fire";

import type { Thing, ThingInsert, ThingUpdate } from "../../types";

const thingsColName = "things";

export function generateThingId(): string {
  return generateId(thingsColName);
}

export function getThingChanges(
  userId: string,
  addThing: (thing: Thing) => void,
  modifyThing: (thing: Thing) => void,
  removeThing: (id: string) => void
) {
  handleCollectionChanges(
    thingsColName,
    qWhereEquals("user", userId),
    addThing as NonNullDocChangeHandler,
    modifyThing as NonNullDocChangeHandler,
    removeThing
  );
}

export async function getThing(thingId: string): Promise<Thing | null> {
  const thing = (await getDoc(thingsColName, thingId)) as Thing | null;
  return thing;
}

export async function getThings(thingIds: string[]): Promise<Thing[]> {
  const things = (await getDocsByIds(thingsColName, thingIds)) as Thing[];
  return things;
}

export async function getAllUsersThings(userId: string): Promise<Thing[]> {
  const things = (await getDocs(
    thingsColName,
    qWhereEquals("user", userId)
  )) as Thing[];
  return things;
}

export async function createThing(thingInsert: ThingInsert): Promise<Thing> {
  const id = await addDoc(thingsColName, thingInsert);
  return { id, ...thingInsert };
}

export async function createThings(
  thingInserts: ThingInsert[]
): Promise<Thing[]> {
  const things: Thing[] = (await addDocs(
    thingsColName,
    thingInserts
  )) as Thing[];
  return things;
}

export async function updateThing(
  thingId: string,
  thingUpdate: ThingUpdate
): Promise<boolean> {
  await updateDoc(thingsColName, thingId, thingUpdate);
  return true;
}

export async function setThings(things: Thing[]): Promise<boolean> {
  await setDocs(thingsColName, things);
  return true;
}

export async function deleteThing(thingId: string): Promise<boolean> {
  await deleteDoc(thingsColName, thingId);
  return true;
}

export async function deleteThings(thingIds: string[]): Promise<boolean> {
  await deleteDocs(thingsColName, thingIds);
  return true;
}
