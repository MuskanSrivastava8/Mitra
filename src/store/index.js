import { configureStore } from "@reduxjs/toolkit";
import { expenseSlice } from "./expense_slice";
import { themeSlice } from "./theme_slice";

const store = configureStore({
  reducer: {
    EXPENSE: expenseSlice.reducer,
    THEME:themeSlice.reducer
  },
});
export { store };
