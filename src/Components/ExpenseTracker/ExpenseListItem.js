import React, { useEffect } from "react";
import "./Expensetracker.scss";
import {
  deleteExpenseIncome,
  saveEditExpenseIncome,
  saveEditExpenseIncomePrice,
  updateIncome,
} from "../../store/expense_slice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { GrEdit } from "react-icons/gr";
import { AiOutlineCheck } from "react-icons/ai";
import { BsGraphUpArrow, BsGraphDownArrow } from "react-icons/bs";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ExpenseListItem({ item }) {
  const dispatch = useDispatch();
  const [showInputBox, setshowInputBox] = useState(false);
  const [showInputBoxPrice, setshowInputBoxPrice] = useState(false);
  const [showCheckIcon, setshowCheckIcon] = useState(false);
  const [showDeleteEditIcon, setshowDeleteEditIcon] = useState(false);
  const [editName, seteditName] = useState("");
  const [editPrice, seteditPrice] = useState("");
  const [showCheckIconPrice, setshowCheckIconPrice] = useState(false);
  const [showDeleteEditIconPrice, setshowDeleteEditIconPrice] = useState(false);
  const resReviewIncome = useSelector((store) => store.EXPENSE.income);

  const Submit = (e) => {
    let ID = item.id;
    let query = { ID };
    let Price =
      Number.parseFloat(resReviewIncome) - Number.parseFloat(item.price);
    let Type = item.type;
    let query_Price = { Price };

    if (Type === "Income") {
      dispatch(updateIncome(query_Price));
    }
    dispatch(deleteExpenseIncome(query));
  };

  const editItem = (e) => {
    setshowInputBox(true);
    setshowCheckIcon(true);
    setshowDeleteEditIcon(true);
    setshowInputBoxPrice(true);
    setshowCheckIconPrice(true);
    setshowDeleteEditIconPrice(true);
  };
  const deleteEditResp = () => {
    setshowCheckIcon(false);
    setshowDeleteEditIcon(false);
    setshowInputBox(false);
  };
  const saveItemName = () => {
    setshowCheckIcon(false);
    setshowDeleteEditIcon(false);
    let ID = item.id;
    let query = { ID, editName };
    if (editName.length > 0) {
      dispatch(saveEditExpenseIncome(query));
    }
    setshowInputBox(false);
    toast.success("Item updated");
  };
  const deleteEditRespPrice = () => {
    setshowCheckIconPrice(false);
    setshowDeleteEditIconPrice(false);
    setshowInputBoxPrice(false);
  };
  const saveItemPrice = () => {
    setshowCheckIconPrice(false);
    setshowDeleteEditIconPrice(false);
    let ID = item.id;
    let query = { ID, editPrice };
    if (editPrice.length > 0) {
      dispatch(saveEditExpenseIncomePrice(query));
    }

    setshowInputBoxPrice(false);
    toast.success("Price updated");
  };

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
                    onChange={(e) => seteditName(e.target.value)}
                  />
                ) : (
                  item.expenseName
                )}
                {item.type === "Income" ? (
                  <BsGraphUpArrow
                    style={{ color: "green", marginLeft: "10%" }}
                  />
                ) : (
                  <BsGraphDownArrow
                    style={{ color: "red", marginLeft: "10%" }}
                  />
                )}
                {showCheckIcon ? (
                  <button
                    className="Expense_edit_name_item_btn"
                    onClick={saveItemName}
                  >
                    <AiOutlineCheck style={{color:"white"}}/>
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
              <td width="30%">
                {showInputBoxPrice ? (
                  <input
                    type="text"
                    class="form-control"
                    id="editprice"
                    placeholder={item.price}
                    name="editprice"
                    onChange={(e) => seteditPrice(e.target.value)}
                  />
                ) : (
                  item.price
                )}

                {showCheckIconPrice ? (
                  <button
                    className="Expense_edit_name_item_btn"
                    onClick={saveItemPrice}
                  >
                    <AiOutlineCheck style={{color:"white"}}/>
                  </button>
                ) : null}
                {showDeleteEditIconPrice ? (
                  <button
                    className="Expense_delete_item_btn"
                    onClick={deleteEditRespPrice}
                  >
                    X
                  </button>
                ) : null}
              </td>

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
        <ToastContainer />
      </div>
    </React.Fragment>
  );
}
