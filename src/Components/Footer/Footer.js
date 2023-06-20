import React from "react";
import "./footer.scss";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";

export default function Footer() {
  const style_contact = { color: "white", fontSize: "1.5em" }

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
                <GrLinkedinOption style={style_contact}/>
              </a>
            </div>
            <div className="footer_menu_item_contact">
              <a
                href="mailto:someone@example.com"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineMail style={style_contact}/>
              </a>
            </div>
            <div className="footer_menu_item_contact">
              <a href="tel:87567XXXX4" target="_blank" rel="noreferrer">
                <FiPhoneCall style={style_contact} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer_message">
          © 2021 Company, Inc. All rights reserved.
        </div>
      {/* </div> */}
    </React.Fragment>
  );
}
