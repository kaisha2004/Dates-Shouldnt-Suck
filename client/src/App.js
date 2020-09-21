import React, { useState, useEffect } from "react"
import { Switch, Route, useHistory } from "react-router-dom"
import "./App.css"
import Login from "./screens/Login/Login"
import Register from "./screens/Register/Register"
import Layout from "./components/shared/Layout/Layout"
import MainContainer from "./container/MainContainer"
import { loginUser, registerUser, verifyUser } from "./services/auth"

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const history = useHistory()

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser()
      setCurrentUser(userData)
      history.push("/")
    }
    handleVerify()
  }, [])

  const loginSubmit = async (loginData) => {
    const userData = await loginUser(loginData)
    setCurrentUser(userData)
    history.push("/")
  }
  const registerSubmit = async (registerData) => {
    const userData = await registerUser(registerData)
    setCurrentUser(userData)
    history.push("/")
  }

  return (
    <div>
      <Layout currentUser={currentUser}>
        <Switch>
          <Route path="/login">
            <Login loginSubmit={loginSubmit} />
          </Route>
          <Route path="/register">
            <Register registerSubmit={registerSubmit} />
          </Route>
          <Route path="/">
            <MainContainer />
          </Route>
        </Switch>
      </Layout>
    </div>
  )
}

export default App
