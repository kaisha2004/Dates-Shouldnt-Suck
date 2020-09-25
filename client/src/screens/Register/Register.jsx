import React, { useState } from 'react'
import "./Register.css"

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
    <div className="background3">
      <div className="regcontent"> 
      <h1 className='regtitle'>Please Sign-Up</h1>
      <form className='regform'
        onSubmit={(e) => {
          e.preventDefault()
          props.registerSubmit(formData)
        }}
      >
        <label>
          Username:
          <input className="reginput"
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input className="reginput"
            type='integer'
            name="age"
            value={age}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input className="reginput"
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input className="reginput"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button id= 'regbtn' className='regbtn'>Register</button>
        </form>
        </div>
    </div>
  )
  
}
