import React from "react";
import ExpenseListItem from "./ExpenseListItem";
import "./Expensetracker.scss";

export default function ExpenseList({ items }) {
const rowSelected = (e)=> {
  console.log(e.target.value)
}
  return (
    <React.Fragment>
      <div className="Expense_History_table_container">
        <table class="table table-striped table-dark">
          <thead>
            <tr >
              <th scope="col">Item</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
        </table>
            {items.map((item, index) => (
              <ExpenseListItem key={item+index} item={item} />
            ))}

      </div>
    </React.Fragment>
  );
}
