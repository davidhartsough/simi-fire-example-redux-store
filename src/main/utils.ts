import type { Group, Thing } from "./types";

export function sortThingsById(a: Thing, b: Thing): number {
  if (a.id > b.id) return 1;
  if (a.id < b.id) return -1;
  return 0;
}
export function sortThingsByName(a: Thing, b: Thing): number {
  const aName = a.name.toLowerCase();
  const bName = b.name.toLowerCase();
  if (aName > bName) return 1;
  if (aName < bName) return -1;
  return 0;
}
export function sortThingsByValue(a: Thing, b: Thing): number {
  if (a.value < b.value) return -1;
  if (a.value > b.value) return 1;
  return 0;
}
export const randomSort = (): number => Math.random() - 0.5;

function filterThing(
  thing: Thing,
  check: (text: string) => boolean,
  groups: readonly Group[]
): boolean {
  const matchesThingName = check(thing.name);
  if (thing.group) {
    const index = groups.findIndex(({ id }) => id === thing.group);
    const matchesGroupName = index >= 0 ? check(groups[index].name) : false;
    return matchesThingName || matchesGroupName;
  }
  return matchesThingName;
}
function filterThingsByCheck(
  things: readonly Thing[],
  check: (text: string) => boolean,
  groups: readonly Group[]
): Thing[] {
  return things.filter((thing) => filterThing(thing, check, groups));
}
function filterByEachTerm(
  things: readonly Thing[],
  terms: string[],
  groups: readonly Group[]
): Thing[] {
  return things.filter((thing) =>
    terms.every((term) => {
      const check = (text: string) => text.toUpperCase().includes(term);
      return filterThing(thing, check, groups);
    })
  );
}
export function filterThingsBySearchQuery(
  query: string,
  things: readonly Thing[],
  groups: readonly Group[]
): Thing[] {
  if (query.length < 2) return things.slice();
  const queryLowerCase = query.toLowerCase();
  const checkFullQuery = (text: string) =>
    text.toUpperCase().includes(queryLowerCase);
  const byFullQuery = filterThingsByCheck(things, checkFullQuery, groups);
  if (byFullQuery.length > 0) return byFullQuery;

  // split query into separate search terms
  const terms = queryLowerCase
    .split(",")
    .join(" ")
    .split(" ")
    .map((q) => q.trim())
    .filter((q) => q.length > 1);
  const checkByFullTerms = (text: string) =>
    terms.every((term) => text.toLowerCase().includes(term));
  const byFullTerms = filterThingsByCheck(things, checkByFullTerms, groups);
  if (byFullTerms.length > 0) return byFullTerms;

  const byEachTerm = filterByEachTerm(things, terms, groups);
  if (byEachTerm.length > 0) return byEachTerm;

  const checkBySeparateTerms = (text: string) =>
    terms.some((term) => text.toLowerCase().includes(term));
  const bySeparateTerms = filterThingsByCheck(
    things,
    checkBySeparateTerms,
    groups
  );
  return bySeparateTerms;
}

export function chunk(ids: string[], size = 1) {
  const length = ids.length;
  if (!length || size < 1) return [];
  let index = 0;
  let resIndex = 0;
  const result = new Array(Math.ceil(length / size));
  while (index < length) {
    result[resIndex++] = ids.slice(index, (index += size));
  }
  return result;
}
