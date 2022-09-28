import { createSlice } from "@reduxjs/toolkit";

import type { Group, GroupUpdate } from "../../types";

const initialState: Group[] = [];

export const groupsSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {
    receiveGroups: (_, { payload }: { payload: Group[] }) => payload,
    createGroup: (state, { payload }: { payload: Group }) => {
      if (!state.some(({ id }) => id === payload.id)) {
        state.unshift(payload);
      }
    },
    createGroups(state, { payload }: { payload: Group[] }) {
      const ids = new Set<string>(state.map(({ id }) => id));
      const newGroups = payload.filter(({ id }) => !ids.has(id));
      state.unshift(...newGroups);
    },
    modifyGroup(
      state,
      {
        payload: { groupId, groupUpdate },
      }: { payload: { groupId: string; groupUpdate: GroupUpdate } }
    ) {
      const index = state.findIndex(({ id }) => id === groupId);
      if (index !== -1) {
        state[index] = {
          ...state[index],
          ...groupUpdate,
        };
      }
    },
    updateGroup: (state, { payload }: { payload: Group }) => {
      const index = state.findIndex(({ id }) => id === payload.id);
      if (index !== -1) {
        state[index] = payload;
      }
    },
    updateGroups(state, { payload }: { payload: Group[] }) {
      payload.forEach((group: Group) => {
        const index = state.findIndex(({ id }) => id === group.id);
        if (index !== -1) {
          state[index] = { ...state[index], ...group };
        }
      });
    },
    removeGroup(state, { payload }: { payload: string }) {
      return state.filter(({ id }) => id !== payload);
    },
    deleteGroup: (state, { payload }: { payload: string }) => {
      const index = state.findIndex((group) => group.id === payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    deleteGroups: (state, { payload }: { payload: string[] }) => {
      return state.filter(({ id }) => !payload.includes(id));
    },
  },
});

export const {
  receiveGroups,
  createGroup,
  createGroups,
  modifyGroup,
  updateGroup,
  updateGroups,
  removeGroup,
  deleteGroup,
  deleteGroups,
} = groupsSlice.actions;

export default groupsSlice.reducer;
