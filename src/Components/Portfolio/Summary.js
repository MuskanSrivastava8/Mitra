import React, { useState } from "react";
import "./portfolio.scss";
import { AiOutlineLaptop } from "react-icons/ai";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
import { BsFillMortarboardFill } from "react-icons/bs";
import { BsCodeSlash } from "react-icons/bs";
import { BsTrophy } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { useSelector } from "react-redux";

export default function Summary() {
  const [showCordianView, setshowCordianView] = useState(true);
  const [cardView, setcardView] = useState("");
  const toggleView = () => {
    setshowCordianView(!showCordianView);
  };
  var darkModeRes = useSelector((store) => store.THEME.dark_mode);
  return (
    <React.Fragment>
      {/* <div className="Sticky_btn">
        <button type="button" class="btn btn-primary" onClick={toggleView}>
          {showCordianView ? <FaList/>:<BsFillCreditCard2FrontFill/>}
        </button>
      </div> */}

      <div className="summary_container">
        <div className="row_1">
          <div className="summary_box">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front_skill">
                  <div className="card_text">
                    <div
                      className={
                        darkModeRes ? "card_heading_dark" : "card_heading_light"
                      }
                    >
                      Skill
                    </div>
                    <AiOutlineLaptop
                      style={{ color: darkModeRes ? "white" : "white" }}
                    />
                  </div>
                </div>
                <div class="flip-card-back">
                  <div className="points_heading">
                    <h1>Skill</h1>
                  </div>
                  <div className="points_details">
                    <p>
                      React, Javascript, Typescript, Redux toolkit, Sass, Azure, Media
                      query, HTML, CSS and Jest
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="summary_box">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front_Project">
                  <div className="card_text">
                    <div
                      className={
                        darkModeRes ? "card_heading_dark" : "card_heading_light"
                      }
                    >
                      Project
                    </div>
                    <BsCodeSlash
                      style={{ color: darkModeRes ? "white" : "white" }}
                    />
                  </div>
                </div>
                <div class="flip-card-back">
                  <div className="points_heading">
                    <h5>Project Experience (TCS)</h5>
                  </div>
                  <div className="points_details_project">
                    <p>Hubble Connect : React Developer</p>
                    <p>Medline : React Developer</p>
                    <p>E2open : Application Developer</p>
                  </div>
                  <div className="points_heading">
                    <h5>Personal Project</h5>
                  </div>
                  <div className="points_details_project">
                    <p>Expense tracker, IMDb clone, Portfolio </p>
                    <p>and E-commerce site</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="summary_box">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front_Activities">
                  <div className="card_text">
                    <div
                      className={
                        darkModeRes ? "card_heading_dark" : "card_heading_light"
                      }
                    >
                      Education
                    </div>
                    <BsPencilSquare
                      style={{ color: darkModeRes ? "white" : "white" }}
                    />
                  </div>
                </div>
                {/* <div class="flip-card-back">
                    <div className="points_heading">
                      <h1>Activities</h1>
                    </div>
                    <div className="points_details">
                      <p>T-factor : 2.2</p>
                      <p>iEvolve score : 1320+</p>
                    </div>
                  </div> */}
                <div class="flip-card-back">
                  <div className="points_heading">
                    <h1>Education</h1>
                  </div>

                  <div>
                    {
                      <table className="center">
                        <tr>
                          <th>B.Tech</th>
                          <td>84%</td>
                        </tr>

                        <tr>
                          <th>12th</th>
                          <td>83%</td>
                        </tr>

                        <tr>
                          <th>10th</th>
                          <td>83%</td>
                        </tr>
                      </table>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row_2">
          <div className="summary_box">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front_Education">
                  <div className="card_text">
                    <div
                      className={
                        darkModeRes ? "card_heading_dark" : "card_heading_light"
                      }
                    >
                      Certification
                    </div>
                    <BsFillMortarboardFill
                      style={{ color: darkModeRes ? "white" : "white" }}
                    />
                  </div>
                </div>
                <div class="flip-card-back">
                  <div className="points_heading">
                    <h1>Certification</h1>
                  </div>
                  <div className="points_details">
                    <p>Problem solving HackerRank</p>
                    <p>React HackerRank</p>
                    <p>Javascript HackerRank</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="summary_box">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front_Awards">
                  <div className="card_text">
                    <div
                      className={
                        darkModeRes ? "card_heading_dark" : "card_heading_light"
                      }
                    >
                      Awards
                    </div>
                    <BsTrophy
                      style={{ color: darkModeRes ? "white" : "white" }}
                    />
                  </div>
                </div>
                <div class="flip-card-back">
                  <div className="points_heading">
                    <h1>Awards</h1>
                  </div>
                  <div className="points_details">
                    <p>On the spot Awards</p>
                    <p>Elevate wings Awards</p>
                    <p>Xcelerate Warrior Certificate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="summary_box">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front_Contact">
                  <div className="card_text">
                    <div
                      className={
                        darkModeRes ? "card_heading_dark" : "card_heading_light"
                      }
                    >
                      Contact
                    </div>
                    <BsFillEnvelopeAtFill
                      style={{ color: darkModeRes ? "white" : "white" }}
                    />
                  </div>
                </div>
                <div class="flip-card-back">
                  <div className="points_heading">
                    <h1>Contact</h1>
                  </div>
                  <div className="points_details">
                    <p>8756719954</p>
                    <p>muskansrivastava8756@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
