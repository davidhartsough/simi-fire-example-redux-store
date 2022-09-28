import type { Thing, ThingUpdate } from "../../types";
export declare const thingsSlice: import("@reduxjs/toolkit").Slice<Thing[], {
    receiveThings: (_: import("immer/dist/internal").WritableDraft<Thing>[], { payload }: {
        payload: Thing[];
    }) => Thing[];
    createThing: (state: import("immer/dist/internal").WritableDraft<Thing>[], { payload }: {
        payload: Thing;
    }) => void;
    createThings(state: import("immer/dist/internal").WritableDraft<Thing>[], { payload }: {
        payload: Thing[];
    }): void;
    modifyThing(state: import("immer/dist/internal").WritableDraft<Thing>[], { payload: { thingId, thingUpdate }, }: {
        payload: {
            thingId: string;
            thingUpdate: ThingUpdate;
        };
    }): void;
    updateThing: (state: import("immer/dist/internal").WritableDraft<Thing>[], { payload }: {
        payload: Thing;
    }) => void;
    updateThings(state: import("immer/dist/internal").WritableDraft<Thing>[], { payload }: {
        payload: Thing[];
    }): void;
    removeThing(state: import("immer/dist/internal").WritableDraft<Thing>[], { payload }: {
        payload: string;
    }): import("immer/dist/internal").WritableDraft<Thing>[];
    deleteThing: (state: import("immer/dist/internal").WritableDraft<Thing>[], { payload }: {
        payload: string;
    }) => void;
    deleteThings: (state: import("immer/dist/internal").WritableDraft<Thing>[], { payload }: {
        payload: string[];
    }) => import("immer/dist/internal").WritableDraft<Thing>[];
    putThingsInGroup(state: import("immer/dist/internal").WritableDraft<Thing>[], { payload: { thingIds, groupId }, }: {
        payload: {
            thingIds: string[];
            groupId: string;
        };
    }): void;
    deleteThingsOfGroup(state: import("immer/dist/internal").WritableDraft<Thing>[], { payload }: {
        payload: string;
    }): import("immer/dist/internal").WritableDraft<Thing>[];
    removeThingsFromGroup(state: import("immer/dist/internal").WritableDraft<Thing>[], { payload }: {
        payload: string[];
    }): void;
}, "things">;
export declare const receiveThings: import("@reduxjs/toolkit").ActionCreatorWithPayload<Thing[], string>, createThing: import("@reduxjs/toolkit").ActionCreatorWithPayload<Thing, string>, createThings: import("@reduxjs/toolkit").ActionCreatorWithPayload<Thing[], string>, modifyThing: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    thingId: string;
    thingUpdate: ThingUpdate;
}, string>, updateThing: import("@reduxjs/toolkit").ActionCreatorWithPayload<Thing, string>, updateThings: import("@reduxjs/toolkit").ActionCreatorWithPayload<Thing[], string>, removeThing: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, string>, deleteThing: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, string>, deleteThings: import("@reduxjs/toolkit").ActionCreatorWithPayload<string[], string>, deleteThingsOfGroup: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, string>, putThingsInGroup: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    thingIds: string[];
    groupId: string;
}, string>, removeThingsFromGroup: import("@reduxjs/toolkit").ActionCreatorWithPayload<string[], string>;
declare const _default: import("redux").Reducer<Thing[], import("redux").AnyAction>;
export default _default;
