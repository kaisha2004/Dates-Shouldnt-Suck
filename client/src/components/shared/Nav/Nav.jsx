import React from "react";
// import "./Nav.css";
import { NavLink, useLocation } from "react-router-dom";

function Nav(props) {
  const { currentUser } = props
  const {pathname}= useLocation()
  return (
  <nav>
      <h1>Dates Shouldn't Suck in NYC</h1>
      <NavLink className="write" to="/dateideas">Home</NavLink>
      <NavLink className="write" to="/createidea">Submit A Date Idea</NavLink>
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