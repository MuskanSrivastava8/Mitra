import React from "react";
import "./portfolio.scss";

export default function Summary() {
  return (
    <React.Fragment>
      <div className="summary_container">
        <div className="row_1">
          <div className="summary_box">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">Skill</div>
                <div class="flip-card-back">
                  <h1>Skill</h1>
                  <h4>React</h4>
                  <p>Javascript, Typescript, Redux, Sass, HTML, CSS</p>
                </div>
              </div>
            </div>
          </div>
          <div className="summary_box">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">Education</div>
                <div class="flip-card-back">
                  <h1>Education</h1>
                  <p>
                    {
                      <table>
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
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="summary_box">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">Activities</div>
                <div class="flip-card-back">
                  <h1>Activities</h1>
                  <p>T-factor : 1.8</p>
                  <p>iEvolve score : 1320</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row_2">
          <div className="summary_box">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">Project</div>
                <div class="flip-card-back">
                  <h1>Project</h1>
                  <p>Know Your shows</p>
                  <p>Music player</p>
                </div>
              </div>
            </div>
          </div>
          <div className="summary_box">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">Awards</div>
                <div class="flip-card-back">
                  <h1>Awards</h1>
                  <p>On the spot Awards</p>
                  <p>Elevate wings Awards</p>
                  <p>Xcelerate Warrior Certificate</p>
                </div>
              </div>
            </div>
          </div>
          <div className="summary_box">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">Contact</div>
                <div class="flip-card-back">
                  <h1>Contact</h1>
                  <p>8756719954</p>
                  <p>muskan.srivastava@tcs.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
