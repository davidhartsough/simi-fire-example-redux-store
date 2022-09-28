import { createSlice } from "@reduxjs/toolkit";

import type { User, UserInput } from "../../types";

export interface Auth extends User {
  loading: boolean;
  isSignedIn: boolean;
}

export const initialState = {
  loading: false,
  isSignedIn: false,
  id: "",
  email: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    receive: (_, { payload }: { payload: User }) => ({
      loading: false,
      isSignedIn: true,
      ...payload,
    }),
    reset: () => initialState,
    setLoading(state) {
      state.loading = true;
    },
    updateUser(state, { payload }: { payload: UserInput }) {
      if (typeof payload.email === "string") {
        state.email = payload.email;
      }
    },
  },
});

export const { receive, reset, setLoading, updateUser } = authSlice.actions;
export default authSlice.reducer;
