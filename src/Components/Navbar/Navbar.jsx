import React, {useState} from 'react'
import '../Navbar/Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menu, setMenu]=useState("home");
  return (
    <div className="Navbar">
      <ul className="Nav-menu">
        <li><AnchorLink className='anchor-link'href="#home" offset={50}><p onClick={()=>setMenu("home")}>Home</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' href="#about" offset={50}><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' href="#services" offset={50}><p onClick={()=>setMenu("services")}>Services</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' href='#work' offset={50}><p onClick={()=>setMenu("portfolio")}>My Work</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' href="#contact" offset={50}><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink></li>
      </ul>
      <div className="connect">Connect</div>
    </div>
  )
}

export default Navbar