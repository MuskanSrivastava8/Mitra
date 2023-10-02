import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Menu.scss";
import { TbCircleLetterM } from "react-icons/tb";
import { BsSun } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
import { MdDarkMode } from "react-icons/md";
import { useDispatch } from "react-redux";
import { dark_mode_Action, light_mode_Action } from "../../store/theme_slice";
import { useSelector } from "react-redux";


export default function Menu() {
  const dispatch = useDispatch();
  var darkModeRes = useSelector((store) => store.THEME.dark_mode);

  const [darkMode, setdarkMode] = useState(true);

  const changeTheme = () => {
    setdarkMode(!darkMode);
    if (darkMode) {
      dispatch(dark_mode_Action(true));
      dispatch(light_mode_Action(false));
    } else {
      dispatch(light_mode_Action(true));
      dispatch(dark_mode_Action(false));
    }
  };
  return (
    <React.Fragment>
      <div className={darkModeRes ?"menu_container_dark" : "menu_container_light"}>
        <div className="menu_logo">
          <TbCircleLetterM className={darkModeRes ?"letter_M_dark" : "letter_M_light"}/>
        </div>
        <div className="dropdownMenu_item">
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Menu
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <NavLink
                  className="dropdownMenuItem"
                  to={"/Intro"}
                  style={({ isActive }) => ({
                    color: isActive ? "Red" : "Gray",
                  })}
                >
                  Home
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink
                  className="dropdownMenuItem"
                  to={"/Knowyourshow"}
                  style={({ isActive }) => ({
                    color: isActive ? "Red" : "Gray",
                  })}
                >
                  IMDb clone
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink
                  className="dropdownMenuItem"
                  to={"/Expensetracker"}
                  style={({ isActive }) => ({
                    color: isActive ? "Red" : "Gray",
                  })}
                >
                  Expense Tracker clone
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink
                  className="dropdownMenuItem"
                  to={"/Portfolio"}
                  style={({ isActive }) => ({
                    color: isActive ? "Red" : "Gray",
                  })}
                >
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
        <div className="theme_icon">
          <button
            type="button"
            class="btn btn-primary"
            style={{ padding: "2px" }}
            onClick={changeTheme}
          >
            {darkMode ? <MdDarkMode /> : <BsSun/>}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
