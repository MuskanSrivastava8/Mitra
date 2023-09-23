import React from "react";
import { addExpenseAction, addIncomeAction, addExpenseIncome } from "../../store/expense_slice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Button } from "bootstrap";
import "./Expensetracker.scss";
import uuid from 'react-uuid';
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function ExpenseInput() {
  const [price, setprice] = useState("");
  const [expenseName, setexpenseName] = useState("");
  const [remSubmitBtn, setremSubmitBtn] = useState(false);
  const resReviewIncome = useSelector((store) => store.EXPENSE.income);


  const dispatch = useDispatch();
  const SubmitExpense = (e) => {
    e.preventDefault();
    const id = uuid();
    let type="Expense"
    dispatch(addExpenseAction({id, price, expenseName, type  }));
    setprice("");
    setexpenseName("");
    toast.success("New Expense added");
    
  };
  const SubmitIncome = (e) => {
    e.preventDefault();
    const id = uuid();
    let type="Income"

    let incomeVal = Number(resReviewIncome)+Number(price)
    dispatch(addExpenseIncome(Number(incomeVal)));
    dispatch(addIncomeAction({id, price, expenseName, type }));
    setprice("");
    setexpenseName("");
    toast.success("New Income added");

  };
  
  const clearInput = (e) => {
    setprice("");
    setexpenseName("");
  };



  return (
    <React.Fragment>
      <div className="Expense_input_container">
        <div class="form-group">
          <label for="formGroupExampleInput">Item</label>
          <input
            type="text"
            class="form-control"
            id="expenseName"
            placeholder="Ex. Apple"
            name="expenseName"
            value={expenseName}
            onChange={(e) => setexpenseName(e.target.value)}
          />
        </div>

        <div class="form-group">
          <label for="formGroupExampleInput">Price</label>
          <input
            type="text"
            class="form-control"
            id="price"
            placeholder="100"
            name="price"
            value={price}
            onChange={(e) => setprice(e.target.value)}
          />
        </div>
        <div className="Expense_input_box">
          <button
            className="Expense_input_btn"
            onClick={SubmitExpense}
            disabled={!price || !expenseName}
          >
            Add Expense
          </button>
          <button
            className="Expense_input_btn"
            onClick={SubmitIncome}
            disabled={!price || !expenseName}
          >
            Add Income
          </button>
          <button className="Expense_input_btn" onClick={clearInput}>
            Clear
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
