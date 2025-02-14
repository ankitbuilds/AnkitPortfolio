import React from 'react'
import '../Navbar/Navbar.css';

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul className="Nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="connect">Connect</div>
    </div>
  )
}

export default Navbar