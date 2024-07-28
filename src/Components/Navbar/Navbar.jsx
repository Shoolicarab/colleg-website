import React from 'react'
 import './Navbar.css'
import LOGO from '../../../Asset/LOGO.png'



function Navbar() {
  return (

 <div>
   <nav className='container'>
        <img  src={LOGO} alt="" className='LOGO'/>
    <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Courses</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li><botton className='btn'>Contact Us</botton></li>
    
    </ul>
  </nav>
  </div> 
  )
}

export default Navbar