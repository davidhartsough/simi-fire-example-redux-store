import {
  deleteAuthUser,
  deleteDoc,
  DocChangeHandler,
  getDoc,
  handleDocChanges,
  setDoc,
  updateDoc,
} from "simi-fire";

import type { UserInput, User } from "../../types";

const usersColName = "users";

export async function getUser(userId: string): Promise<User | null> {
  const user = (await getDoc(usersColName, userId)) as User | null;
  return user;
}

export async function createUser(userId: string, email: string): Promise<User> {
  const user: UserInput = { email };
  await setDoc(usersColName, userId, user);
  return {
    ...user,
    id: userId,
  };
}

export async function getOrCreateUser(
  userId: string,
  email: string
): Promise<User> {
  const user = await getUser(userId);
  if (user) return user;
  const newUser = await createUser(userId, email);
  return newUser;
}

export async function updateUser(
  userId: string,
  updates: UserInput
): Promise<boolean> {
  await updateDoc(usersColName, userId, updates);
  return true;
}

export async function deleteUser(userId: string): Promise<boolean> {
  await deleteDoc(usersColName, userId);
  return true;
}

export async function deleteAuthAccount(): Promise<boolean> {
  await deleteAuthUser();
  return true;
}

export function getUserChanges(
  uid: string,
  handler: (userDoc: User | null) => void
) {
  handleDocChanges(usersColName, uid, handler as DocChangeHandler);
}
