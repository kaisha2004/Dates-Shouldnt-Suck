import React, { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import {
  getAllDateIdeas,
  putDateIdea,
  postDateIdea,
  deleteDateIdea,
  getAllUsers,
  getAllReviews,
} from "../../services/date_ideas"
import Create from "../Create/Create"
import { Link } from "react-router-dom"
import "./Date_Ideas.css"

function Date_Ideas(props) {
  const [dateIdeas, setDateIdeas] = useState([])
  const [reviews, setReviews] = useState([])

  const { currentUser, term } = props
  

  useEffect(() => {
    const fetchDateIdeas = async () => {
      const dateIdeaArray = await getAllDateIdeas()

      const newArr = dateIdeaArray.filter(
        (idea) => idea.category === term.value
      )
      setDateIdeas(newArr)
    }
    fetchDateIdeas()
  }, [])


  // useEffect(() => {
  //   const fetchReviews = async () => {
  //     const reviewArray = await getAllReviews()
  //     setReviews(reviewArray)
  //   }
  //   fetchReviews()
  // }, [])

  const renderEdit = (date_idea) => {
    if (currentUser && currentUser.currentUser.username === date_idea.user.username) {
      return (
        <Link to={`/dateideas/edit/${date_idea.id}`}>
          <button id="datebtn">Edit Date Info</button>
        </Link>
      )
    }
  }
  const renderEdit = (date_idea) => {
    if (currentUser && currentUser.currentUser.username === date_idea.user.username) {
      return (
        <Link to={`/dateideas/edit/${date_idea.id}`}>
          <button id="revbtn">Edit Your Review</button>
        </Link>
      )
    }
  }

  return (
    <div className="background7">
      <div className="summary">
        {dateIdeas.map((date_idea, i) => {
          if (i === 0) {
            return (<h1 className='dateTitle'>{date_idea.category} Reviews!</h1>)
          }
        })}
        {dateIdeas.map((date_idea) => (
          <div className="datesummary">
            <img src={`${date_idea.img_url}`} className="idea_pics" />
            <div className="dateinfo">
              <h1 className="datetitle">{date_idea.title}</h1>
              <h3 className="datecity">City: {date_idea.city} </h3>
              <h3 className="dateauthor">
                Submitted By: {date_idea.user.username}, {date_idea.user.age}
                yrs. old 
              </h3>
              <h4 className="datecat">Category: {date_idea.category}</h4>
              {date_idea.reviews.map((review) => (
                <p className="review">{review.content} - {review.username}</p>
              ))}
            </div>
            {renderEdit(date_idea)}
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
