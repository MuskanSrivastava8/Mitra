import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.scss";
import { TbCircleLetterM } from "react-icons/tb";
import Dropdown from "react-bootstrap/Dropdown";
import { AiOutlineHome } from "react-icons/ai";

export default function Menu() {
  return (
    <React.Fragment>
      <div className="menu_container">
        <div className="menu_logo">
          <TbCircleLetterM className="letter_M" />
        </div>
        <div className="dropdownMenu_item">
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Menu
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <NavLink className="dropdownMenuItem" to={"/Intro"}>
                  Home
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink className="dropdownMenuItem" to={"/Knowyourshow"}>
                  IMDb clone
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink className="dropdownMenuItem" to={"/Expensetracker"}>
                  Expense Tracker clone
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink className="dropdownMenuItem" to={"/Portfolio"}>
                  About Me
                </NavLink>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="menu_item_mobile_view">
          <button type="button" class="btn btn-primary">
            <NavLink to={"/Intro"}>Home</NavLink>
          </button>
        </div>
        <div className="menu_item">
          <button
            type="button"
            class="btn btn-primary"
            style={{ padding: "2px" }}
          >
            <NavLink
              to={"/Intro"}
              style={({ isActive }) => ({
                color: isActive ? "Red" : "White",
              })}
            >
              {" "}
              Home
            </NavLink>
          </button>
        </div>
        <div className="menu_item">
          <button
            type="button"
            class="btn btn-primary"
            style={{ padding: "2px" }}
          >
            <NavLink
              to={"/Knowyourshow"}
              style={({ isActive }) => ({
                color: isActive ? "Red" : "White",
              })}
            >
              IMDb clone
            </NavLink>
          </button>
        </div>
        <div className="menu_item">
          <button
            type="button"
            class="btn btn-primary"
            style={{ padding: "2px" }}
          >
            <NavLink
              to={"/Expensetracker"}
              style={({ isActive }) => ({
                color: isActive ? "Red" : "White",
              })}
            >
              Expense Tracker clone
            </NavLink>
          </button>
        </div>
        <div className="menu_item">
          <button
            type="button"
            class="btn btn-primary"
            style={{ padding: "2px" }}
          >
            <NavLink
              to={"/Portfolio"}
              style={({ isActive }) => ({
                color: isActive ? "Red" : "White",
              })}
            >
              About Me
            </NavLink>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
