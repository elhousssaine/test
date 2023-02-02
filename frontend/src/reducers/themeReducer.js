import { createSlice } from "@reduxjs/toolkit";
const initialState = { light: true };

const lightSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    setlight: (state) => {
      state.light = true;
    },
    setdark: (state) => {
      state.light = false;
    },
  },
});

export const { setlight, setdark  } = lightSlice.actions;
export default lightSlice.reducer;
