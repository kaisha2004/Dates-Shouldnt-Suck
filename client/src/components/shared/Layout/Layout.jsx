import React from 'react'
// import './Layout.css'
import Nav from '../Nav/Nav'
// import Footer from '../Footer/Footer'

const Layout = (props) => {
    return(
  <div className='layout'>
    <Nav currentUser={props.currentUser}/>
    <div className="layout-children">
      {props.children}
    </div>
    {/* <Footer /> */}
      </div>
    )
}

export default Layout