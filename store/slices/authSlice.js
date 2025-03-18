import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  token: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.data.user;
      state.isAuthenticated = true;
      state.token = action.payload.data.token;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.token = undefined;
    },
  },
});

export const { login, logout } = authSlice.actions;
export const selectCurrentUser = (state) => state.auth?.user;
export const selectUserToken = (state) => state.auth?.token;
export default authSlice.reducer;
