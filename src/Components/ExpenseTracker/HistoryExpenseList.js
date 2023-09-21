import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ExpenseList from "./ExpenseList";
import "./Expensetracker.scss";

export default function HistoryExpenseList() {
  const resItems = useSelector((store) => store.EXPENSE.expenseList);
  const [showNoDataFound, setshowNoDataFound] = useState(true);

  const NoDataFound = () => {
    return <div style={{color:"gray"}}> No history found</div>;
  };
  useEffect(() => {
    if (resItems.length > 0) {
      setshowNoDataFound(false);
    } else {
      setshowNoDataFound(true);
    }
  });
  return (
    <div className="Exp_History_box">
      <div>
        <h4>Expense History</h4>
      </div>
      {showNoDataFound ? (
        <NoDataFound />
      ) : (
        <div style={{ width: "100%", padding: "2%" }}>
          <ExpenseList items={resItems} />
        </div>
      )}
    </div>
  );
}
