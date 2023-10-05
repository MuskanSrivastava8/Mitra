import React from "react";
import "./footer.scss";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { useSelector } from "react-redux";


export default function Footer() {
  var darkModeRes = useSelector((store) => store.THEME.dark_mode);
  const style_contact_dark = { color: "white", fontSize: "1.5em" }
  const style_contact_light = { color: "black", fontSize: "1.5em" }
  return (
    <React.Fragment>
      {/* <div className="footer_container"> */}
        <div className="footer_contact">
          <div className="footer_address">
            <div className="footer_menu_item_contact">
              <a
                href="https://www.linkedin.com/in/muskan-srivastava-123b23199"
                target="_blank"
                rel="noreferrer"
              >
                <GrLinkedinOption style={{ color: "blue", fontSize: "1.5em" }}/>
              </a>
            </div>
            <div className="footer_menu_item_contact">
              <a
                href="mailto:someone@example.com"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineMail style={{ color: "red", fontSize: "1.5em" }}/>
              </a>
            </div>
            <div className="footer_menu_item_contact">
              <a href="tel:87567XXXX4" target="_blank" rel="noreferrer">
                <FiPhoneCall style={{ color: "green", fontSize: "1.5em" }} />
              </a>
            </div>
            <div className="footer_menu_item_contact">
              <a href="https://github.com/MuskanSrivastava8" target="_blank" rel="noreferrer">
                <BsGithub style={{ color: darkModeRes ? "white" : "black" , fontSize: "1.5em" }} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer_message">
          © 2023 Company, Inc. All rights reserved.
        </div>
        <div className="footer_message">
          Made by Muskan with <BsFillSuitHeartFill style={{ color: "red", fontSize: "1.2em" }}/>
        </div>
      {/* </div> */}
    </React.Fragment>
  );
}
