import React from 'react'
import '../Hero/Hero.css';

const Hero = () => {
  return (
    <div id="home" className="hero">
        <img></img>
        <h1>I'm Ankit Mishra, frontend developer</h1>
        <p>I am a frontend developer from California,
             USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.</p>
        <div className="hero-action">
            <div className="connect-me">Connect With Me</div>
            <div className="my-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero