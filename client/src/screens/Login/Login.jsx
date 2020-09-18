import React, {useState} from "react"
import "./Login.css";
import { NavLink } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  const { username, password } = formData;
  return (
    <>
   <NavLink className="write" to="/">Home</NavLink>
      <h1>Please Login</h1>
      <form>
        <label>Username:
          <input />
        </label>
        <label>Password:
          <input />
        </label>
        <Link to='/register'>Register</Link>
        <button>Submit</button>
      </form>
      
      </>
)
}
export default Login