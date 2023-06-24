import React from "react";
import "./Expensetracker.scss";
import HistoryExpenseList from "./HistoryExpenseList";
import ExpenseIncome from "./ExpenseIncome";
import ExpenseReview from "./ExpenseReview";
import ExpenseInput from "./ExpenseInput";
import Footer from "../Footer/Footer";

export default function Expensetracker() {

  return (
    <React.Fragment>
      <div className="Expense_container">
        <div className="Expense_content">
          <ExpenseInput/>
          <HistoryExpenseList />
          <ExpenseIncome />
          <ExpenseReview />
        </div>
      </div>
      <div className="ExpenseTracker_footer">
        <Footer/>
        </div>
    </React.Fragment>
  );
}
