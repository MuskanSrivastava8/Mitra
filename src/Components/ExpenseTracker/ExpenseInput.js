import React from 'react'
import { addExpenseAction } from "../../store/expense_slice";
import { useDispatch } from "react-redux";
import { useState } from 'react';

export default function ExpenseInput() {
    const [price, setprice] = useState();
    const [expenseName, setexpenseName] = useState();
    const [remSubmitBtn, setremSubmitBtn] = useState(false);
  
    const dispatch = useDispatch();
    const Submit = (e) => {
      e.preventDefault();
      dispatch(addExpenseAction({ price, expenseName }));
    };

  return (
    <div>
        <input
            type="text"
            id="expenseName"
            name="expenseName"
            placeholder="Name"
            onChange={(e) => setexpenseName(e.target.value)}
          />
          <br></br>
          <input
            type="text"
            id="price"
            name="price"
            placeholder="Price"
            onChange={(e) => setprice(e.target.value)}
          />
          <br></br>
          <button onClick={Submit} disabled={!price || !expenseName}>Add</button>
    </div>
  )
}
