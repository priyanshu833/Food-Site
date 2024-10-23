import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import Banner from '../images/banner.jpeg'
import '../styles/Homestyle.css'

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{backgroundImage: `url(${Banner})`}}>
        <div className="homeContainer">
          <h1>Food Website</h1>
          <p>Best Food In India</p>
          <Link to='/menu'><button>Order Now</button></Link>
          </div>
        </div>
     </Layout>
  )
}

export default Home
