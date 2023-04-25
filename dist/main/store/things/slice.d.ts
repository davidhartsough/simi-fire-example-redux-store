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
export declare const receiveThings: import("@reduxjs/toolkit").ActionCreatorWithPayload<Thing[], "things/receiveThings">, createThing: import("@reduxjs/toolkit").ActionCreatorWithPayload<Thing, "things/createThing">, createThings: import("@reduxjs/toolkit").ActionCreatorWithPayload<Thing[], "things/createThings">, modifyThing: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    thingId: string;
    thingUpdate: ThingUpdate;
}, "things/modifyThing">, updateThing: import("@reduxjs/toolkit").ActionCreatorWithPayload<Thing, "things/updateThing">, updateThings: import("@reduxjs/toolkit").ActionCreatorWithPayload<Thing[], "things/updateThings">, removeThing: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "things/removeThing">, deleteThing: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "things/deleteThing">, deleteThings: import("@reduxjs/toolkit").ActionCreatorWithPayload<string[], "things/deleteThings">, deleteThingsOfGroup: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "things/deleteThingsOfGroup">, putThingsInGroup: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    thingIds: string[];
    groupId: string;
}, "things/putThingsInGroup">, removeThingsFromGroup: import("@reduxjs/toolkit").ActionCreatorWithPayload<string[], "things/removeThingsFromGroup">;
declare const _default: import("redux").Reducer<Thing[], import("redux").AnyAction>;
export default _default;
