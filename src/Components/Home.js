import React from "react";
import { Route, Routes } from "react-router-dom";
import Knowyourshow from "./ProjectOne/Knowyourshow";
import Portfolio from "./Portfolio/Portfolio";
import Help from "./Help";
import Menu from "./Menu/Menu";
import Intro from "./Intro/Intro";
import ProjectOneComponent from "./ProjectOne/ProjectOneComponent";
import Expensetracker from "./ExpenseTracker/Expensetracker";
import Footer from "./Footer/Footer";
import TicTacToe from "./TicTacToe/TicTacToe";

export default function Home() {
  return (
    <React.Fragment>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Intro />} />
        <Route exact path="/Intro" element={<Intro />} />
        <Route exact path="/Portfolio" element={<Portfolio />} />
        <Route path="/Knowyourshow" element={<ProjectOneComponent />} />
        <Route exact path="/Expensetracker" element={<Expensetracker />} />
        <Route exact path="/TicTacToe" element={<TicTacToe />} />
        <Route path="*" element={<Help />} />
      </Routes>
      <Footer/>
    </React.Fragment>
  );
}
