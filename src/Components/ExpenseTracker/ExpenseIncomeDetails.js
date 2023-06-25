import React from 'react'
import { useSelector } from "react-redux";

export default function ExpenseIncomeDetails() {
    const resReviewIncome = useSelector((store) => store.EXPENSE.income);
  return (
    <div>
      <h4>Income</h4>
      &#8377;{resReviewIncome}
    </div>
  )
}
