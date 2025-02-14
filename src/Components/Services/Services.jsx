import React from 'react'
import './Services.css'
import Services_data from '../../assets/Service_data.js'

const Services = () => {
  return (
    <div className="services">
        <div className="services-title">
            <h1>My Services</h1>

        </div>
        <div className="services-container">
            {Services_data.map((Services,index)=>{
                return <div key={index} className="services-format">
                    <h3>{Services.s_no}</h3>
                    <h2>{Services.s_name}</h2>
                    <p>{Services.s_desc}</p>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <img></img>
                    </div>

                    
                </div>
            })}

        </div>
    </div>
  )
}

export default Services