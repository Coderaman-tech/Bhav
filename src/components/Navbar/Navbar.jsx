import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className='n-wrapper' >
      <div className='n-left'>
        <div className="n-name">Bhav</div>
        <span>toggle</span>
      </div>
      <div className='n-right'>
        <div className="n-list">
            {/* listStyleType:'none' remove dot on the list item */}
            <ul style={{listStyleType:'none', color:'white'}}>
                <li>Home</li>
                <li>Services</li>
                <li>Experiences</li>
                <li>Portfolio</li>
                <li>Testimonials</li>
            </ul>
        </div>
        <button className="button n-button">
            Login
        </button>
      </div>

    </div>
  )
}

export default Navbar
