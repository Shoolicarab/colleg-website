import React from 'react'
import './About.css'
import about from '../../../Asset/about.png'
import playicon from '../../../Asset/playicon.png'
function About() {
  return (
    <div className='About'>
     <div className="About-left">
      <img src={about} alt="" />
      <img src={playicon }alt="" />
        </div>  
       <div className="About-right">
       <h3>ABOUT COLLEGE</h3>
       <h2>nurturing Tommorow's leaders Today</h2>
       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Eligendi ipsum repellendus illo necessitatibus rerum ut enim dolorum dicta quisquam quaerat.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Numquam, sunt!</p>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Quibusdam, nobis veniam.</p>

        </div> 
        </div>
  )
}

export default About