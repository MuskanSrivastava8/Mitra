import React from "react";
import "./Expensetracker.scss";
import HistoryExpenseList from "./HistoryExpenseList";
import ExpenseIncomeInput from "./ExpenseIncomeInput";
import ExpenseInput from "./ExpenseInput";
import Footer from "../Footer/Footer";
import ExpenseIncomeDetails from "./ExpenseIncomeDetails";
import ExpenseSum from "./ExpenseSum";
import BalanceSum from "./BalanceSum";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";


export default function Expensetracker() {
    var darkModeRes = useSelector((store) => store.THEME.dark_mode);
  return (
    <React.Fragment>
      <div className="Expense_container">
        <div className={darkModeRes ?"Expense_content_dark" : "Expense_content_light"}>
          <div className="Income_Expense">
            <div className={darkModeRes ?"Income_only_dark" : "Income_only_light"}>
              <ExpenseIncomeDetails />
            </div>
            <div className={darkModeRes ?"Expense_only_dark" : "Expense_only_light"}>
              <ExpenseSum />
            </div>
            <div className={darkModeRes ?"Balance_only_dark" : "Balance_only_light"}>
              <BalanceSum />
            </div>
          </div>
          <div className="Expense_Income_input">
            <ExpenseIncomeInput />
          </div>
          <div className="Expense_Input">
            <ExpenseInput />
          </div>
          <div className="Expense_History">
            <HistoryExpenseList />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
