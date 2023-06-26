import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addexpenseIncome } from "../../store/expense_slice";
import "./Expensetracker.scss";

export default function ExpenseIncomeInput() {
  const [incomeVal, setincomeVal] = useState();
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(addexpenseIncome(Number(incomeVal)));
  };
  const resIncome = useSelector((store) => store.EXPENSE.income);
  return (
    <React.Fragment>
      <div className="Expense_Income_Input">
      
        <input
          type="text"
          defaultValue={resIncome}
          id="expenseIncome"
          name="expenseIncome"
          placeholder="Income"
          onChange={(e) => setincomeVal(e.target.value)}
        />
      </div>

      <div className="Expense_Income_add_btn">    
        <span
        onClick={submit}>Edit Income</span>
      </div>
    </React.Fragment>
  );
}
