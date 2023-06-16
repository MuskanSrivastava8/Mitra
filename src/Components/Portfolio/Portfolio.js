import React from "react";
import "./portfolio.scss";
import Summary from "./Summary";

export default function Portfolio() {
  return (
    <React.Fragment>
      <div className="portfolio_container">
        <div className="intro">
          <div className="name">
            <span className="name_text">Muskan Srivastava</span>
            <span className="occupation">Frontend Developer at TCS</span>
          </div>
        </div>
        <div className="details"><Summary/></div>
      </div>
    </React.Fragment>
  );
}
