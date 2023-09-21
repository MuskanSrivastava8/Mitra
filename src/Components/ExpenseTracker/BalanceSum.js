import React from "react";
import { useSelector } from "react-redux";
import "./Expensetracker.scss";
import { GiReceiveMoney } from "react-icons/gi";

export default function BalanceSum() {
    const resExpenseList = useSelector((store) => store.EXPENSE.expense);
    const resReviewIncome = useSelector((store) => store.EXPENSE.income);
    const BalanceTotal = Number.parseFloat(resReviewIncome) - Number.parseFloat(resExpenseList);
  
  return (
    <div>
      <h4>Balance</h4>
      &#8377;{BalanceTotal}
      <GiReceiveMoney style={{ color: "green", marginLeft: "10%" }}/>
    </div>
  );
}
