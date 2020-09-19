import React, { useState } from 'react'
import { NavLink } from "react-router-dom"

export default function Register(props) {
  
  const [formData, setFormData] = useState({
    username: "",
    age:0,
    email: "",
    password: "",

  })
  const { username, age, email, password } = formData

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  return (
    <div className="background2">
      <NavLink className="write" to="/">
        Home
      </NavLink>
      <h1>Please Sign-Up</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          props.registerSubmit(formData)
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
          Age:
          <input
            type='integer'
            name="age"
            value={age}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={email}
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
        <button>Register</button>
      </form>
    </div>
  )
  
}
