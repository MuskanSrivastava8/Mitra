import React from "react";
import { useSelector } from "react-redux";
import "./Expensetracker.scss";

export default function ExpenseSum() {
  const resExpenseList = useSelector((store) => store.EXPENSE.expenseList);
  const spendTotal = resExpenseList.reduce((acc, expense) => {
    return expense.type === "Expense" ? Number.parseFloat(acc) + Number.parseFloat(expense.price) : Number.parseFloat(acc) + 0
  }, 0);
  return (
    <div>
      <h4>Expense</h4>
      &#8377;{spendTotal}
    </div>
  );
}
