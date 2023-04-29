import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='n-wrapper' >
      <div className='n-left'>
        <div className="n-name">Bhav</div>
        {/* <span>toggle</span> */}
      </div>
      <div className='n-right'>
        <div className="n-list">
            {/* listStyleType:'none' remove dot on the list item */}
            <ul style={{listStyleType:'none', color:'white'}}>
                <Link to='/'><li>Home</li></Link>
                <li>Services</li>
                {/* <li>Experiences</li>
                <li>Portfolio</li> */}
                <li>Testimonials</li>
            </ul>
        </div>
        <Link to='/login'>
        <button className="button n-button">
            Login
        </button>
        </Link>
        
       
        
       
      </div>

    </div>
  )
}

export default Navbar
