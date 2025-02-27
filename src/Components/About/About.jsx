import React from 'react'
import '../About/About.css';
import image from '../../assets/image_1.jpeg'

const About = () => {
  return (
    <div id="about" className="about">
        <div className="about-title"><h1>About Me</h1></div>
        <div className='about-section'>
            <div className='about-left'>
                <img src={image} alt=" "/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field.
                         Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:'50%'}}/></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width:'50%'}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:'50%'}}/></div>
                    <div className="about-skill"><p>C++</p><hr style={{width:'50%'}}/></div>
                    <div className="about-skill"><p>Data Structure</p><hr style={{width:'50%'}}/></div>
                </div>
            </div>
        </div>
            <div className="about-achievements">
                    <div className="about-achievement">
                        <h1>1+</h1>
                        <p>YEARS OF EXPERIENCE</p>
                    </div>
                    <div className="about-achievement">
                        <h1>10+</h1>
                        <p>PROJECTS COMPLETED</p>
                    </div>
                    <div className="about-achievement">
                        <h1>10+</h1>
                        <p>HAPPY CLIENTS</p>
                    </div>
            </div>
    </div>
  )
}

export default About