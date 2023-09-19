import React, { useEffect } from "react";
import "./Expensetracker.scss";
import { deleteExpenseIncome, saveEditExpenseIncome } from "../../store/expense_slice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { GrEdit } from "react-icons/gr";
import { AiOutlineCheck } from "react-icons/ai";

export default function ExpenseListItem({ item }) {
  const dispatch = useDispatch();
  const [price, setprice] = useState("");
  const [expenseName, setexpenseName] = useState("");
  const [deletenow, setdeletenow] = useState(false);
  const [editid, seteditid] = useState("");
  const [showInputBox, setshowInputBox] = useState(false);
  const [showCheckIcon, setshowCheckIcon] = useState(false);
  const [showDeleteEditIcon, setshowDeleteEditIcon] = useState(false);
  const [editName, seteditName] = useState("");

  const Submit = (e) => {
    setexpenseName(item.expenseName);
    setprice(item.price);
    setdeletenow(!deletenow);
  };
  const editItem = (e) => {
    setshowInputBox(true);
    setshowCheckIcon(true);
    setshowDeleteEditIcon(true);

  };
  const saveItemName = () => {
    setshowCheckIcon(false);
    setshowDeleteEditIcon(false);
    console.log("item",item)
    let ID = item.id
    let query = { ID, editName };
    console.log("query".query)
    dispatch(saveEditExpenseIncome(query));
    setshowInputBox(false)

  };
  const deleteEditResp = () => {
    setshowCheckIcon(false);
    setshowDeleteEditIcon(false);
    setshowInputBox(false);
  };

  useEffect(() => {
    let query = { price, expenseName };
    dispatch(deleteExpenseIncome(query));
  }, [deletenow]);

  return (
    <React.Fragment>
      <div className="Expense_History_row_container">
        <table class="table table-striped table-dark">
          <tbody>
            <tr>
              <th width="40%">
                {showInputBox ? (
                  <input
                    type="text"
                    class="form-control"
                    id="editExpenseName"
                    placeholder={item.expenseName}
                    name="editExpenseName"
                    // value={expenseName}
                    onChange={(e) => seteditName(e.target.value)}
                  />
                ) : (
                  item.expenseName
                )}
                {showCheckIcon ? (
                  <button
                    className="Expense_edit_name_item_btn"
                    onClick={saveItemName}
                  >
                    <AiOutlineCheck />
                  </button>
                ) : null}
                {showDeleteEditIcon ? (
                  <button
                    className="Expense_delete_item_btn"
                    onClick={deleteEditResp}
                  >
                    X
                  </button>
                ) : null}
              </th>
              <td width="40%">
              {item.price}</td>
              <td width="40%">
                <button className="Expense_delete_item_btn" onClick={Submit}>
                  X
                </button>
                <button className="Expense_edit_item_btn" onClick={editItem}>
                  <GrEdit style={{ color: "white" }} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}
