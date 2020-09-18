
import React from "react"
import "./Home.css";
import Layout from "../../components/shared/Layout/Layout"
import Search from "../../components/Search/Search"



function Home() {
  

  return (
    <div className='background1'>
    <Layout>
        <h1 className='title'>DATING SHOULDN'T SUCK</h1>
      <Search/>


</Layout>
</div>
 )
}

export default Home;
