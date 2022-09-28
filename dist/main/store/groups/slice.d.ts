import type { Group, GroupUpdate } from "../../types";
export declare const groupsSlice: import("@reduxjs/toolkit").Slice<Group[], {
    receiveGroups: (_: import("immer/dist/internal").WritableDraft<Group>[], { payload }: {
        payload: Group[];
    }) => Group[];
    createGroup: (state: import("immer/dist/internal").WritableDraft<Group>[], { payload }: {
        payload: Group;
    }) => void;
    createGroups(state: import("immer/dist/internal").WritableDraft<Group>[], { payload }: {
        payload: Group[];
    }): void;
    modifyGroup(state: import("immer/dist/internal").WritableDraft<Group>[], { payload: { groupId, groupUpdate }, }: {
        payload: {
            groupId: string;
            groupUpdate: GroupUpdate;
        };
    }): void;
    updateGroup: (state: import("immer/dist/internal").WritableDraft<Group>[], { payload }: {
        payload: Group;
    }) => void;
    updateGroups(state: import("immer/dist/internal").WritableDraft<Group>[], { payload }: {
        payload: Group[];
    }): void;
    removeGroup(state: import("immer/dist/internal").WritableDraft<Group>[], { payload }: {
        payload: string;
    }): import("immer/dist/internal").WritableDraft<Group>[];
    deleteGroup: (state: import("immer/dist/internal").WritableDraft<Group>[], { payload }: {
        payload: string;
    }) => void;
    deleteGroups: (state: import("immer/dist/internal").WritableDraft<Group>[], { payload }: {
        payload: string[];
    }) => import("immer/dist/internal").WritableDraft<Group>[];
}, "groups">;
export declare const receiveGroups: import("@reduxjs/toolkit").ActionCreatorWithPayload<Group[], string>, createGroup: import("@reduxjs/toolkit").ActionCreatorWithPayload<Group, string>, createGroups: import("@reduxjs/toolkit").ActionCreatorWithPayload<Group[], string>, modifyGroup: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    groupId: string;
    groupUpdate: GroupUpdate;
}, string>, updateGroup: import("@reduxjs/toolkit").ActionCreatorWithPayload<Group, string>, updateGroups: import("@reduxjs/toolkit").ActionCreatorWithPayload<Group[], string>, removeGroup: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, string>, deleteGroup: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, string>, deleteGroups: import("@reduxjs/toolkit").ActionCreatorWithPayload<string[], string>;
declare const _default: import("redux").Reducer<Group[], import("redux").AnyAction>;
export default _default;
