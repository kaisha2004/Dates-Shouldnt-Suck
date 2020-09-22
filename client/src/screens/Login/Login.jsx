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
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <br />
          <button>Login</button>
          <Link to="/register">Register</Link>
        </form>
        </div>
    </div>
  )
}
export default Login
