import React from 'react'
import react_svg from "../../assets/react.svg"
import "./job_card.scss"
const Job_card = ({title}) => {
  return (
    <div className='job_card'>
      <h4 className='company_name'>GovExec</h4>
      <h1>full stack laravel developer</h1>
      <p>Full time - from $60,000</p>
      <div className="tags_group">
        <span className="tag">Frontend</span>
        <span className="tag">Backend</span>
        <span className="tag">API</span>
      </div>
      <div className="img_box">
        <img src={react_svg} alt="company logo" />
      </div>
    </div>
  )
}

export default Job_card
