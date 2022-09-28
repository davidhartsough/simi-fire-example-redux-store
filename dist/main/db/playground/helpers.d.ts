import type { Thing, Group, User, GroupOfThings } from "../../types";
export declare const mockUser: User;
export declare const getRandomId: () => string;
export declare const sleep: () => Promise<void>;
export declare const generateMockGroup: (id: string) => Group;
export declare const generateMockThing: (id: string, groupId: string | null) => Thing;
export declare function generateMockDataSet(): GroupOfThings;
