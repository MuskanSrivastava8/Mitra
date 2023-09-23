import React from "react";
import { useSelector } from "react-redux";
import "./Expensetracker.scss";

export default function ExpenseBalance() {
  const resExpense = useSelector((store) => store.EXPENSE.expense);
  const resIncome = useSelector((store) => store.EXPENSE.income);
  const BalanceTotal = Number.parseFloat(resIncome) - Number.parseFloat(resExpense);

  return <div>Balance : &#8377;{BalanceTotal}</div>;
}
