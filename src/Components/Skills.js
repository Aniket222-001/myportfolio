import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div className='Container3' id='Skills'>
      <div className='skills-img-box'>
          <img src={require('../Images/icons8-html-144.png')} alt="" className='img3' />

          <img src={require('../Images/icons8-css-144.png')} alt="" className='img3' />

          <img src={require('../Images/icons8-javascript-144.png')} alt="" className='img3'  />

          <img src={require('../Images/icons8-node-js-144.png')} alt="" className='img3'  />

          <img src={require('../Images/icons8-react-160.png')} alt="" className='img3' />

          <img src={require('../Images/icons8-database-100.png')} alt="" className='img3' />

          <img src={require('../Images/icons8-c-144.png')} alt="" className='img3'/>

          <img src={require('../Images/icons8-cloud-computing-64.png')} alt="" className='img3' />
          <img src={require('../Images/icons8-tailwind-css-144.png')} alt="" className='img3'/>
      </div>
      <div className='skills-data-box'>
        <div className='skills-box'>
            <h3>Frontend Developer</h3>
            <p>I'm Expert in HTML, CSS, Javascript, React</p>
        </div>
        <div className='skills-box'>
            <h3>Backend Developer</h3>
            <p>MongoDb Node js Postman Express js
            </p>
        </div>
        <div className='skills-box'>
            <h3>UI Designer</h3>
            <p>Tailwind Bootstrap</p>
        </div>
      </div>
    </div>
  )
}

export default Skills
