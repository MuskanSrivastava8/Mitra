import React from "react";
import { addExpenseAction } from "../../store/expense_slice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Button } from "bootstrap";
import "./Expensetracker.scss";

export default function ExpenseInput() {
  const [price, setprice] = useState(null);
  const [expenseName, setexpenseName] = useState(null);
  const [remSubmitBtn, setremSubmitBtn] = useState(false);

  const dispatch = useDispatch();
  const Submit = (e) => {
    e.preventDefault();
    dispatch(addExpenseAction({ price, expenseName }));
  };

  return (
    <React.Fragment>
      <div className="Expense_input_container">
        <div className="Expense_input_name">
        <p style={{marginRight : '2%'}}>Name</p>
          <input
            type="text"
            id="expenseName"
            name="expenseName"
            placeholder="Name"
            onChange={(e) => setexpenseName(e.target.value)}
          />
        </div>
        <div className="Expense_input_price">
          <p style={{marginRight : '2%'}}>Price</p>
          <input
            type="text"
            id="price"
            name="price"
            placeholder="Price"
            onChange={(e) => setprice(e.target.value)}
          ></input>
        </div>
        <div className="Expense_input_box">
          <button className="Expense_input_btn" onClick={Submit} disabled={!price || !expenseName}>
            Add Expense
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
