import React from "react";
import { useSelector } from "react-redux";

import "./Box.scss";

export const Box = ({ value, onClick }) => {
  var darkModeRes = useSelector((store) => store.THEME.dark_mode);

  const style = value === "X" ? "box x" : "box o";

  return darkModeRes ? (
    <button
      className={style}
      style={{ backgroundColor: "black" }}
      onClick={onClick}
    >
      {value}
    </button>
  ) : (
    <button
      className={style}
      style={{ backgroundColor: "white" }}
      onClick={onClick}
    >
      {value}
    </button>
  );
};
