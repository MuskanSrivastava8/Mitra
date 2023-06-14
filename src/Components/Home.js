import React from "react";
import { Route, Routes } from "react-router-dom";
import Knowyourshow from "./Knowyourshow";
import Portfolio from "./Portfolio";
import Help from "./Help";
import Menu from "./Menu";
import Intro from "./Intro";

export default function Home() {
  return (
    <React.Fragment>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Intro />} />
        <Route exact path="/Intro" element={<Intro />} />
        <Route exact path="/Portfolio" element={<Portfolio />} />
        <Route path="/Knowyourshow" element={<Knowyourshow />} />
        <Route path="*" element={<Help />} />
      </Routes>
    </React.Fragment>
  );
}
