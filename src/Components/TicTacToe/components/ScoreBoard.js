import React from 'react'

import "./ScoreBoard.scss"
import { useSelector } from "react-redux";


export const ScoreBoard = ({ scores, xPlaying }) => {
  const { xScore, oScore } = scores;
  var darkModeRes = useSelector((store) => store.THEME.dark_mode);

  return (
    <div className={darkModeRes ? "scoreboard_dark" : "scoreboard_light"} >
      <span className={`score x-score ${!xPlaying && "inactive"}`}>X - {xScore}</span>
      <span className={`score o-score ${xPlaying && "inactive"}`}>O - {oScore}</span>
    </div>
  )
}
