import React from "react";

export default function ExpenseListItem({ item }) {
  return (
    <div>
      <table>
        <tr>
          <th>{item.expenseName}</th>
          <td>{item.price}</td>
          
        </tr>
      </table>
    </div>
  );
}
