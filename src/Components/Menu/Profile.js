import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Profile() {
    var darkModeRes = useSelector((store) => store.THEME.dark_mode);
  return (
    <React.Fragment>
    <div className={darkModeRes ? "Profile_container_dark" : "Profile_container_light"}>
        <div>Muskan Srivastava</div>
        <div>SE @TCS digital</div>
    </div>
    </React.Fragment>
  );
}
