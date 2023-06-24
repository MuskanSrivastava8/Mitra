import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.scss";
import { TbCircleLetterM } from "react-icons/tb";

export default function Menu() {
  return (
    <React.Fragment>
      <div className="menu_container">
        <div className="menu_logo">
          <TbCircleLetterM  className="letter_M" />
        </div>
        <div className="menu_item">
          <NavLink to={"/Portfolio"}>Portfolio</NavLink>
        </div>
        <div className="menu_item">
          <NavLink to={"/Intro"}>Intro</NavLink>
        </div>
        <div className="menu_item">
          <NavLink to={"/Knowyourshow"}>Knowyourshow</NavLink>
        </div>
        <div className="menu_item">
          <NavLink to={"/Expensetracker"}>TrackYourExpense</NavLink>
        </div>
      </div>
    </React.Fragment>
  );
}
