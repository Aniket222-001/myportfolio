import React from 'react'
import './About.css'

const Aboutme = () => {
  return (
    <div className='abt-Container2' id='aboutme'>
      <div className='abt-box1'>
          <img src={require('../Images/img2.jpg')} alt="" className='abt-img1'  />
      </div>
      <div className='abt-box2'>
        <div className='abt-box3'>
            <h3>Frontend Developer</h3>
            <p>I'm frontend devloper with experience in building
                 responsive and optimized site</p>
        </div>
        <div className='abt-box3'>
            <h3>Backend Developer</h3>
            <p>I have experience devloping fast and optimized backend systems
                ans Apis
            </p>
        </div>
        <div className='abt-box3'>
            <h3>UI Designer</h3>
            <p>I have designed multiple landing pages and have created design system as well</p>
        </div>
      </div>
    </div>
  )
}

export default Aboutme
