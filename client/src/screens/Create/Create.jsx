import React, { useState } from "react"
import { getAllDateIdeas, putDateIdea, postDateIdea, deleteDateIdea, addReview } from '../../services/date_ideas';
import { Link, useHistory } from "react-router-dom"
import "./Create.css"


function Create(props) {
  const [title, updateTitle] = useState('')
  const [city, updateCity] = useState('')
  const [category, updateCategory] = useState('')
  const [img_url, updateImgUrl] = useState('')
  const [review, updateReview] = useState('')
  const History = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = await postDateIdea( {
      date_idea: {
        title: title,
        city: city,
        category: category,
        img_url: img_url
      }
    })
    const id = data.id
    let reviewForm = {
      id, 
      content: review
   }
   let response = await addReview(reviewForm)
    console.log(response)
    if (response) {
      History.push('/dateideas')
    }
   
  }

  
  if (!props.currentUser) {
     History.push('/login')
  }
  

  return (
   <div className="background5">
      <form onSubmit={handleSubmit} className='createform'>
    <h2 className="form_title">Submit Your Date Idea!</h2>
    <label htmlFor="Image">Image:</label>
    <input type="text" id="img_url" placeholder="URL" onChange={e => updateImgUrl(e.target.value)} value={img_url} />
    <label htmlFor="Title">Title:</label>
    <input type="text" id="Title" onChange={e => updateTitle(e.target.value)} value={title} />
    <label htmlFor="Category">Category:</label>
      <input type="text" id="Category" onChange={e => updateCategory(e.target.value)} value={category} />
      <label htmlFor="City">City:</label>
        <input type="text" id="City" onChange={e => updateCity(e.target.value)} value={city} />
        <label htmlFor="Review">Review:</label>
    <textarea type="textarea" id="Review" cols="30" rows="10" onChange={e => updateReview(e.target.value)} value={review} />
    <button className='createsubmit'>Submit</button>

      
  </form>
   </div>
  )
}

export default Create



  



