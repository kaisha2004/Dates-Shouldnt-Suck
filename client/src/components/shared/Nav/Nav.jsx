import React from "react";
// import "./Nav.css";
import { NavLink, useLocation } from "react-router-dom";

function Nav(props) {
  const { currentUser } = props
  const {pathname}= useLocation()
  return (
  <nav>
      <h1>Dating Shouldn't Suck</h1>
      <NavLink className="write" to="/">Home</NavLink>
      <NavLink className="write" to="/login">Write A Review</NavLink>
      {/* {
        currentUser ? 
          <div>
            <p>Hello {currentUser.username}!</p>
            <button>Logout</button>
          </div> : */}
        
  </nav>
  )
}
export default Nav