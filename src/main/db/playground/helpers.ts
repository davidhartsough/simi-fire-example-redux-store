import { generateGroupId } from ".";
import type { Thing, Group, User, GroupOfThings } from "../../types";

const mockUserId = "userId123";
const otherUserId = "userId789";
export const mockUser: User = {
  id: mockUserId,
  email: "sandbox@playground.mock",
};

const consonants = [
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
const vowels = ["a", "e", "i", "o", "u"];

const getRandomNumber = (cap: number) => Math.floor(Math.random() * cap);
const getRandomItem = (arr: string[]) => arr[getRandomNumber(arr.length)];
const getRandomConsonant = () => getRandomItem(consonants);
const getRandomVowel = () => getRandomItem(vowels);
const getRandomBool = () => Math.random() >= 0.5;
const getRandomPair = () => getRandomVowel() + getRandomConsonant();
const getNumArray = (total: number) => [...Array(total)].map((_, i) => i);
function generateRandomWord() {
  let word = Math.random() >= 0.3 ? getRandomConsonant() : getRandomPair();
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
  let text = generateRandomWord();
  const x = getRandomNumber(4) + 1;
  text += [...Array(x)].map((_) => generateRandomWord()).join(" ");
  return text;
}
function getRandomIds() {
  const now = Date.now();
  return getNumArray(getRandomNumber(24) + 1).map((n) => `id${now + n}`);
}
export const getRandomId = () =>
  `${Date.now()}-${getRandomNumber(100)}${getRandomNumber(100)}`;

export const sleep = (): Promise<void> =>
  new Promise((res) => setTimeout(() => res(), 200));

export const generateMockGroup = (id: string): Group => ({
  id,
  user: otherUserId,
  name: generateRandomText(),
  things: getRandomIds(),
  createdAt: Date.now(),
});

export const generateMockThing = (
  id: string,
  groupId: string | null
): Thing => ({
  id,
  user: otherUserId,
  name: generateRandomText(),
  value: getRandomNumber(9),
  group: groupId,
  createdAt: Date.now(),
});

function generateThings(thingIds: string[], groupId: string): Thing[] {
  return thingIds.map((id) => generateMockThing(id, groupId));
}

export function generateMockDataSet(): GroupOfThings {
  const group = generateMockGroup(generateGroupId());
  return {
    group,
    things: generateThings(group.things, group.id),
  };
}
