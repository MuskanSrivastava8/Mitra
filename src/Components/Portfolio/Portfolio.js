import React from "react";
import "./portfolio.scss";
import Summary from "./Summary";
import { GrLinkedinOption } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import { AiOutlineMail } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

export default function Portfolio() {
  var darkModeRes = useSelector((store) => store.THEME.dark_mode);

  return (
    <React.Fragment>
      <div className="portfolio_container">
        <div className="intro">
          <div className={darkModeRes ? "name_dark" : "name_light"}>
            <span
              className={darkModeRes ? "name_text_dark" : "name_text_light"}
            >
              Muskan Srivastava
            </span>
            <span className="occupation">
              <span>
              I've worked in TCS for 2.8 years as a frontend developer.
{" "}
              </span>
              <br></br>
              <span>
                {" "}
                React, Javascript, SCSS, Redux, and typescript are among my
                skills.
              </span>
            </span>
            <div className="address" id="contact_icons">
              <div className="menu_item_contact">
                <a
                  href="https://www.linkedin.com/in/muskan-srivastava-123b23199"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GrLinkedinOption
                    style={{ color: "blue", fontSize: "1.5em" }}
                  />
                </a>
              </div>
              <div className="menu_item_contact">
                <a
                  href="mailto:someone@example.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineMail style={{ color: "red", fontSize: "1.5em" }} />
                </a>
              </div>
              <div className="menu_item_contact">
                <a href="tel:8756719954" target="_blank" rel="noreferrer">
                  <FiPhoneCall style={{ color: "green", fontSize: "1.5em" }} />
                </a>
              </div>
              <div className="menu_item_contact">
                <a
                  href="https://github.com/MuskanSrivastava8"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub
                    style={{
                      color: darkModeRes ? "black" : "black",
                      fontSize: "1.5em",
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            darkModeRes ? "portfolio_details_dark" : "portfolio_details_light"
          }
        >
          <Summary />
        </div>
      </div>
    </React.Fragment>
  );
}
