import React from 'react'
import '../About/About.css';
import image from '../../assets/image_1.jpeg'

const About = () => {
  return (
    <div id="about" className="about"  data-aos="fade-up">
        <div className="about-title"><h1>About Me</h1></div>
        <div className='about-section'>
            {/* <div className='about-left'>
                <img src={image} alt=" "/>
            </div> */}
            <div className="about-right">
                <div className="about-para">
                    <p>I have Developed and implemented user interface components using HTML, CSS, and JavaScript, React JS, ensuring responsive design.
                    Collaborated with UI/UX designers to translate design mockups into high-quality code, enhancing the overall user experience.
                    Optimized web applications for maximum speed and scalability, improving load times and performance.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:'40%'}}/>80%</div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width:'35%'}}/>70%</div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:'45%'}}/>85%</div>
                    <div className="about-skill"><p>C++</p><hr style={{width:'40%'}}/>80%</div>
                    <div className="about-skill"><p>Data Structure</p><hr style={{width:'35%'}}/>70%</div>
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