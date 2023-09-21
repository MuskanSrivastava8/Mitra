import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.scss";
import { TbCircleLetterM } from "react-icons/tb";
import Dropdown from "react-bootstrap/Dropdown";
import { Display } from "react-bootstrap-icons";

export default function Menu() {
  return (
    <React.Fragment>
      <div className="menu_container">
        <div className="menu_logo">
          <TbCircleLetterM className="letter_M" />
        </div>
        <div className="dropdownMenu_item">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Menu
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/Mitra/Intro">Home</Dropdown.Item>
              <Dropdown.Item href="/Mitra/Portfolio">Portfolio</Dropdown.Item>
              <Dropdown.Item href="/Mitra/Knowyourshow">Knowyourshow</Dropdown.Item>
              <Dropdown.Item href="/Mitra/Expensetracker">TrackExpense</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="menu_item">
          <NavLink to={"/Portfolio"}>Portfolio</NavLink>
        </div>
        <div className="menu_item">
          <NavLink to={"/Intro"}>Home</NavLink>
        </div>
        <div className="menu_item">
          <NavLink to={"/Knowyourshow"}>Knowyourshow</NavLink>
        </div>
        <div className="menu_item">
          <NavLink to={"/Expensetracker"}>TrackExpense</NavLink>
        </div>
      </div>
    </React.Fragment>
  );
}
