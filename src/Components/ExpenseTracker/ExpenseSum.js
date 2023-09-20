import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./Expensetracker.scss";
import { useDispatch } from "react-redux";
import { updateExpense } from "../../store/expense_slice";


export default function ExpenseSum() {
  const resExpenseList = useSelector((store) => store.EXPENSE.expenseList);
  const spendTotal = resExpenseList.reduce((acc, expense) => {
    return expense.type === "Expense" ? Number.parseFloat(acc) + Number.parseFloat(expense.price) : Number.parseFloat(acc) + 0
  }, 0);
  const dispatch = useDispatch();

useEffect(()=>{
  dispatch(updateExpense(spendTotal));

})

  return (
    <div>
      <h4>Expense</h4>
      &#8377;{spendTotal}
    </div>
  );
}
