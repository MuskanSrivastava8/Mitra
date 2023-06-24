import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    expenseList: [],
    income: 1000,
  },
  reducers: {
    addExpenseAction: (currentSlice, action) => {
      currentSlice.expenseList.push(action.payload);
    },
    addexpenseIncome: (currentSlice, action) => {
      currentSlice.income = action.payload;
    },
  },
});
export const { addExpenseAction, addexpenseIncome } = expenseSlice.actions;
