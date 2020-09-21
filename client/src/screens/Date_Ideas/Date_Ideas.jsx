import React from 'react'
// import { getAllUsers } from '../services/date_ideas'

 
function Date_Ideas(props) {
  const { dateCategory } = props
console.log(props)
  
  return (
    <div>
      {/* {dateIdeas.map(date_idea => (
        <div>
        <img src={`${date_idea.img_url}`} className='idea_pics'/>
          <h1>{date_idea.title}</h1>
          <h2>{date_idea.price_exp} | {date_idea.user}, {date_idea.age}</h2>
     </div>
      ))} */}
    </div>
  )
}

export default Date_Ideas
