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
      <div className="subnav">
        <NavLink className="write" id="home" to="/">Home</NavLink>
        {
            currentUser ?
            <NavLink className="write" id='submit1' to="/createidea">Submit A Date Idea</NavLink> :
             <NavLink className="write" id='submit2' to="/login">Submit A Date Idea</NavLink>
            }
        
       
          {
            currentUser ?
              <div className="loguser">
                <p id='username1'>Hello {currentUser.username}!</p>
                <button id='logout' onClick={props.handleLogout}>Logout</button>
              </div> :
              <NavLink id="hidden" to='/login'>Login / Register</NavLink>
            }
        
      </div>
  </nav>
  )
}
export default Nav