import React, {useState} from 'react'
import '../Hero/Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import profile from '../../assets/pic4.png'

const Hero = () => {
  const [menu, setMenu]=useState("contact");
  const handleClick = () => {
    window.open('/Ankit-Mishra-Resume.pdf', '_blank');
  };
  return (
    <div id="home" className="hero"  data-aos="fade-up">
        <img src={profile}/>
        <h1>I'm <span>Ankit Mishra</span>,<br/> Software Engineer</h1>
        <p>Hi, I'm a software engineer with 1.5 years of experience building reliable and scalable web applications. I specialize in HTML, CSS, JS, React JS, Node JS, Express JS, Mongo DB and I enjoy turning complex problems into simple, efficient code. </p>
        <div className="hero-action">
            <div className="connect-me" ><AnchorLink className='anchor-link' href="#contact" offset={50}><span onClick={()=>setMenu("contact")}>Connect With Me</span></AnchorLink></div>
            <div className="my-resume" onClick={handleClick}>My Resume</div>
        </div>
    </div>
  )
}

export default Hero