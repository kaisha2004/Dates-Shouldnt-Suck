import React, { useState, useEffect } from 'react'
import { Switch, Route } from "react-router-dom"
import { getAllDateIdeas, putDateIdea, postDateIdea, deleteDateIdea } from '../../services/date_ideas';
import Create from '../Create/Create'
import { Link } from "react-router-dom"
import "./Date_Ideas.css";


 
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

 
  const renderEdit = (date_idea) => {
    if (props.currentUser && props.currentUser.id === date_idea.user_id) {
        return <Link to={`/dateideas/edit/${date_idea.id}`}><button className='datebtn'>Edit</button></Link>
      }
  }
  
  return (
    <div className='background7'>
     <div className='summary'>
      {dateIdeas.map(date_idea => (
        <div className='datesummary'>
          <img src={`${date_idea.img_url}`} className='idea_pics' />
          <div clasName='dateinfo'>
          <h1 className='datetitle'>{date_idea.title}</h1>
          <h3 className='datecity'>City: {date_idea.city} </h3>
          <h3 className='dateauthor'>Submitted By: {date_idea.user.username}</h3>
          <h4 className='datecat'>Category: {date_idea.category}</h4>
          {date_idea.reviews.map(review => (
            <p className='review'>{review.content}</p>
          ))}
            {renderEdit(date_idea)}
            </div>

     </div>
      ))}
        </div>
       {/* <Switch>
      <Route path="/createidea">
      <Create 
        setNewIdea={setNewIdea}
        newIdea={newIdea}
          />
        </Route>
        </Switch> */}
    </div>
  )
}

export default Date_Ideas
