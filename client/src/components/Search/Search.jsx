import React from "react"
import { Dropdown } from 'semantic-ui-react'

const Search = () => {

  const dateOptions = [
    { text: 'Biking Trails' },
    { text: 'Boat Rentals' },
    { text: 'Comedy Shows' },
    { text: 'Cooking Class' },
    { text: 'Hiking Trails' },
    { text: 'Off Off Broadway' },
    { text: 'Outdoor Dining' },
    { text: 'Outdoor Music' },
    { text: 'Picnic Spots' },
    { text: 'Pop-up Dinners' },
    { text: 'Rock Climbing' },
    { text: 'Rooftop Bars' },
    { text: 'Speakeasy' },
    { text: 'Unusual Dining' },
    { text: 'Unusual Movies' },
  ]
  // const styleLink = document.createElement("link");
  // styleLink.rel = "stylesheet";
  // styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
  // document.head.appendChild(styleLink);
return (
  <>
   <Dropdown
    placeholder='Select'
    fluid
    search
    selection
    options={dateOptions}
  />
  </>
)
}

export default Search