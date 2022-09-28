import type { Group, Thing } from "./types";
export declare function sortThingsById(a: Thing, b: Thing): number;
export declare function sortThingsByName(a: Thing, b: Thing): number;
export declare function sortThingsByValue(a: Thing, b: Thing): number;
export declare const randomSort: () => number;
export declare function filterThingsBySearchQuery(query: string, things: readonly Thing[], groups: readonly Group[]): Thing[];
export declare function chunk(ids: string[], size?: number): any[];
