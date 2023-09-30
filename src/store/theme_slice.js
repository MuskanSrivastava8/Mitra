import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "themeSlice",
  initialState: {
    dark_mode: true,
    light_mode: false,
    normal_mode: false,
  },
  reducers: {
    dark_mode_Action: (currentSlice, action) => {
      currentSlice.dark_mode = action.payload;
    },
    light_mode_Action: (currentSlice, action) => {
      currentSlice.light_mode = action.payload;
    },
    normal_mode_Action: (currentSlice, action) => {
      currentSlice.normal_mode = action.payload;
    },
  },
});
export const { dark_mode_Action, light_mode_Action, normal_mode_Action} = themeSlice.actions;
