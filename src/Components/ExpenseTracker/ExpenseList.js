import React, { useState } from "react";
import ExpenseListItem from "./ExpenseListItem";
import "./Expensetracker.scss";
import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md";

export default function ExpenseList({ items }) {
  const rowSelected = (e) => {
    console.log(e.target.value);
  };
  const [showTable, setshowTable] = useState(true);
  const [showIcon, setshowIcon] = useState(true);
  const [hideIcon, sethideIcon] = useState(true);

  const showExpenseTable = () => {
    setshowTable(!showTable);
    setshowIcon(!showIcon);
  };
  return (
    <React.Fragment>
      <div className="Expense_History_table_container">
        <button className="Expense_expand_list_btn" onClick={showExpenseTable}>
          {showIcon ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
        </button>
        <table class="table table-striped table-dark">
          <thead class="table-dark">
            <tr>
              <th width="40%" scope="col">
                Item
              </th>
              <th width="30%" scope="col">
                Price
              </th>
              <th width="40%" scope="col">
                Edit
              </th>
            </tr>
          </thead>
        </table>
        {items.map(
          (item, index) =>
            showTable && <ExpenseListItem key={item + index} item={item} />
        )}
      </div>
    </React.Fragment>
  );
}
