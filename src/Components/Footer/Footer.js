import React from "react";
import "./footer.scss";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
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
                <GrLinkedinOption style={darkModeRes ? style_contact_dark : style_contact_light}/>
              </a>
            </div>
            <div className="footer_menu_item_contact">
              <a
                href="mailto:someone@example.com"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineMail style={darkModeRes ? style_contact_dark : style_contact_light}/>
              </a>
            </div>
            <div className="footer_menu_item_contact">
              <a href="tel:87567XXXX4" target="_blank" rel="noreferrer">
                <FiPhoneCall style={darkModeRes ? style_contact_dark : style_contact_light} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer_message">
          © 2023 Company, Inc. All rights reserved.
        </div>
      {/* </div> */}
    </React.Fragment>
  );
}
