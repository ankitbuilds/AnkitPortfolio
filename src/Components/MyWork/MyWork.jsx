import React from 'react'
import './MyWork.css'
import Work_data from '../../assets/Work_data.js'

const MyWork = () => {
  return (
    <div id="work" className="work">
        <div className='work-title'>
            <h1>My Work</h1>
        </div>
        <div className="work-container">
            {Work_data.map((work,index)=>{
                return <img key={index} src={work.w_img}/>
            })}
        </div>
        <div className="show-more">
            <p>Show More</p>

        </div>
    </div>
  )
}

export default MyWork