import React, { useEffect, useState } from 'react';
import './Navbar.css';
import LOGO from '../../../Asset/LOGO.png';

const Navbar = () => {
  // Correct the state declaration syntax
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };

    // Add the event listener for scroll
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={LOGO} alt="Logo" className='LOGO' />
      <ul>
        <li>Home</li>
        <li>Programs</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;