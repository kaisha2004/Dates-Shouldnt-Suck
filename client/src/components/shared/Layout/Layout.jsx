import React from 'react'
import './Layout.css'
import Nav from '../Nav/Nav'
// import Footer from '../Footer/Footer'

const Layout = (props) => {
    return(
      <div className='layout'>
        <header>
          <Nav currentUser={props.currentUser} />
          </header>
    <div className="layout-children">
      {props.children}
      
          </div>
        
      </div>
    )
}

export default Layout