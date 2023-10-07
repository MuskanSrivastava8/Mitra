import React, { useState } from "react";
import Portfolio from "../Portfolio/Portfolio";
import "./Intro.scss";
import { Navigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import MuskanResume from "./MuskanResume.pdf";
import { BsDownload } from "react-icons/bs";
import { MdOutlineFileDownloadDone } from "react-icons/md";


export default function Intro() {
  const [portfolioView, setportfolioView] = useState(false);
  const [KYSView, setKYSView] = useState(false);
  const [ETView, setETView] = useState(false);
  var darkModeRes = useSelector((store) => store.THEME.dark_mode);
  const [downloaded, setdownloaded] = useState(false);

  const showKYS = () => {
    setKYSView(true);
  };
  const showET = () => {
    setETView(true);
  };
  const showPortfolio = () => {
    setportfolioView(true);
  };
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
  return (
    <React.Fragment>
      {portfolioView ? <Navigate to="/Portfolio" replace={true} /> : null}
      {KYSView ? <Navigate to="/Knowyourshow" replace={true} /> : null}
      {ETView ? <Navigate to="/Expensetracker" replace={true} /> : null}

      <div className="intro_container">
        <div
          className={
            darkModeRes ? "intro_content_box_dark" : "intro_content_box_light"
          }
        >
          <p className="welcome_text">Welcome</p>
          <p className="greeting_text">
            Greetings, I'm
            <span className="Intro_name_text">
              {" "}
              <b> Muskan.</b>
            </span>
            <div className="introLine">
              <br></br>I am a front-end developer with 2+ years of experience.
              <br></br>Have applied my experience of front-end development to
              these projects.
            </div>
          </p>
          <p>
            <button type="button" class="btn btn-primary" onClick={showKYS}>
              IMDb Clone <BsBoxArrowUpRight />
            </button>
            <button type="button" class="btn btn-primary" onClick={showET}>
              Expense Tracker <BsBoxArrowUpRight />
            </button>
            <button
              type="button"
              class="btn btn-primary"
              onClick={showPortfolio}
            >
              Portfolio <BsBoxArrowUpRight />
            </button>
            <button
              type="button"
              class="btn btn-primary"
              onClick={onButtonClick}
            >
             Resume {downloaded ? <MdOutlineFileDownloadDone style={{color : "green"}}/> : <BsDownload />}
            </button>
          </p>
        </div>
        <div
          className={darkModeRes ? "Intro_footer_dark" : "Intro_footer_light"}
        >
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}
