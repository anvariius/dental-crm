import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "@/components/auth/types.ts";

interface IState {
  user: UserType;
  token: string | null;
}

const getLSUser = (): UserType => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

const initialState: IState = {
  user: localStorage.getItem("user") ? getLSUser() : null,
  token: localStorage.getItem("token") || null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  selectors: {
    currentUser: (state) => state.user,
    currentToken: (state) => state.token,
  },
  reducers: {
    setAuth: (state: IState, action) => {
      const { user, token } = action.payload;

      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));

      state.token = token;
      localStorage.setItem("token", token);
      console.log({ user, token });
    },
    logOut: (state: IState) => {
      state.user = null;
      localStorage.removeItem("user");
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});

export const { setAuth, logOut } = authSlice.actions;
export const { currentUser, currentToken } = authSlice.selectors;
