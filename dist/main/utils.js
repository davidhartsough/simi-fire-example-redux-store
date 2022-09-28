"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chunk = exports.filterThingsBySearchQuery = exports.randomSort = exports.sortThingsByValue = exports.sortThingsByName = exports.sortThingsById = void 0;
function sortThingsById(a, b) {
    if (a.id > b.id)
        return 1;
    if (a.id < b.id)
        return -1;
    return 0;
}
exports.sortThingsById = sortThingsById;
function sortThingsByName(a, b) {
    var aName = a.name.toLowerCase();
    var bName = b.name.toLowerCase();
    if (aName > bName)
        return 1;
    if (aName < bName)
        return -1;
    return 0;
}
exports.sortThingsByName = sortThingsByName;
function sortThingsByValue(a, b) {
    if (a.value < b.value)
        return -1;
    if (a.value > b.value)
        return 1;
    return 0;
}
exports.sortThingsByValue = sortThingsByValue;
var randomSort = function () { return Math.random() - 0.5; };
exports.randomSort = randomSort;
function filterThing(thing, check, groups) {
    var matchesThingName = check(thing.name);
    if (thing.group) {
        var index = groups.findIndex(function (_a) {
            var id = _a.id;
            return id === thing.group;
        });
        var matchesGroupName = index >= 0 ? check(groups[index].name) : false;
        return matchesThingName || matchesGroupName;
    }
    return matchesThingName;
}
function filterThingsByCheck(things, check, groups) {
    return things.filter(function (thing) { return filterThing(thing, check, groups); });
}
function filterByEachTerm(things, terms, groups) {
    return things.filter(function (thing) {
        return terms.every(function (term) {
            var check = function (text) { return text.toUpperCase().includes(term); };
            return filterThing(thing, check, groups);
        });
    });
}
function filterThingsBySearchQuery(query, things, groups) {
    if (query.length < 2)
        return things.slice();
    var queryLowerCase = query.toLowerCase();
    var checkFullQuery = function (text) {
        return text.toUpperCase().includes(queryLowerCase);
    };
    var byFullQuery = filterThingsByCheck(things, checkFullQuery, groups);
    if (byFullQuery.length > 0)
        return byFullQuery;
    // split query into separate search terms
    var terms = queryLowerCase
        .split(",")
        .join(" ")
        .split(" ")
        .map(function (q) { return q.trim(); })
        .filter(function (q) { return q.length > 1; });
    var checkByFullTerms = function (text) {
        return terms.every(function (term) { return text.toLowerCase().includes(term); });
    };
    var byFullTerms = filterThingsByCheck(things, checkByFullTerms, groups);
    if (byFullTerms.length > 0)
        return byFullTerms;
    var byEachTerm = filterByEachTerm(things, terms, groups);
    if (byEachTerm.length > 0)
        return byEachTerm;
    var checkBySeparateTerms = function (text) {
        return terms.some(function (term) { return text.toLowerCase().includes(term); });
    };
    var bySeparateTerms = filterThingsByCheck(things, checkBySeparateTerms, groups);
    return bySeparateTerms;
}
exports.filterThingsBySearchQuery = filterThingsBySearchQuery;
function chunk(ids, size) {
    if (size === void 0) { size = 1; }
    var length = ids.length;
    if (!length || size < 1)
        return [];
    var index = 0;
    var resIndex = 0;
    var result = new Array(Math.ceil(length / size));
    while (index < length) {
        result[resIndex++] = ids.slice(index, (index += size));
    }
    return result;
}
exports.chunk = chunk;
//# sourceMappingURL=utils.js.map