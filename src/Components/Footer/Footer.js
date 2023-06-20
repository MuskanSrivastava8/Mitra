import React from "react";
import "./footer.scss";
import { GrLinkedinOption } from "react-icons/gr";
import { GrMailOption } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";

export default function Footer() {
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
                <GrLinkedinOption />
              </a>
            </div>
            <div className="footer_menu_item_contact">
              <a
                href="mailto:someone@example.com"
                target="_blank"
                rel="noreferrer"
              >
                <GrMailOption />
              </a>
            </div>
            <div className="footer_menu_item_contact">
              <a href="tel:8756719954" target="_blank" rel="noreferrer">
                <FiPhoneCall />
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
