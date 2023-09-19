import React from "react";
import { addExpenseAction } from "../../store/expense_slice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Button } from "bootstrap";
import "./Expensetracker.scss";
import uuid from 'react-uuid';

export default function ExpenseInput() {
  const [price, setprice] = useState("");
  const [expenseName, setexpenseName] = useState("");
  const [remSubmitBtn, setremSubmitBtn] = useState(false);

  const dispatch = useDispatch();
  const Submit = (e) => {
    e.preventDefault();
    const id = uuid();
    dispatch(addExpenseAction({id, price, expenseName }));
    setprice("");
    setexpenseName("");
    
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
            onClick={Submit}
            disabled={!price || !expenseName}
          >
            Add Expense
          </button>
          <button className="Expense_input_btn" onClick={clearInput}>
            Clear
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
