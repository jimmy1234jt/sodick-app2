import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css";
import '../Styles/Client.css'
import Chevron from "../Assets/Chevron.jfif"
import Total from  "../Assets/total.png"
import Mobil from "../Assets/Mobil.png"
import NNPC from "../Assets/NNPC.png"
import Shell from "../Assets/Shell.png"

function Client() {
  return (
    <div className='Client'>
      <AliceCarousel >
        <div className='slider'>
          <img src={ Chevron } className='sliderImg' alt='logo'/>
          <img src={ Total } className='sliderImg' alt='logo'/>
          <img src={ Mobil } className='sliderImg' alt='logo'/>
          <img src={ NNPC } className='sliderImg' alt='logo'/>
          <img src={ Shell } className='sliderImg' alt='logo'/>
        </div>
      </AliceCarousel>
    </div>
  )
}

export default Client