import React, {useState, useEffect} from "react"
import { Switch, Route } from "react-router-dom"
import { getAllDateIdeas, putDateIdea, postDateIdea, deleteDateIdea} from '../services/date_ideas';
import Date_Ideas from "../screens/Date_Ideas/Date_Ideas"
import Home from "../screens/Home/Home"


function MainContainer(props) {
  const [dateIdeas, setDateIdeas] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
  
    const fetchDateIdeas = async () => {
      const dateIdeaArray = await getAllDateIdeas()
      setDateIdeas(dateIdeaArray)
    }
    fetchDateIdeas()

  }, []) 
  
  return (
    <Switch>
      <Route path="/dateideas">
        <Date_Ideas dateIdeas={dateIdeas} />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  )
}

export default MainContainer
