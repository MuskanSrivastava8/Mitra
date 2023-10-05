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
      <div className="Sticky_btn">
        <button type="button" class="btn btn-primary" onClick={toggleView}>
          {showCordianView ? <FaList/>:<BsFillCreditCard2FrontFill/>}
        </button>
      </div>

      {showCordianView ? (
        <div className="summary_container">
          <div className="row_1">
            <div className="summary_box">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <div className="card_text">
                      <div className={darkModeRes ? "card_heading_dark" : "card_heading_light"}>Skill</div>
                      <AiOutlineLaptop style={{color: darkModeRes ?"black": "white"}} />
                    </div>
                  </div>
                  <div class="flip-card-back">
                    <div className="points_heading">
                      <h1>Skill</h1>
                    </div>
                    <div className="points_details">
                      <p>
                        React, Javascript, Typescript, Redux toolkit, Sass, Media query, HTML, CSS
                        and Jest
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="summary_box">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <div className="card_text">
                      <div className={darkModeRes ? "card_heading_dark" : "card_heading_light"}>Project</div>
                      <BsCodeSlash style={{color: darkModeRes ?"black": "white"}} />
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
                      <p>Expense tracker, IMDb clone, Portfolio</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="summary_box">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <div className="card_text">
                      <div className={darkModeRes ? "card_heading_dark" : "card_heading_light"}>Activities</div>
                      <BsPencilSquare style={{color: darkModeRes ?"black": "white"}}  />
                    </div>
                  </div>
                  <div class="flip-card-back">
                    <div className="points_heading">
                      <h1>Activities</h1>
                    </div>
                    <div className="points_details">
                      <p>T-factor : 2.2</p>
                      <p>iEvolve score : 1320+</p>
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
                  <div class="flip-card-front">
                    <div className="card_text">
                      <div className={darkModeRes ? "card_heading_dark" : "card_heading_light"}>Education</div>
                      <BsFillMortarboardFill  style={{color: darkModeRes ?"black": "white"}} />
                    </div>
                  </div>
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
            <div className="summary_box">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <div className="card_text">
                      <div className={darkModeRes ? "card_heading_dark" : "card_heading_light"}>Awards</div>
                      <BsTrophy style={{color: darkModeRes ?"black": "white"}} />
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
                  <div class="flip-card-front">
                    <div className="card_text">
                      <div className={darkModeRes ? "card_heading_dark" : "card_heading_light"}>Contact</div>
                      <BsFillEnvelopeAtFill style={{color: darkModeRes ?"black": "white"}}  />
                    </div>
                  </div>
                  <div class="flip-card-back">
                    <div className="points_heading">
                      <h1>Contact</h1>
                    </div>
                    <div className="points_details">
                      <p>875XXXXXX4</p>
                      <p>muskan.srivastava@tcs.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  Skill
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div class="accordion-body">
                  React, Javascript, Typescript, Redux, Sass, HTML, CSS and Jest
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  Project
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div class="accordion-body">
                  <div className="points_heading">
                    <h5>Project Experience (TCS)</h5>
                  </div>
                  <div className="points_details" style={{fontSize : "1px"}}>
                    <p>Hubble Connect : React Developer</p>
                    <p>Medline : React Developer</p>
                    <p>E2open : Application Developer</p>
                  </div>
                  <div className="points_heading">
                    <h5>Personal Project</h5>
                  </div>
                  <div className="points_details">
                    <p>Expense tracker, IMDb clone, Portfolio</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Activities
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div class="accordion-body">
                  <p>T-factor : 2.2</p>
                  <p>iEvolve score : 1320+</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseFour"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseFour"
                >
                  Education
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseFour"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingFour"
              >
                <div class="accordion-body">
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
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingFive">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseFive"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseFive"
                >
                  Awards
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseFive"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingFive"
              >
                <div class="accordion-body">
                  <p>On the spot Awards</p>
                  <p>Elevate wings Awards</p>
                  <p>Xcelerate Warrior Certificate</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingSix">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseSix"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseSix"
                >
                  Contact
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseSix"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingSix"
              >
                <div class="accordion-body">
                  <p>875XXXXXX4</p>
                  <p>muskan.srivastava@tcs.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
