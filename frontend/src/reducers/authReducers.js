import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser } from "../actions/authActions";
import setAuthToken from "../utils/setAuthToken";

import isEmpty from "is-empty";

const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

const initialState = {
  isAuthenticated: false,
  userInfo: {},
  loading: false,
  userToken,
  error: null,
  success: false,
};

const authSilce = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setCurrentUser(state, action) {
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        userInfo: action.payload.userdata,
      };
    },
    logoutUser(state, action) {
      localStorage.removeItem("userToken");
      setAuthToken(false);
      return {
        ...state,
        isAuthenticated: false,
        userInfo: {},
        userToken: null,
        success: false,
        error: null,
      };
    },
  },
  extraReducers: {
    // login user
    [loginUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.userInfo = payload.userdata;
      state.userToken = payload.token;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.error = payload;
    },

    // register user
    [registerUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true; // registration successful
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { setCurrentUser, setUserLoading, logoutUser } = authSilce.actions;
export default authSilce.reducer;
