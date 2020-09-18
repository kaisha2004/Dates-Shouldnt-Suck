import React, {useState} from "react"
import "./Login.css";
import { NavLink, Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  const { username, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  return (
    <div className='background2'>
   <NavLink className="write" to="/">Home</NavLink>
      <h1>Please Login</h1>
      <form>
        <label>Username:
          <input
            type='text'
            name='username'
            value={username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>Password:
          <input
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
          />
        </label>
        <br />
        <Link to='/register'>Register</Link>
        <button>Submit</button>
      </form>
      
      </div>
)
}
export default Login