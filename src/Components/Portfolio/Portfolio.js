import React from "react";
import "./portfolio.scss";
import Summary from "./Summary";
import { GrLinkedinOption } from "react-icons/gr";
import { GrMailOption } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import Footer from "../Footer/Footer";

export default function Portfolio() {
  return (
    <React.Fragment>
      <div className="portfolio_container">
        <div className="intro">
          <div className="name">
            <span className="name_text">Muskan Srivastava</span>
            <span className="occupation">
              <span>
                I'm Frontend Developer at TCS. I have 1.8 year of Experience.
              </span>
              <br></br>
              <span>
                {" "}
                My skills are React, Javascript, SCSS, Redux and Typescript.
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
        <div className="portfolio_details">
          <Summary />
        </div>
      </div>
      <div className="Portfolio_footer">
        <Footer/>
        </div>
    </React.Fragment>
  );
}
