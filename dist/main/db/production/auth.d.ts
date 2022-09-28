import type { UserInput, User } from "../../types";
export declare function getUser(userId: string): Promise<User | null>;
export declare function createUser(userId: string, email: string): Promise<User>;
export declare function getOrCreateUser(userId: string, email: string): Promise<User>;
export declare function updateUser(userId: string, updates: UserInput): Promise<boolean>;
export declare function deleteUser(userId: string): Promise<boolean>;
export declare function deleteAuthAccount(): Promise<boolean>;
export declare function getUserChanges(uid: string, handler: (userDoc: User | null) => void): void;
