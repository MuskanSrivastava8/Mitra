import React from 'react'
import { useSelector } from "react-redux";
import "./Expensetracker.scss";

export default function ExpenseBalance() {
    const resExpenseList = useSelector((store) => store.EXPENSE.expenseList);
    const resReviewIncome = useSelector((store) => store.EXPENSE.income);
    const spendTotal = resExpenseList.reduce((acc, expense) => {
      return Number.parseFloat(acc) + Number.parseFloat(expense.price);
    }, 0);
    const BalanceTotal = resReviewIncome-spendTotal
  return (
    <div>
     Balance :  &#8377;{BalanceTotal}
    </div>
  )
}
