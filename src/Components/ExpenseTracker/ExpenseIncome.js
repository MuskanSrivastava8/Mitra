import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addexpenseIncome } from "../../store/expense_slice";

export default function ExpenseIncome() {
  const [incomeVal, setincomeVal] = useState();
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(addexpenseIncome(Number(incomeVal)));
  };
  const resIncome = useSelector((store) => store.EXPENSE.income);
  return (
    <div>
      <input
        type="text"
        defaultValue={resIncome}
        id="expenseIncome"
        name="expenseIncome"
        placeholder="Income"
        onChange={(e) => setincomeVal(e.target.value)}
      />
      <button onClick={submit}>Add Income</button>
      Total Income : {resIncome}
    </div>
  );
}
