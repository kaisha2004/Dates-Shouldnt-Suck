import React from "react"
import ReactDOM from "react-dom"
import { Switch, Route } from "react-router-dom"
import "./App.css"
import Home from "./screens/Home/Home"
import Login from "./screens/Login/Login"

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Login />
        </Route>
      </Switch>
    </div>
  )
}

export default App
