import React, { useState, useEffect } from 'react'
import { Switch, Route } from "react-router-dom"
import { getAllDateIdeas, putDateIdea, postDateIdea, deleteDateIdea } from '../../services/date_ideas';
import Create from '../Create/Create'
import { Link } from "react-router-dom"


 
function Date_Ideas(props) {
  const [dateIdeas, setDateIdeas] = useState([])
  const [newIdea, setNewIdea] = useState(false)
  
  
  useEffect(() => {
        const fetchDateIdeas = async () => {
          const dateIdeaArray = await getAllDateIdeas()
          setDateIdeas(dateIdeaArray)
        }
        fetchDateIdeas()
      }, [newIdea]) 

 
  return (
    <div>
    
      {dateIdeas.map(date_idea => (
        <div>
        <img src={`${date_idea.img_url}`} className='idea_pics'/>
          <h1>{date_idea.title}</h1>
          <h2>{date_idea.city} </h2>
          <h2>{date_idea.category}</h2>
          <Link to={`/dateideas/edit/${date_idea.id}`}>
        <button>Edit</button>
      </Link>

     </div>
      ))}
       <Switch>
      <Route path="/createidea">
      <Create 
        setNewIdea={setNewIdea}
        newIdea={newIdea}
          />
        </Route>
        </Switch>
    </div>
  )
}

export default Date_Ideas
