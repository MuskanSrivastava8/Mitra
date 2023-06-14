import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <React.Fragment>
    <NavLink to={"/Portfolio"}>Portfolio</NavLink>
    <br></br>
    <NavLink to={"/Knowyourshow"}>Knowyourshow</NavLink>

      
    </React.Fragment>
  )
}
