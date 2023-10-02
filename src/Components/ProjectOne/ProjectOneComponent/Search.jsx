import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { useSelector } from "react-redux";

export default function Search({ onClick }) {
  var darkModeRes = useSelector((store) => store.THEME.dark_mode);
  const [searchInput, setsearchInput] = useState("");
  const search_now = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onClick(e.target.value);
      setsearchInput("");
    }
  };
  const handleChange = (e) => {
    setsearchInput(e.target.value);
  };
  const clearfunc = ()=> {
    setsearchInput("");
  }
  return (
    <React.Fragment>
      <div className="search_container">
        <input
          onKeyUp={search_now}
          className={darkModeRes ?"search_box_dark" : "search_box_light"}
          type="text"
          onChange={handleChange}
          value={searchInput}
          placeholder="Search show here ...."
        ></input>
        <div className="clear_btn">
          <Button variant="danger" className="search_btn" onClick={clearfunc}>X</Button>
        </div>
      </div>
    </React.Fragment>
  );
}
