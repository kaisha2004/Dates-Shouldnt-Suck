import React from "react";
// import "./Nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
  <nav>
    <h1>Dating Shouldn't Suck</h1>
    <NavLink className="write" to="/">Home</NavLink>
    <NavLink className="write" to="/login">Write A Review</NavLink>

  </nav>
  )
}
export default Nav