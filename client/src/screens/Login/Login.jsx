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
   
      <h1>Please Login</h1>
      <form
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
        <Link to="/register">Register</Link>
        <button>Login</button>
        </form>
       
    </div>
  )
}
export default Login
