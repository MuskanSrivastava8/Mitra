import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExpenseIncome } from "../../store/expense_slice";
import "./Expensetracker.scss";

export default function ExpenseIncomeInput() {
  const [incomeVal, setincomeVal] = useState();
  const [textupdate, settextupdate] = useState("Edit Income");
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(addExpenseIncome(Number(incomeVal)));
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
        onClick={submit}>Save Income</span>
      </div>
    </React.Fragment>
  );
}
