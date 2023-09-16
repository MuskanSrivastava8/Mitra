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
          <thead class="table-dark">
            <tr >
              <th width="40%" scope="col">Item</th>
              <th width="40%" scope="col">Price</th>
              <th width="40%" scope="col">Edit</th>
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
