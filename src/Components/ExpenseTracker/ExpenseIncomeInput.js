import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExpenseIncome } from "../../store/expense_slice";
import "./Expensetracker.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function ExpenseIncomeInput() {
  const [incomeVal, setincomeVal] = useState();
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(addExpenseIncome(Number(incomeVal)));
    toast.success(`New income is ${incomeVal}`,{autoClose: 1500});
  };
  const resIncome = useSelector((store) => store.EXPENSE.income);
  return (
    <React.Fragment>
      <div className="Expense_Income_Input">
        <input
          type="text"
          class="form-control"
          defaultValue={resIncome}
          id="expenseIncome"
          placeholder={incomeVal}
          name="expenseIncome"
          onChange={(e) => setincomeVal(e.target.value)}
        />
      </div>

      <div >
      <button type="button" class="btn btn-primary btn-sm" onClick={submit} disabled={!incomeVal}>Save Income</button>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
}
