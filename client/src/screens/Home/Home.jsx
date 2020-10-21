
import React, {useState} from "react"
import {  useHistory, Switch, Route } from "react-router-dom"
import "./Home.css";
import Search from "../../components/Search/Search"
import Date_Ideas from "../../screens/Date_Ideas/Date_Ideas"

const options = [
  { label: 'Bike Trails', value:'Bike Trails' },
  { label: 'Boat Bars', value:'Boat Bars' },
  { label: 'Water Sports', value:'Water Sports' },
  { label: 'Cooking Class', value:'Cooking Class' },
  { label: 'Drive In', value:'Drive In' },
  { label: 'Picnic Spots', value:'Picnic Spots' },
  {label: 'Rooftops', value:'Rooftops'}
  
]




function Home(currentUser) {
  const [term, setTerm] = useState({})
  const [showSearch, setShowSearch] = useState(true)

  const history = useHistory()

  function onChangeInput(value) {
    console.log(value)
    setTerm(value)
    history.push("/dateideas")
    setShowSearch(false)
    
  }

 


  return (
    
    <div className='background1'>
      <div className='searchdiv'> 
        <Search options={options} onChange={onChangeInput} /> 
       </div>
      <Switch>
      <Route path="/dateideas">
        <Date_Ideas  currentUser={currentUser} term={term} />
        </Route>
        
        </Switch>
      </div>
       
      
     
      
      
      
       


 )
}

export default Home;
