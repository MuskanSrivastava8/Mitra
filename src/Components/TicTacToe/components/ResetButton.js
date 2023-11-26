import React from 'react';
import { useSelector } from "react-redux";
import "./ResetButton.scss";

export const ResetButton = ({ resetBoard }) => {
    var darkModeRes = useSelector((store) => store.THEME.dark_mode);

    return (
        <button className={darkModeRes ? "reset-btn_dark" : "reset-btn_light"} onClick={resetBoard}>Reset</button>
    )
}
