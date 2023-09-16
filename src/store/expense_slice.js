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
    addExpenseIncome: (currentSlice, action) => {
      currentSlice.income = action.payload;
    },
    deleteExpenseIncome: (currentSlice, action) => {
      if (currentSlice.expenseList.length !== 0) {
        currentSlice.expenseList = currentSlice.expenseList.filter(
          (element) => {
            return (
              element.price + element.expenseName !==
              action.payload.price + action.payload.expenseName
            );
          }
        );
      }
    },
  },
});
export const { addExpenseAction, addExpenseIncome, deleteExpenseIncome } =
  expenseSlice.actions;
