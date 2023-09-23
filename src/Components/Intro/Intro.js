import React, { useState } from "react";
import Portfolio from "../Portfolio/Portfolio";
import "./Intro.scss";
import { Navigate } from "react-router-dom";
import footer from "../Footer/Footer";
import Footer from "../Footer/Footer";

export default function Intro() {
  const [portfolioView, setportfolioView] = useState(false);
  const [KYSView, setKYSView] = useState(false);
  const [ETView, setETView] = useState(false);

  const showKYS = () => {
    setKYSView(true);
  };
  const showET = () => {
    setETView(true);
  };
  const showPortfolio = () => {
    setportfolioView(true);
  };
  return (
    <React.Fragment>
      {portfolioView ? <Navigate to="/Portfolio" replace={true} /> : null}
      {KYSView ? <Navigate to="/Knowyourshow" replace={true} /> : null}
      {ETView ? <Navigate to="/Expensetracker" replace={true} /> : null}

      <div className="intro_container">
        <div className="intro_content_box">
          <p className="welcome_text">Welcome</p>
          <p className="greeting_text">
            Greetings, I'm
            <span className="Intro_name_text">
              {" "}
              <b> Muskan.</b>
            </span>
            <div className="introLine">
              <br></br>I am a front-end developer with 2+ years of
              experience.
              <br></br>Have applied my experience of front-end development to these
              projects.
            </div>
          </p>
          <p>
            <button onClick={showKYS} className="btn-lg">
              IMDb Clone
            </button>{" "}
            <button onClick={showET} className="btn-lg">
              Expense Tracker
            </button>{" "}
            <button onClick={showPortfolio} className="btn-lg">
              Portfolio
            </button>
          </p>
        </div>
        <div className="Intro_footer">
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}
