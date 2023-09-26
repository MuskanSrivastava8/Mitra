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
              <Dropdown.Item ><NavLink className="dropdownMenuItem" to={"/Portfolio"}>Portfolio</NavLink></Dropdown.Item>
              <Dropdown.Item ><NavLink className="dropdownMenuItem" to={"/Intro"}>Intro</NavLink></Dropdown.Item>
              <Dropdown.Item><NavLink className="dropdownMenuItem" to={"/Knowyourshow"}>IMDb clone</NavLink></Dropdown.Item>
              <Dropdown.Item><NavLink className="dropdownMenuItem" to={"/Expensetracker"}>Expense Tracker clone</NavLink></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="menu_item_mobile_view">

          
          <button type="button" class="btn btn-primary"><NavLink to={"/Intro"}>Home</NavLink></button>
        </div>
        <div className="menu_item">
        <button type="button" class="btn btn-primary"><NavLink to={"/Intro"}> Home</NavLink></button>
          
        </div>
        <div className="menu_item">
        <button type="button" class="btn btn-primary"><NavLink to={"/Portfolio"}>Portfolio</NavLink></button>
          
        </div>
        <div className="menu_item">
        <button type="button" class="btn btn-primary"><NavLink to={"/Knowyourshow"}>IMDb clone</NavLink></button>
          
        </div>
        <div className="menu_item">
        <button type="button" class="btn btn-primary"><NavLink to={"/Expensetracker"}>Expense Tracker clone</NavLink></button>
          
        </div>
        {/* <div className="menu_item">
        <button type="button" class="btn btn-primary"><NavLink to={"/Expensetracker"}>Expense Tracker clone</NavLink></button>
          
        </div> */}
      </div>
    </React.Fragment>
  );
}
