import React from "react";
import ExpenseListItem from "./ExpenseListItem";

export default function ExpenseList({ items }) {
  return (
    <div>
      {items.map((item,index) => (
        <ExpenseListItem key={item+index} item={item} />
      ))}
    </div>
  );
}
