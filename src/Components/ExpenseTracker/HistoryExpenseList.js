import React from "react";
import { useSelector } from "react-redux";
import ExpenseList from "./ExpenseList";

export default function HistoryExpenseList() {
  const resItems = useSelector((store) => store.EXPENSE.expenseList);
  return (
    <div>
      <h4>Expense History</h4> <ExpenseList items={resItems} />
    </div>
  );
}
