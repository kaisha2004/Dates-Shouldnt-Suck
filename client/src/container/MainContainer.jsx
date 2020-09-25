import React, {useState, useEffect} from "react"
import { Switch, Route } from "react-router-dom"
import { getAllDateIdeas, putDateIdea, postDateIdea, deleteDateIdea} from '../services/date_ideas';
import Home from "../screens/Home/Home"


function MainContainer( currentUser) {
  const [dateIdeas, setDateIdeas] = useState([])
  // const [searchTerm, setSearchTerm] = useState("")



  useEffect(() => {
  
    const fetchDateIdeas = async () => {
      const dateIdeaArray = await getAllDateIdeas()
      setDateIdeas(dateIdeaArray)
    }
    fetchDateIdeas()

  }, []) 
  
  return (
    <Switch>
      {/* <Route path="/dateideas">
        <Home currentUser={currentUser}   />
      </Route> */}
   
      <Route path="/">
        <Home currentUser = {currentUser}/>
      </Route>
    </Switch>
  )
}

export default MainContainer
