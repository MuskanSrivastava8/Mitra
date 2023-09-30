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

export default function Expensetracker() {
  return (
    <React.Fragment>
      <div className="Expense_container">
        <div className="Expense_content">
          <div className="Income_Expense">
            <div className="Income_only">
              <ExpenseIncomeDetails />
            </div>
            <div className="Expense_only">
              <ExpenseSum />
            </div>
            <div className="Balance_only">
              <BalanceSum />
            </div>
          </div>
          <div className="Expense_Income_input">
            <ExpenseIncomeInput />
          </div>
          {/* <div className="Expense_Balance">
            <ExpenseBalance />
          </div> */}
          <div className="Expense_Input">
            <ExpenseInput />
          </div>
          <div className="Expense_History">
            <HistoryExpenseList />
          </div>
        </div>
      </div>
      <div className="ExpenseTracker_footer">
        <Footer />
      </div>
    </React.Fragment>
  );
}
