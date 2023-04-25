export interface UserInput {
    email: string;
}
export interface User extends UserInput {
    id: string;
}
export interface ThingUpdate {
    name?: string;
    value?: number;
    group?: string | null;
}
export interface ThingInput {
    name: string;
    value: number;
    group: string | null;
}
export interface ThingInsert extends ThingInput {
    user: string;
    createdAt: number;
}
export interface Thing extends ThingInsert {
    id: string;
}
export interface GroupUpdate {
    name?: string;
    things?: string[];
}
export interface GroupInput {
    name: string;
    things: string[];
}
export interface GroupInsert extends GroupInput {
    user: string;
    createdAt: number;
}
export interface Group extends GroupInsert {
    id: string;
}
export type GroupOfThings = {
    group: Group;
    things: Thing[];
};
export type GroupsAndThings = {
    groups: Group[];
    things: Thing[];
};
