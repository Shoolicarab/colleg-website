import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Navbar/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
function App() {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <div className="container">
      <Title subTitle=' OUR PROGRAM' Title='What we offer'/>
     <Programs/>
     <About/>
    
     </div>
   
      </div>
  )
}

export default App