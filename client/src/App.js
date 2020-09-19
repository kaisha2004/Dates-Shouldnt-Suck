import React, {useState} from "react"
import { Switch, Route } from "react-router-dom"
import "./App.css"
import Home from "./screens/Home/Home"
import Login from "./screens/Login/Login"
import Register from "./screens/Register/Register"
import { loginUser, registerUser} from './services/auth'

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  const loginSubmit = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
  }
  const registerSubmit = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
  }

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login
            loginSubmit={loginSubmit}
          />
        </Route>
        <Route exact path="/register">
          <Register
            registerSubmit={registerSubmit}
          />
        </Route>
      </Switch>
    </div>
  )
}

export default App
