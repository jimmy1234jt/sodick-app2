import React from 'react'
import Banner from '../Assets/Image3.jpeg'
import '../Styles/Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${Banner})`}}>
      <div className='homeBanner'>
        <h1> Welcome </h1>
        <h1>To</h1>
        <h1>Sodick Well Services</h1> 
        <Link to="/services">
          <button> More Info </button>
        </Link>
        
      </div>
    </div>
  )
}

export default Home