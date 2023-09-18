import React from "react";
import { useSelector } from "react-redux";
import ExpenseList from "./ExpenseList";
import "./Expensetracker.scss";

export default function HistoryExpenseList() {
  const resItems = useSelector((store) => store.EXPENSE.expenseList);
  return (
    <div className="Exp_History_box">
      <div><h4>Expense History</h4></div>
      <div style={{width:'100%', padding:"2%"}}><ExpenseList items={resItems} /></div> 
    </div>
  );
}
