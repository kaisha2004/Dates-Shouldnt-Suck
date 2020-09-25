import React from "react";
import "./Nav.css";
import { NavLink, useLocation } from "react-router-dom";

function Nav(props) {
  const { currentUser } = props
  const { pathname } = useLocation()
  
  function refreshPage(){ 
    window.location.reload(); 
}
  return (
  <nav className='nav'>
      <h1 className='nav-title'>Dates Shouldn't Suck</h1>
      <NavLink className="write" to="/" onClick={ refreshPage }>Home</NavLink>
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