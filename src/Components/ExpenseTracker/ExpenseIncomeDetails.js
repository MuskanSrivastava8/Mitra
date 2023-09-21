import React from 'react'
import { useSelector } from "react-redux";
import "./Expensetracker.scss";
import { FcMoneyTransfer } from "react-icons/fc";

export default function ExpenseIncomeDetails() {
    const resReviewIncome = useSelector((store) => store.EXPENSE.income);
    const resExpenseList = useSelector((store) => store.EXPENSE.expenseList);
  return (
    <div>
      <h4>Income</h4>
      &#8377;{resReviewIncome}
      <FcMoneyTransfer style={{ color: "green", marginLeft: "10%" }}/>
    </div>
  )
}
