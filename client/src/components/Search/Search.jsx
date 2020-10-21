import React from "react"
import Select from 'react-select'
import "./Search.css";


const Search = ({ options, onChange }) => {

  return (
    <div className="search">
      <h1 className="choose">Choose a Date Idea</h1>
      <Select options={options} className='searchsize' onChange={onChange}/>
     
    </div>
  )

}

export default Search
