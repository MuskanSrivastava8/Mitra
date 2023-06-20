import React from "react";
import "./portfolio.scss";
import { AiOutlineLaptop } from "react-icons/ai";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
import { BsFillMortarboardFill } from "react-icons/bs";
import { BsCodeSlash } from "react-icons/bs";
import { BsTrophy } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";

export default function Summary() {
  return (
    <React.Fragment>
      <div className="summary_container">
        <div className="row_1">
          <div className="summary_box">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div className="card_text">
                    <div className="card_heading">Skill</div>
                    <AiOutlineLaptop />
                  </div>
                </div>
                <div class="flip-card-back">
                  <div className="points_heading">
                    <h1>Skill</h1>
                  </div>
                  <div className="points_details">
                  <p>React, Javascript, Typescript, Redux, Sass, HTML, CSS</p>
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
                    <div className="card_heading">Project</div>
                    <BsCodeSlash />
                  </div>
                </div>
                <div class="flip-card-back">
                  <div className="points_heading">
                    <h5>Project Experience (TCS)</h5>
                  </div>
                  <div className="points_details">
                  <p>Medline : React Developer</p>
                  <p>E2open : Application Developer</p>
                  </div>
                  <div className="points_heading">
                    <h5>Personal Project</h5>
                  </div>
                  <div className="points_details">
                  <p>Mitra</p>
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
                    <div className="card_heading">Activities</div>
                    <BsPencilSquare />
                  </div>
                </div>
                <div class="flip-card-back">
                  <div className="points_heading">
                    <h1>Activities</h1>
                  </div>
                  <div className="points_details">
                  <p>T-factor : 1.8</p>
                  <p>iEvolve score : 1320</p>
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
                    <div className="card_heading">Education</div>
                    <BsFillMortarboardFill />
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
                    <div className="card_heading">Awards</div>
                    <BsTrophy />
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
                    <div className="card_heading">Contact</div>
                    <BsFillEnvelopeAtFill />
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
    </React.Fragment>
  );
}
