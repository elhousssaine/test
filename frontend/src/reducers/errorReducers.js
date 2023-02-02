import { createSlice } from "@reduxjs/toolkit";
const initialState = {};

const errorSilce = createSlice({
  name: "err",
  initialState: initialState,
  reducers: {
    setErrors(state, action) {
      return action.payload;
    },
    getErrors(state, action) {
      return state;
    },
  },
});

export const { getErrors , setErrors } = errorSilce.actions;
export default errorSilce.reducer;
