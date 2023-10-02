import React from "react";
import {
  addExpenseAction,
  addIncomeAction,
  addExpenseIncome,
} from "../../store/expense_slice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Button } from "bootstrap";
import "./Expensetracker.scss";
import uuid from "react-uuid";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ExpenseInput() {
  const [price, setprice] = useState("");
  const [expenseName, setexpenseName] = useState("");
  const [remSubmitBtn, setremSubmitBtn] = useState(false);
  const resReviewIncome = useSelector((store) => store.EXPENSE.income);
  const resExpense = useSelector((store) => store.EXPENSE.expense);
  var darkModeRes = useSelector((store) => store.THEME.dark_mode);

  const dispatch = useDispatch();
  const SubmitExpense = (e) => {
    e.preventDefault();
    const id = uuid();
    let type = "Expense";
    if (!isNaN(price)) {
      dispatch(addExpenseAction({ id, price, expenseName, type }));
      setprice("");
      setexpenseName("");
      toast.success("New Expense added",{autoClose: 1500});
      if (resExpense + Number.parseFloat(price) > resReviewIncome) {
        toast.error("Expense exceeded Income",{autoClose: 1500});
      }
    } else {
      toast.error("Add valid price",{autoClose: 1500});
    }
  };
  const SubmitIncome = (e) => {
    e.preventDefault();
    const id = uuid();
    let type = "Income";

    let incomeVal = Number(resReviewIncome) + Number(price);
    if (!isNaN(price)) {
      dispatch(addExpenseIncome(Number(incomeVal)));
      dispatch(addIncomeAction({ id, price, expenseName, type }));
      setprice("");
      setexpenseName("");
      toast.success("New Income added",{autoClose: 1500});
      if (resExpense > resReviewIncome + Number.parseFloat(price)) {
        toast.error("Expense exceeded Income",{autoClose: 1500});
      }
    } else {
      toast.error("Add valid price",{autoClose: 1500});
    }
  };

  const clearInput = (e) => {
    setprice("");
    setexpenseName("");
  };

  return (
    <React.Fragment>
      <div className="Expense_input_container">
        <div class="form-group"className={darkModeRes ?"Form_style_dark" : "Form_style_light"}>
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

        <div class="form-group" className={darkModeRes ?"Form_style_dark" : "Form_style_light"}>
          <label for="formGroupExampleInput">Price</label>
          <input
            type="text"
            class="form-control"
            id="price"
            placeholder="Ex. 100"
            name="price"
            value={price}
            onChange={(e) => setprice(e.target.value)}
          />
        </div>
        <div className="Expense_input_box">
          <button
            type="button"
            class="btn btn-primary btn-sm"
            style={{ margin: "2%" }}
            onClick={SubmitExpense}
            disabled={!price || !expenseName}
          >
            Add Expense
          </button>
          <button
            type="button"
            style={{ margin: "2%" }}
            class="btn btn-primary btn-sm"
            onClick={SubmitIncome}
            disabled={!price || !expenseName}
          >
            Add Income
          </button>
          <button
            type="button"
            class="btn btn-primary btn-sm"
            style={{ margin: "2%"  , padding:"7%" }}
            onClick={clearInput}
            disabled={!price || !expenseName}
          >
            Clear
          </button>
          {/* <button
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
          </button> */}
        </div>
      </div>
    </React.Fragment>
  );
}
