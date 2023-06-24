import React from "react";
import { useSelector } from "react-redux";
import ExpenseList from "./ExpenseList";

export default function HistoryExpenseList() {
  const resItems = useSelector((store) => store.EXPENSE.expenseList);
  return (
    <div>
      Expense History : <ExpenseList items={resItems} />
    </div>
  );
}
