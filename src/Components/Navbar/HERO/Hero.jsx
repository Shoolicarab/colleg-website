import React from 'react'
import './Hero.css'
import  dark from '../../../../Asset/dark.png'

const Hero = () => {
  return (
    <div className='Hero container'>
     <div className="hero-text">
      <h1>we Ensure better eduction for a better world</h1>
       <p>our cutting-edge curriculum is deigned to empower students
        with the knowlage,skills, and experineces ro excel in 
        the dynamic field of education</p>
        <button className='btn'>Explore more <img src={dark} 
        alt=''/></button>
</div>
    </div>
  )
}

export default Hero