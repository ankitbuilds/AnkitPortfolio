import React from 'react'
import './Skills.css'
import Skills_data from '../../assets/Skills_data.js'

const Skills = () => {
  return (
    <div id="skills" className="skills"  data-aos="fade-up">
        <div className='skills-title'>
            <h1>My Skills</h1>
        </div>
        <div className="skills-container">
            {Skills_data.map((skills,index)=>{
                return <img key={index} src={skills.sk_img}/>
            })}
        </div>
    </div>
  )
}

export default Skills