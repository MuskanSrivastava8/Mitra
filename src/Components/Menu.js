import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.scss";
import { TbCircleLetterM } from "react-icons/tb";

export default function Menu() {
  const style_home = { color: "white", fontSize: "2rem" }
  return (
    <React.Fragment>
      <div className="menu_container">
      <TbCircleLetterM style={style_home}/>
        <div className="menu_item">
          <NavLink to={"/Portfolio"}>Portfolio</NavLink>
        </div>
        <div className="menu_item">
          <NavLink to={"/Intro"}>Intro</NavLink>
        </div>
        <div className="menu_item">
          <NavLink to={"/Knowyourshow"}>Knowyourshow</NavLink>
        </div>
      </div>
    </React.Fragment>
  );
}
