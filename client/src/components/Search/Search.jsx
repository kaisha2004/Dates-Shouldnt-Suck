import React, { useState } from "react"
import { Link } from "react-router-dom"
import MainContainer from "../../container/MainContainer"
import Date_Ideas from "../../screens/Date_Ideas/Date_Ideas"
import Select from 'react-select'
import "./Search.css";


const Search = ({ options, onChange }) => {

  

  return (
    <div className="search">
      <h1 className="choose">Choose a Date Idea</h1>
      <Select options={options} className='searchsize' onChange={onChange}/>
     
    </div>
  )
  // const [selectTerm, updateSelectTerm] = useState('')

  
  // const handleSelect = (e) => {
  //   updateSelectTerm(e.target.value)
  // }
  
  // return (
  //   <>
  //     <select className="ui dropdown"  onChange={handleSelect}>
  //       <option value=''>Select Date Idea</option>
  //       <option value="Bike Trails">Biking Trails</option>
  //       <option value='Boat Rentals'>Boat Rentals</option>
  //       <option value='Comedy Shows'>Comedy Shows</option>
  //       <option value='Cooking Class'>Cooking Class</option>
  //       <option value='Drive-Ins'>Drive-Ins</option>
  //       <option value='Outdoor Music'>Outdoor Music</option>
  //       <option value='Picnic Spots'>Picnic Spots</option>
  //       <option value='Rooftop Bars'>Rooftop Bars</option>
  //     </select>
      
  //     <Date_Ideas selectTerm={selectTerm} />
  //     <Link to="/dateideas" >
  //       <button onClick={handleSelect}>Select</button>
  //     </Link>
  //   </>
  // )
}

export default Search
