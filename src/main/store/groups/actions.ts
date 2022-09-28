import type { Group, GroupInput, GroupUpdate } from "../../types";
import {
  getGroupChanges,
  getAllUsersGroups as dbGetAllUsersGroups,
  createGroup as dbCreateGroup,
  createGroups as dbCreateGroups,
  updateGroup as dbUpdateGroup,
  setGroups as dbSetGroups,
  deleteGroup as dbDeleteGroup,
  deleteGroups as dbDeleteGroups,
  createGroupOfThings as dbCreateGroupOfThings, // TODO
  addGroupToThings as dbAddGroupToThings,
  removeGroupFromThings as dbRemoveGroupFromThings,
} from "../../db";
import type {
  AppDispatch,
  AppThunkDispatch,
  GetState,
  ThunkActionBoolPromise,
} from "../types";
import { removeThingsFromGroup as rsRemoveThingsFromGroup } from "../things/slice";
import {
  receiveGroups,
  createGroup as rsCreateGroup,
  createGroups as rsCreateGroups,
  modifyGroup as rsModifyGroup,
  updateGroups as rsUpdateGroups,
  removeGroup as rsRemoveGroup,
  deleteGroups as rsDeleteGroups,
} from "./slice";

//

export function removeGroupIdFromThings(
  groupId: string
): ThunkActionBoolPromise {
  return async (
    dispatch: AppThunkDispatch,
    getState: GetState
  ): Promise<boolean> => {
    const thingIds = getState()
      .things.filter(({ group }) => group === groupId)
      .map(({ id }) => id);
    await dbRemoveGroupFromThings(thingIds);
    dispatch(rsRemoveThingsFromGroup(thingIds));
    return true;
  };
}

export function removeGroupIdsFromThings(
  groupIds: string[]
): ThunkActionBoolPromise {
  return async (
    dispatch: AppThunkDispatch,
    getState: GetState
  ): Promise<boolean> => {
    const thingIds = getState()
      .things.filter(({ group }) => group && groupIds.includes(group))
      .map(({ id }) => id);
    await dbRemoveGroupFromThings(thingIds);
    dispatch(rsRemoveThingsFromGroup(thingIds));
    return true;
  };
}

//

export function getAllUsersGroups(): ThunkActionBoolPromise {
  return async (
    dispatch: AppThunkDispatch,
    getState: GetState
  ): Promise<boolean> => {
    const groups = await dbGetAllUsersGroups(getState().auth.id);
    dispatch(receiveGroups(groups));
    return true;
  };
}

export function createGroup(groupInput: GroupInput): ThunkActionBoolPromise {
  return async (
    dispatch: AppThunkDispatch,
    getState: GetState
  ): Promise<boolean> => {
    const group = await dbCreateGroup({
      ...groupInput,
      user: getState().auth.id,
      createdAt: Date.now(),
    });
    dispatch(rsCreateGroup(group));
    return true;
  };
}

export function createGroups(
  groupInputs: GroupInput[]
): ThunkActionBoolPromise {
  return async (
    dispatch: AppThunkDispatch,
    getState: GetState
  ): Promise<boolean> => {
    const user = getState().auth.id;
    const groups = await dbCreateGroups(
      groupInputs.map((groupInput, index) => ({
        ...groupInput,
        user,
        createdAt: Date.now() + index,
      }))
    );
    dispatch(rsCreateGroups(groups));
    return true;
  };
}

export function updateGroup(
  groupId: string,
  groupUpdate: GroupUpdate
): ThunkActionBoolPromise {
  return async (dispatch: AppThunkDispatch): Promise<boolean> => {
    await dbUpdateGroup(groupId, groupUpdate);
    dispatch(rsModifyGroup({ groupId, groupUpdate }));
    return true;
  };
}

export function updateGroups(groups: Group[]): ThunkActionBoolPromise {
  return async (dispatch: AppThunkDispatch): Promise<boolean> => {
    await dbSetGroups(groups);
    dispatch(rsUpdateGroups(groups));
    return true;
  };
}

export function deleteGroup(groupId: string): ThunkActionBoolPromise {
  return async (dispatch: AppThunkDispatch): Promise<boolean> => {
    await dispatch(removeGroupIdFromThings(groupId));
    await dbDeleteGroup(groupId);
    dispatch(rsRemoveGroup(groupId));
    return true;
  };
}

export function deleteGroups(groupIds: string[]): ThunkActionBoolPromise {
  return async (dispatch: AppThunkDispatch): Promise<boolean> => {
    await dispatch(removeGroupIdsFromThings(groupIds));
    await dbDeleteGroups(groupIds);
    dispatch(rsDeleteGroups(groupIds));
    return true;
  };
}

export function handleGroupChanges() {
  return (dispatch: AppDispatch, getState: GetState): boolean => {
    const addGroup = (group: Group) => dispatch(rsCreateGroup(group));
    const editGroup = (group: Group) =>
      dispatch(
        rsModifyGroup({
          groupId: group.id,
          groupUpdate: {
            name: group.name,
            things: group.things,
          },
        })
      );
    const removeGroup = (id: string) => dispatch(rsRemoveGroup(id));
    getGroupChanges(getState().auth.id, addGroup, editGroup, removeGroup);
    return true;
  };
}

//

export function addThingToGroup(
  thingId: string,
  groupId: string
): ThunkActionBoolPromise {
  return async (
    dispatch: AppThunkDispatch,
    getState: GetState
  ): Promise<boolean> => {
    const group = getState().groups.find(({ id }) => id === groupId);
    if (!group) return false;
    await dispatch(
      updateGroup(groupId, {
        things: [...group.things, thingId],
      })
    );
    return true;
  };
}

export function removeThingFromGroup(
  thingId: string,
  groupId: string
): ThunkActionBoolPromise {
  return async (
    dispatch: AppThunkDispatch,
    getState: GetState
  ): Promise<boolean> => {
    const group = getState().groups.find(({ id }) => id === groupId);
    if (!group) return false;
    await dispatch(
      updateGroup(groupId, {
        things: group.things.filter((id) => id !== thingId),
      })
    );
    return true;
  };
}
