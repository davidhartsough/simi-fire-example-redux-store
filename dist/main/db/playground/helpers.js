"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMockDataSet = exports.generateMockThing = exports.generateMockGroup = exports.sleep = exports.getRandomId = exports.mockUser = void 0;
var _1 = require(".");
var mockUserId = "userId123";
var otherUserId = "userId789";
exports.mockUser = {
    id: mockUserId,
    email: "sandbox@playground.mock",
};
var consonants = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
];
var vowels = ["a", "e", "i", "o", "u"];
var getRandomNumber = function (cap) { return Math.floor(Math.random() * cap); };
var getRandomItem = function (arr) { return arr[getRandomNumber(arr.length)]; };
var getRandomConsonant = function () { return getRandomItem(consonants); };
var getRandomVowel = function () { return getRandomItem(vowels); };
var getRandomBool = function () { return Math.random() >= 0.5; };
var getRandomPair = function () { return getRandomVowel() + getRandomConsonant(); };
var getNumArray = function (total) { return __spreadArray([], Array(total), true).map(function (_, i) { return i; }); };
function generateRandomWord() {
    var word = Math.random() >= 0.3 ? getRandomConsonant() : getRandomPair();
    word += getRandomPair();
    if (getRandomBool()) {
        word += getRandomPair();
    }
    if (getRandomBool()) {
        word += getRandomPair();
    }
    return word;
}
function generateRandomText() {
    var text = generateRandomWord();
    var x = getRandomNumber(4) + 1;
    text += __spreadArray([], Array(x), true).map(function (_) { return generateRandomWord(); }).join(" ");
    return text;
}
function getRandomIds() {
    var now = Date.now();
    return getNumArray(getRandomNumber(24) + 1).map(function (n) { return "id".concat(now + n); });
}
var getRandomId = function () {
    return "".concat(Date.now(), "-").concat(getRandomNumber(100)).concat(getRandomNumber(100));
};
exports.getRandomId = getRandomId;
var sleep = function () {
    return new Promise(function (res) { return setTimeout(function () { return res(); }, 200); });
};
exports.sleep = sleep;
var generateMockGroup = function (id) { return ({
    id: id,
    user: otherUserId,
    name: generateRandomText(),
    things: getRandomIds(),
    createdAt: Date.now(),
}); };
exports.generateMockGroup = generateMockGroup;
var generateMockThing = function (id, groupId) { return ({
    id: id,
    user: otherUserId,
    name: generateRandomText(),
    value: getRandomNumber(9),
    group: groupId,
    createdAt: Date.now(),
}); };
exports.generateMockThing = generateMockThing;
function generateThings(thingIds, groupId) {
    return thingIds.map(function (id) { return (0, exports.generateMockThing)(id, groupId); });
}
function generateMockDataSet() {
    var group = (0, exports.generateMockGroup)((0, _1.generateGroupId)());
    return {
        group: group,
        things: generateThings(group.things, group.id),
    };
}
exports.generateMockDataSet = generateMockDataSet;
//# sourceMappingURL=helpers.js.map