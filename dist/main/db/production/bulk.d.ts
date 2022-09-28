import type { GroupsAndThings, GroupOfThings, GroupInsert, ThingInsert } from "../../types";
export declare function getAllGroupsAndThings(userId: string): Promise<GroupsAndThings>;
export declare function createGroupOfThings(groupInsert: GroupInsert, thingInserts: ThingInsert[]): Promise<GroupOfThings>;
export declare function addGroupToThings(groupId: string, thingIds: string[]): Promise<boolean>;
export declare function removeGroupFromThings(thingIds: string[]): Promise<boolean>;
