import React from 'react'
import { useSelector } from "react-redux";
import "./Expensetracker.scss";

export default function ExpenseIncomeDetails() {
    const resReviewIncome = useSelector((store) => store.EXPENSE.income);
    const resExpenseList = useSelector((store) => store.EXPENSE.expenseList);
    const spendTotal = resExpenseList.reduce((acc, expense) => {
      return Number.parseFloat(acc) + Number.parseFloat(expense.price);
    }, 0);
    // console.log(spendTotal>resReviewIncome)
    const incomeAlert = spendTotal>resReviewIncome;
    // console.log('alert ', incomeAlert)
  return (
    <div>
      <h4>Income</h4>
      &#8377;{resReviewIncome}
    </div>
  )
}
