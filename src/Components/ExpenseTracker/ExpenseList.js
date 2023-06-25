import React from "react";
import ExpenseListItem from "./ExpenseListItem";

export default function ExpenseList({ items }) {
  return (
    <React.Fragment>
    <div className="Expense_History_table_container">
      {items.map((item,index) => (
        <ExpenseListItem key={item+index} item={item} />
      ))}
      </div>
    </React.Fragment>
  );
}
