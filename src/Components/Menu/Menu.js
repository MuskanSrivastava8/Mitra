import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Menu.scss";
import { TbCircleLetterM } from "react-icons/tb";
import { BsSun } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
import { BsMoonStars } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { dark_mode_Action, light_mode_Action } from "../../store/theme_slice";
import { useSelector } from "react-redux";
import MuskanResume from "./MuskanResume.pdf";
import { BsDownload } from "react-icons/bs";
import { MdOutlineFileDownloadDone } from "react-icons/md";
import Profile from "./Profile";


export default function Menu() {
  const dispatch = useDispatch();
  var darkModeRes = useSelector((store) => store.THEME.dark_mode);
  const [darkMode, setdarkMode] = useState(true);
  const [downloaded, setdownloaded] = useState(false);
  const [showProfile, setshowProfile] = useState(true);


  const checkHandler = () => {
    setdarkMode(!darkMode);
  };
  useEffect(() => {
    if (darkMode) {
      dispatch(dark_mode_Action(true));
      dispatch(light_mode_Action(false));
    } else {
      dispatch(light_mode_Action(true));
      dispatch(dark_mode_Action(false));
    }
  }, [darkMode]);
  const onButtonClick = () => {
    fetch(MuskanResume).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Muskan_Resume.pdf";
        alink.click();
        setdownloaded(true);
      });
    });
  };
  
  const LogoClicked = ()=> {
    setshowProfile(!showProfile)
  }
  return (
    <React.Fragment>
      <div
        className={darkModeRes ? "menu_container_dark" : "menu_container_light"}
      >
        
        <div className="menu_logo" onClick={LogoClicked}>
          <TbCircleLetterM
            className={darkModeRes ? "letter_M_dark" : "letter_M_light"}
          />
          {showProfile && <Profile/>}
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
              <Dropdown.Item>
              {/* <a
              
              class="btn btn-primary"
              onClick={onButtonClick}
            >
             Resume
            </a> */}
            <div onClick={onButtonClick} style={{color : "gray"}}>
            Resume {downloaded ? <MdOutlineFileDownloadDone style={{color : "green"}}/> : <BsDownload />}
            </div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="menu_item">
          <button
            type="button"
            class="btn btn-primary"
            className={darkModeRes ? "MenuStyle_dark" : "MenuStyle_light"}
          >
            <NavLink
              to={"/Intro"}
              style={({ isActive }) => ({
                color: isActive
                  ? darkModeRes
                    ? "#1c6cfb"
                    : "#1c6cfb"
                  : darkModeRes
                  ? "White"
                  : "Black",
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
            className={darkModeRes ? "MenuStyle_dark" : "MenuStyle_light"}
          >
            <NavLink
              to={"/Knowyourshow"}
              style={({ isActive }) => ({
                color: isActive
                  ? darkModeRes
                    ? "#1c6cfb"
                    : "#1c6cfb"
                  : darkModeRes
                  ? "White"
                  : "Black",
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
            className={darkModeRes ? "MenuStyle_dark" : "MenuStyle_light"}
          >
            <NavLink
              to={"/Expensetracker"}
              style={({ isActive }) => ({
                color: isActive
                  ? darkModeRes
                    ? "#1c6cfb"
                    : "#1c6cfb"
                  : darkModeRes
                  ? "White"
                  : "Black",
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
            className={darkModeRes ? "MenuStyle_dark" : "MenuStyle_light"}
          >
            <NavLink
              to={"/Portfolio"}
              style={({ isActive }) => ({
                color: isActive
                  ? darkModeRes
                    ? "#1c6cfb"
                    : "#1c6cfb"
                  : darkModeRes
                  ? "White"
                  : "Black",
              })}
            >
              About Me
            </NavLink>
          </button>
        </div>
        <div className="toggle_btn">
          <input
            type="checkbox"
            class="checkbox"
            id="checkbox"
            checked={darkMode}
            onChange={checkHandler}
          />
          <label for="checkbox" class="checkbox-label">
            <BsSun style={{ color: "orange", size: "10" }} />
            <BsMoonStars style={{ color: "gray" }} />
            <span class="ball"></span>
          </label>
        </div>
      </div>
    </React.Fragment>
  );
}
