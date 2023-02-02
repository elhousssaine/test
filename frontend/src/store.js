import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducers";
import errorReducer from "./reducers/errorReducers";
import lightReducer from "./reducers/themeReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    err: errorReducer,
    light: lightReducer,
  },
});

export default store;
