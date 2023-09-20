import React from "react";
import { useSelector } from "react-redux";
import "./Expensetracker.scss";

export default function ExpenseBalance() {
  const resExpenseList = useSelector((store) => store.EXPENSE.expense);
  const resReviewIncome = useSelector((store) => store.EXPENSE.income);
  const BalanceTotal = Number.parseFloat(resReviewIncome) - Number.parseFloat(resExpenseList);

  return <div>Balance : &#8377;{BalanceTotal}</div>;
}
