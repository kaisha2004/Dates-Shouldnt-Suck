import React, { useState } from "react"
import { getAllDateIdeas, putDateIdea, postDateIdea, deleteDateIdea} from '../../services/date_ideas';


function Create(props) {
  const [title, updateTitle] = useState('')
  const [city, updateCity] = useState('')
  const [category, updateCategory] = useState('')
  const [img_url, updateImgUrl] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = await postDateIdea( {
      fields: {
        title: title,
        city: city,
        category: category,
        img_url: img_url
      }
    })
    props.setNewIdea(!props.newIdea)
    updateTitle('')
    updateCity('')
    updateCategory('')
    updateImgUrl('')
   
  }

  return (
   
      <form onSubmit={handleSubmit}>
    <h2 className="form_title">Submit Your Date Idea!</h2>
    <label htmlFor="Image">Image:</label>
    <input type="text" id="img_url" placeholder="URL" onChange={e => updateImgUrl(e.target.value)} value={img_url} />
    <label htmlFor="Title">Title:</label>
    <input type="text" id="Title" onChange={e => updateTitle(e.target.value)} value={title} />
    <label htmlFor="Category">Category:</label>
      <input type="text" id="Category" onChange={e => updateCategory(e.target.value)} value={category} />
      <label htmlFor="City">City:</label>
    <input type="text" id="City" onChange={e => updateCity(e.target.value)} value={city} />
    <input type="submit" value="Submit" className="create_btn"/>
  </form>
   
  )
}

export default Create



  



