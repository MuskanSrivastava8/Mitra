import React from "react";
import "./portfolio.scss";
import Summary from "./Summary";
import { GrLinkedinOption } from "react-icons/gr";
import { GrMailOption } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";


export default function Portfolio() {
  var darkModeRes = useSelector((store) => store.THEME.dark_mode);

  return (
    <React.Fragment>
      <div className="portfolio_container">
        <div className="intro">
          <div className={darkModeRes ?"name_dark" : "name_light"}>
            <span className="name_text">Muskan Srivastava</span>
            <span className="occupation">
              <span>
              I've been a front-end developer at TCS for more than two years.              </span>
              <br></br>
              <span>
                {" "}
                React, Javascript, SCSS, Redux, and typescript are among my skills.
              </span>
            </span>
            <div className="address">
              <div className="menu_item_contact">
                <a
                  href="https://www.linkedin.com/in/muskan-srivastava-123b23199"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GrLinkedinOption />
                </a>
              </div>
              <div className="menu_item_contact">
                <a
                  href="mailto:someone@example.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GrMailOption />
                </a>
              </div>
              <div className="menu_item_contact">
                <a href="tel:875XXXXXX4" target="_blank" rel="noreferrer">
                  <FiPhoneCall />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={darkModeRes ?"portfolio_details_dark" : "portfolio_details_light"}>
          <Summary />
        </div>
      </div>
      <div className={darkModeRes ?"Portfolio_footer_dark" : "Portfolio_footer_light"}>
        <Footer/>
        </div>
    </React.Fragment>
  );
}
