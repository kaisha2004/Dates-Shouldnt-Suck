import React, { useState, useEffect } from "react"
import { Switch, Route, useHistory, Redirect } from "react-router-dom"
import "./App.css"
import Login from "./screens/Login/Login"
import Register from "./screens/Register/Register"
import Create from "./screens/Create/Create"
import Update from "./screens/Update/Update"
import Layout from "./components/shared/Layout/Layout"
import Home from "./screens/Home/Home"
import { loginUser, registerUser, verifyUser, removeToken } from "./services/auth"

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
      history.push("/createidea")
  }
  const registerSubmit = async (registerData) => {
    const userData = await registerUser(registerData)
    setCurrentUser(userData)
    history.push("/createidea")
  }

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    removeToken();
    setCurrentUser(null);
    history.push('/');
  }

  return (
    <div>
      <Layout
        currentUser={currentUser}
        handleLogout={handleLogout}
      >

        <Switch>
          <Route path="/dateideas/edit/:id" exact>
            <Update />
          </Route>
          <Route path="/createidea">
            <Create  currentUser={currentUser}/>
          </Route>
          <Route path="/login">
            <Login loginSubmit={loginSubmit}  />
          </Route>
          <Route path="/register">
            <Register registerSubmit={registerSubmit} />
          </Route>
          <Route path="/">
            <Home currentUser={currentUser}/>
          </Route>
        </Switch>
      </Layout>
    </div>
  )
}

export default App
