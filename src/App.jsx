import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Navbar/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle="OUR PROGRAM" Title="What we offer"/>
        <Programs/>
        <About/>
        <Title subTitle="Gallery" Title="Campus photos"/>
        <Campus/>
        <Title subTitle="Testimonials" Title="What Student Says"/>
        <Testimonials/>
      </div>
    </div>
  );
}

export default App;