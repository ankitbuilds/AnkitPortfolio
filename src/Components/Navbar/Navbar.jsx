import React, {useState,useRef} from 'react'
import '../Navbar/Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu.png'
import menu_close from '../../assets/close.png'

const Navbar = () => {
  const [menu, setMenu]=useState("home");
  const menuRef=useRef();

  const openMenu=()=>{
    menuRef.current.style.right="0";
  }
  const closeMenu=()=>{
    menuRef.current.style.right="-350px";
  }
  return (
    <div className="Navbar">
      <img src={menu_open} onClick={openMenu} alt="" width="15px" height="15px" className="nav-mob-open"/>
      <ul ref={menuRef} className="Nav-menu">
        <img src={menu_close} onClick={closeMenu} className="nav-mob-close" alt="" width="15px" height="15px"/>
        <li><AnchorLink className='anchor-link'href="#home" offset={50}><p onClick={()=>setMenu("home")}>Home</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' href="#about" offset={50}><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink></li>
        {/* <li><AnchorLink className='anchor-link' href="#services" offset={50}><p onClick={()=>setMenu("services")}>Services</p></AnchorLink></li> */}
        <li><AnchorLink className='anchor-link' href='#work' offset={50}><p onClick={()=>setMenu("portfolio")}>My Work</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' href="#skills" offset={50}><p onClick={()=>setMenu("skills")}>Skills</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' href="#contact" offset={50}><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink></li>
        
      </ul>
      <div className="connect"><AnchorLink className='anchor-link' href="#contact" offset={50}><span onClick={()=>setMenu("contact")}>Connect</span></AnchorLink></div>
    </div>
  )
}

export default Navbar