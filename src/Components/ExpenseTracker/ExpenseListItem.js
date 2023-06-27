import React from "react";
import "./Expensetracker.scss";

export default function ExpenseListItem({ item }) {
  return (
    <React.Fragment>
      <div className="Expense_History_row_container">
        <table class="table table-striped table-dark">
          <tbody>
            <tr>
              <th scope="row">{item.expenseName}</th>
              <td>{item.price}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}
