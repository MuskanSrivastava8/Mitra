import React, { useState } from "react";
import Portfolio from "../Portfolio/Portfolio";
import "./Intro.scss";
import { Navigate } from "react-router-dom";

export default function Intro() {
  const [portfolioView, setportfolioView] = useState(false);
  const btn_clicked = () => {
    setportfolioView(true);
  };
  return (
    <React.Fragment>
      {portfolioView ? <Navigate to="/Portfolio" replace={true} /> : null}
      <div className="intro_container">
        <div className="intro_content_box">
          <p className="welcome_text">Welcome</p>
          <p className="greeting_text">
            Greetings, have a look on my project, It consist of portfolio, IMDb
            clone Know your show
          </p>
          <p>
            <button onClick={btn_clicked} className="btn-lg">
              Gets started
            </button>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
