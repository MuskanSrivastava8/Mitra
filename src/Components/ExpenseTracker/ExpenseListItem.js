import React, { useEffect } from "react";
import "./Expensetracker.scss";
import { deleteExpenseIncome } from "../../store/expense_slice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";

export default function ExpenseListItem({ item }) {
  const dispatch = useDispatch();
  const [price, setprice] = useState("");
  const [expenseName, setexpenseName] = useState("");
  const [deletenow, setdeletenow] = useState(false);

  const Submit = (e) => {

    setexpenseName(item.expenseName);
    setprice(item.price);
    setdeletenow(!deletenow);
  };
  useEffect(() => {
    let query = {price ,expenseName}

    dispatch(deleteExpenseIncome(query));
  }, [deletenow]);

  return (
    <React.Fragment>
      <div className="Expense_History_row_container">
        <table class="table table-striped table-dark">
          <tbody>
            <tr>
              <th width="40%">{item.expenseName}</th>
              <td width="40%">{item.price}</td>
              <td width="40%">
                <button
                  className="Expense_delete_item_btn"
                  onClick={Submit}
                >
                  X
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}
