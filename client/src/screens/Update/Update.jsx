import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { getAllDateIdeas, putDateIdea, getOneDateIdea, postDateIdea, deleteDateIdea } from '../../services/date_ideas';
import "./Update.css"

function Update(props) {
  const [dateIdea, setDateIdea] = useState({
    img_url: "",
    title: "",
    city: "",
    category: "",
  });

  const [isUpdated, setIsUpdated] = useState(false);
  const [isDateIdeaDeleted, setIsDateIdeaDeleted] = useState(false);
  const [imagePath, updImagePath] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchDateIdea = async () => {
      const data = await getOneDateIdea(id);
      setDateIdea(data);
    };
    fetchDateIdea();
  }, [id]);

  useEffect(() => {
    try {
      updImagePath(require(`../../photos/${dateIdea.img_url}`));
    } catch (err) {
      updImagePath(require("../../photos/noimg.jpg"));
    }
  }, [dateIdea]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDateIdea({
      ...dateIdea,
      [name]: value,
    });
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    const deleted = await deleteDateIdea(dateIdea.id);
    if (deleted) {
      setIsDateIdeaDeleted(!isDateIdeaDeleted);
    }
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedDateIdea = await putDateIdea(id, dateIdea);
    setIsUpdated(updatedDateIdea);
  };

  if (isUpdated) {
    return <Redirect to={"/dateideas"} />;
  }

  if (isDateIdeaDeleted) {
    return <Redirect to={"/dateideas"} />;
  }

  return (
    <section className="editsection">
      <div className="idea-edit">
        <h1 className="edittitle">Edit Your Post!</h1>
        <div className="img-container">
          {dateIdea.img_url.length > 0 && (
            <img
              className="idea-image"
              src={dateIdea.img_url.startsWith("http") ? dateIdea.img_url : imagePath}
              alt={dateIdea.title}
            />
          )}
        </div>
        <form className="edit-form">
          <label htmlFor="img_url">
            ImageURL:
            <input className='updateinput'
              className="edit-img-link"
              placeholder="Img Link"
              value={dateIdea.img_url}
              name="imgURL"
              required
              onChange={handleChange}
            />
          </label>

          <label htmlFor="title">
            Title:
            <input className='updateinput'
              className="input-title"
              placeholder="Title"
              name="title"
              value={dateIdea.title}
              required
              autoFocus
              onChange={handleChange}
            />
          </label>

          <label htmlFor="city">
            City:
            <input className='updateinput'
              className="input-city"
              placeholder="City Name"
              name="city"
              value={dateIdea.city}
              required
              onChange={handleChange}
            />
          </label>

          <label htmlFor="category">
            Category:
            <input className='updateinput'
              className="input-category"
              placeholder="Category Name"
              name="category"
              value={dateIdea.category}
              required
              onChange={handleChange}
            />
          </label>

          <div className="idea-edit-buttons">
            <button className="edit-button" onClick={handleSubmit}>
              EDIT
            </button>
            <button className="delete-button" onClick={handleDelete}>
              DELETE
            </button>
          </div>
          </form>
        </div>
      
    </section>
  )
}

export default Update
