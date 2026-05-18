import React from 'react'
import './MyWork.css'
import Work_data from '../../assets/Work_data.js'

const MyWork = () => {
  return (
    <div id="work" className="work" data-aos="fade-up">
      <div className='work-title'>
        <h1>My Work</h1>
      </div>
      <div className="work-container">
        {Work_data.map((work, index) => {
          return (
            <div key={index} className="work-card">
              <img src={work.w_img} alt={work.w_name} className="work-image" />
              <div className="work-info">
                <h3>{work.w_name}</h3>
                <p>{work.w_desc}</p>
                <a href={work.w_link} target="_blank" rel="noopener noreferrer">
                  <button className="work-btn">View Project</button>
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyWork