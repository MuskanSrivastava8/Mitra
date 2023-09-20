import React from "react";
import { useSelector } from "react-redux";
import "./Expensetracker.scss";



export default function BalanceSum() {
    const resExpenseList = useSelector((store) => store.EXPENSE.expense);
    const resReviewIncome = useSelector((store) => store.EXPENSE.income);
    const BalanceTotal = Number.parseFloat(resReviewIncome) - Number.parseFloat(resExpenseList);
  

  return (
    <div>
      <h4>Balance</h4>
      &#8377;{BalanceTotal}
    </div>
  );
}
