import React, { useState } from "react"
import "./Login.css"
import { Link } from "react-router-dom"


function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })
  const { username, password } = formData

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  return (
    <div className="background2">
      <div className='logincontent'>
   
      <h1 className='logintitle'>Please Login</h1>
      <form className='loginform'
        onSubmit={(e) => {
          e.preventDefault()
          props.loginSubmit(formData)
        
        }}
      >
        <label className="loglabels">
          Username:
          <input className="reginput"
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="loglabels">
          Password:
          <input className="reginput"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <br />
          <button id='loginbtn' className='loginbtn'>Login</button>
          <Link to="/register" className='registerlink'>
            <button id='registerbtn' className='registerbtn'>Register</button></Link>
        </form>
        </div>
    </div>
  )
}
export default Login
