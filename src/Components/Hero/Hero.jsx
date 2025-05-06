import React, {useState} from 'react'
import '../Hero/Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import profile from '../../assets/pic1.png'

const Hero = () => {
  const [menu, setMenu]=useState("contact");
  const handleClick = () => {
    window.open('/Ankit-Resume.pdf', '_blank');
  };
  return (
    <div id="home" className="hero">
        <img src={profile}/>
        <h1>I'm Ankit Mishra, frontend developer</h1>
        <p>I am a frontend developer from California,
             USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.</p>
        <div className="hero-action">
            <div className="connect-me" ><AnchorLink className='anchor-link' href="#contact" offset={50}><span onClick={()=>setMenu("contact")}>Connect With Me</span></AnchorLink></div>
            <div className="my-resume" onClick={handleClick}>My Resume</div>
        </div>
    </div>
  )
}

export default Hero