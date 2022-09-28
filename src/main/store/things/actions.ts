import type { Thing, ThingInput, ThingUpdate } from "../../types";
import {
  createThing as dbCreateThing,
  createThings as dbCreateThings,
  updateThing as dbUpdateThing,
  setThings as dbSetThings,
  deleteThing as dbDeleteThing,
  deleteThings as dbDeleteThings,
  getAllUsersThings as dbGetAllUsersThings,
  getThingChanges,
  removeGroupFromThings as dbRemoveGroupFromThings, // TODO
} from "../../db";
import type {
  AppDispatch,
  AppThunkDispatch,
  GetState,
  ThunkActionBoolPromise,
} from "../types";
import { addThingToGroup, removeThingFromGroup } from "../groups/actions";
import {
  receiveThings,
  createThing as rsCreateThing,
  createThings as rsCreateThings,
  updateThings as rsUpdateThings,
  modifyThing as rsModifyThing,
  removeThing as rsRemoveThing,
  deleteThings as rsDeleteThings,
  deleteThingsOfGroup as rsDeleteThingsOfGroup, // TODO
  putThingsInGroup as rsPutThingsInGroup,
  removeThingsFromGroup as rsRemoveThingsFromGroup,
} from "./slice";

export function getAllUsersThings(): ThunkActionBoolPromise {
  return async (
    dispatch: AppThunkDispatch,
    getState: GetState
  ): Promise<boolean> => {
    const things = await dbGetAllUsersThings(getState().auth.id);
    dispatch(receiveThings(things));
    return true;
  };
}

export function createThing(thingInput: ThingInput): ThunkActionBoolPromise {
  return async (
    dispatch: AppThunkDispatch,
    getState: GetState
  ): Promise<boolean> => {
    const thing = await dbCreateThing({
      ...thingInput,
      user: getState().auth.id,
      createdAt: Date.now(),
    });
    dispatch(rsCreateThing(thing));
    const groupId = thing.group;
    if (groupId) {
      await dispatch(addThingToGroup(thing.id, groupId));
    }
    return true;
  };
}

export function createThings(
  thingInputs: ThingInput[]
): ThunkActionBoolPromise {
  return async (
    dispatch: AppThunkDispatch,
    getState: GetState
  ): Promise<boolean> => {
    const user = getState().auth.id;
    const things = await dbCreateThings(
      thingInputs.map((thingInput, index) => ({
        ...thingInput,
        user,
        createdAt: Date.now() + index,
      }))
    );
    dispatch(rsCreateThings(things));
    const thingsWithGroups = things.filter(({ group }) => !!group);
    await Promise.all(
      thingsWithGroups.map((thing) =>
        dispatch(addThingToGroup(thing.id, thing.group!))
      )
    );
    return true;
  };
}

function handleGroupUpdate(
  thingId: string,
  nextGroupId?: string | null
): ThunkActionBoolPromise {
  return async (
    dispatch: AppThunkDispatch,
    getState: GetState
  ): Promise<boolean> => {
    if (nextGroupId !== undefined) {
      const prevThing = getState().things.find(({ id }) => id === thingId);
      if (!prevThing) return false;
      const prevGroupId = prevThing.group;
      if (prevGroupId !== nextGroupId) {
        if (prevGroupId !== null) {
          await dispatch(removeThingFromGroup(thingId, prevGroupId));
        }
        if (nextGroupId !== null) {
          await dispatch(addThingToGroup(thingId, nextGroupId));
        }
      }
    }
    return true;
  };
}

export function updateThing(
  thingId: string,
  thingUpdate: ThingUpdate
): ThunkActionBoolPromise {
  return async (dispatch: AppThunkDispatch): Promise<boolean> => {
    const nextGroupId = thingUpdate.group;
    await dispatch(handleGroupUpdate(thingId, nextGroupId));
    await dbUpdateThing(thingId, thingUpdate);
    dispatch(rsModifyThing({ thingId, thingUpdate }));
    return true;
  };
}

export function updateThings(things: Thing[]): ThunkActionBoolPromise {
  return async (dispatch: AppThunkDispatch): Promise<boolean> => {
    // TODO: for each, if group id changes, update group(s)
    await Promise.all(
      things.map((thing) => dispatch(handleGroupUpdate(thing.id, thing.group)))
    );
    await dbSetThings(things);
    dispatch(rsUpdateThings(things));
    return true;
  };
}

export function deleteThing(thing: Thing): ThunkActionBoolPromise {
  return async (dispatch: AppThunkDispatch): Promise<boolean> => {
    const { id, group } = thing;
    await dbDeleteThing(id);
    dispatch(rsRemoveThing(id));
    if (group) {
      await dispatch(removeThingFromGroup(id, group));
    }
    return true;
  };
}
export function deleteThingById(thingId: string): ThunkActionBoolPromise {
  return async (
    dispatch: AppThunkDispatch,
    getState: GetState
  ): Promise<boolean> => {
    const thing = getState().things.find(({ id }) => id === thingId);
    if (!thing) return false;
    await dispatch(deleteThing(thing));
    return true;
  };
}

export function deleteThings(things: Thing[]): ThunkActionBoolPromise {
  return async (dispatch: AppThunkDispatch): Promise<boolean> => {
    const thingIds = things.map(({ id }) => id);
    await dbDeleteThings(thingIds);
    dispatch(rsDeleteThings(thingIds));
    const thingsWithGroups = things.filter(({ group }) => !!group);
    await Promise.all(
      thingsWithGroups.map((thing) =>
        dispatch(removeThingFromGroup(thing.id, thing.group!))
      )
    );
    return true;
  };
}
export function deleteThingsByIds(thingIds: string[]): ThunkActionBoolPromise {
  return async (
    dispatch: AppThunkDispatch,
    getState: GetState
  ): Promise<boolean> => {
    const things = getState().things.filter(({ id }) => thingIds.includes(id));
    if (things.length < 1) return false;
    await dispatch(deleteThings(things));
    return true;
  };
}

export function handleThingChanges() {
  return (dispatch: AppDispatch, getState: GetState): boolean => {
    const addThing = (thing: Thing) => dispatch(rsCreateThing(thing));
    const editThing = (thing: Thing) =>
      dispatch(
        rsModifyThing({
          thingId: thing.id,
          thingUpdate: {
            name: thing.name,
            group: thing.group,
            value: thing.value,
          },
        })
      );
    const removeThing = (id: string) => dispatch(rsRemoveThing(id));
    getThingChanges(getState().auth.id, addThing, editThing, removeThing);
    return true;
  };
}
