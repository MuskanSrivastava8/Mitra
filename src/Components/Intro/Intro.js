import React, { useState } from "react";
import Portfolio from "../Portfolio/Portfolio";
import "./Intro.scss";
import { Navigate } from "react-router-dom";
import footer from "../Footer/Footer";
import Footer from "../Footer/Footer";


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
            Hello, Myself<span className="Intro_name_text"> <b>Muskan</b></span>
            <br></br>
            I am frontend developer, with experience of 1.8 months
          </p>
          <p>
            <button onClick={btn_clicked} className="btn-lg">
              Gets started
            </button>
          </p>
        </div>
       
        <div className="Intro_footer">
        <Footer/>
        </div>
      </div>
    </React.Fragment>
  );
}
