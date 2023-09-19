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
    addIncomeAction: (currentSlice, action) => {
      currentSlice.expenseList.push(action.payload);
    },
    addExpenseIncome: (currentSlice, action) => {
      currentSlice.income = action.payload;
    },
    deleteExpenseIncome: (currentSlice, action) => {
      if (currentSlice.expenseList.length > 0) {
        currentSlice.expenseList = currentSlice.expenseList.filter(
          (element) => {
            return (
              element.id !== action.payload.ID
            );
          }
        );
      }
    },
    saveEditExpenseIncome: (currentSlice, action) => {
      currentSlice.expenseList.forEach((item)=>{
        if(item.id===action.payload.ID){
          item.expenseName=action.payload.editName
          
        }
      })
    },
    saveEditExpenseIncomePrice: (currentSlice, action) => {
      currentSlice.expenseList.forEach((item)=>{
        if(item.id===action.payload.ID){
          item.price=action.payload.editPrice
          
        }
      })
    },
  },
});
export const { addExpenseAction, addIncomeAction, addExpenseIncome, deleteExpenseIncome, saveEditExpenseIncome, saveEditExpenseIncomePrice } =
  expenseSlice.actions;
