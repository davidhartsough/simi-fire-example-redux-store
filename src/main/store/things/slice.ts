import { createSlice } from "@reduxjs/toolkit";

import type { Thing, ThingUpdate } from "../../types";

const initialState: Thing[] = [];

export const thingsSlice = createSlice({
  name: "things",
  initialState,
  reducers: {
    receiveThings: (_, { payload }: { payload: Thing[] }) => payload,
    createThing: (state, { payload }: { payload: Thing }) => {
      if (!state.some(({ id }) => id === payload.id)) {
        state.unshift(payload);
      }
    },
    createThings(state, { payload }: { payload: Thing[] }) {
      const ids = new Set<string>(state.map(({ id }) => id));
      const newThings = payload.filter(({ id }) => !ids.has(id));
      state.unshift(...newThings);
    },
    modifyThing(
      state,
      {
        payload: { thingId, thingUpdate },
      }: { payload: { thingId: string; thingUpdate: ThingUpdate } }
    ) {
      const index = state.findIndex(({ id }) => id === thingId);
      if (index !== -1) {
        state[index] = {
          ...state[index],
          ...thingUpdate,
        };
      }
    },
    updateThing: (state, { payload }: { payload: Thing }) => {
      const index = state.findIndex(({ id }) => id === payload.id);
      if (index !== -1) {
        state[index] = payload;
      }
    },
    updateThings(state, { payload }: { payload: Thing[] }) {
      payload.forEach((thing: Thing) => {
        const index = state.findIndex(({ id }) => id === thing.id);
        if (index !== -1) {
          state[index] = { ...state[index], ...thing };
        }
      });
    },
    removeThing(state, { payload }: { payload: string }) {
      return state.filter(({ id }) => id !== payload);
    },
    deleteThing: (state, { payload }: { payload: string }) => {
      const index = state.findIndex((thing) => thing.id === payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    deleteThings: (state, { payload }: { payload: string[] }) => {
      return state.filter(({ id }) => !payload.includes(id));
    },
    putThingsInGroup(
      state,
      {
        payload: { thingIds, groupId },
      }: { payload: { thingIds: string[]; groupId: string } }
    ) {
      thingIds.forEach((thingId: string) => {
        const index = state.findIndex(({ id }) => id === thingId);
        if (index !== -1) {
          state[index].group = groupId;
        }
      });
    },
    deleteThingsOfGroup(state, { payload }: { payload: string }) {
      return state.filter(({ group }) => group !== payload);
    },
    removeThingsFromGroup(state, { payload }: { payload: string[] }) {
      payload.forEach((thingId: string) => {
        const index = state.findIndex(({ id }) => id === thingId);
        if (index !== -1) {
          state[index].group = null;
        }
      });
    },
  },
});

export const {
  receiveThings,
  createThing,
  createThings,
  modifyThing,
  updateThing,
  updateThings,
  removeThing,
  deleteThing,
  deleteThings,
  deleteThingsOfGroup,
  putThingsInGroup,
  removeThingsFromGroup,
} = thingsSlice.actions;

export default thingsSlice.reducer;
