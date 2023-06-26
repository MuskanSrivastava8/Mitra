import React from "react";
import "./Expensetracker.scss";

export default function ExpenseListItem({ item }) {
  return (
    <React.Fragment>
    <div className="Expense_History_row_container">
      <table>
        <tr>
          <th>{item.expenseName}</th>
          <td>&#8377;{item.price}</td>
        </tr>
      </table>
      </div>
    </React.Fragment>
  );
}
