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
import { BsArrowUpRight } from "react-icons/bs";

export default function Intro() {
  const [portfolioView, setportfolioView] = useState(false);
  const [KYSView, setKYSView] = useState(false);
  const [ETView, setETView] = useState(false);
  const [GameView, setGameView] = useState(false);
  var darkModeRes = useSelector((store) => store.THEME.dark_mode);
  const [downloaded, setdownloaded] = useState(false);

  const showKYS = () => {
    setKYSView(true);
  };
  const showET = () => {
    setETView(true);
  };
  const showGame = () => {
    setGameView(true);
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
      {GameView ? <Navigate to="/TicTacToe" replace={true} /> : null}

      

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
              <br></br>Frontend developer with { new Date().getFullYear() - 2021}+ Years of Experience
              <br></br>I've utilised my frontend development knowledge on these projects.
            </div>
          </p>
          <p>

            <button type="button" class="btn btn-primary" onClick={showET}>
              Expense Tracker <BsBoxArrowUpRight />
            </button>
            <button type="button" class="btn btn-primary" onClick={showGame}>
              Tic Tac Toe <BsBoxArrowUpRight />
            </button>
            <button type="button" class="btn btn-primary" onClick={showKYS}>
              IMDb Clone <BsBoxArrowUpRight />
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
              Resume{" "}
              {downloaded ? (
                <MdOutlineFileDownloadDone style={{ color: "green" }} />
              ) : (
                <BsDownload />
              )}
            </button>
          </p>
          <p>
            <div className="Project_card_container">
              <div className="Project_card">
                <div className="Project_img">
                  <p>IMDb Clone</p>
                </div>
                <div className="Project_detail">
                  <p>API integration</p>
                  <a
                    href="https://github.com/MuskanSrivastava8/Mitra/tree/main/src/Components/ProjectOne/ProjectOneComponent"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source code <BsArrowUpRight />
                  </a>
                </div>
              </div>
              <div className="Project_card">
                <div className="Project_img">
                  <p>Expense Tracker</p>
                </div>
                <div className="Project_detail">
                  <p>Redux</p>
                  <a
                    href="https://github.com/MuskanSrivastava8/Mitra/tree/main/src/Components/ExpenseTracker"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source code <BsArrowUpRight />
                  </a>
                </div>
              </div>
              <div className="Project_card">
                <div className="Project_img">
                  <p>Portfolio</p>
                </div>
                <div className="Project_detail">
                  <p>CSS</p>
                  <a
                    href="https://github.com/MuskanSrivastava8/Mitra/tree/main/src/Components/Portfolio"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source code <BsArrowUpRight />
                  </a>
                </div>
              </div>
              <div className="Project_card">
                <div className="Project_img">
                  <p>Tic Tac Toe</p>
                </div>
                <div className="Project_detail">
                  <p>JS, Hooks</p>
                  <a
                    href="https://github.com/MuskanSrivastava8/Mitra/tree/main/src/Components/TicTacToe"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source code <BsArrowUpRight />
                  </a>
                </div>
              </div>
            </div>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
