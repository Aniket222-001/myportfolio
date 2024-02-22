import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='Footer-container' id='Contact'>
      <div className='Footer-box1'>
          <h1>Contact</h1>
          <h3>Feel free to reach out</h3>
      </div>
      <div className='Footer-box2'>
         <div className='Footer-box3'>
            <img src={require('../Images/gmail.png')} alt="" className='Footer-img' />
            <a href="AniketkushwahaDtu0408@gmail.com" target="_blank" className='Footer-link'>Aniketkushwaha0408@gmail.com</a>
         </div>
         <div className='Footer-box3'>  
            <img src={require('../Images/linkedin.png')} alt="" className='Footer-img' />
            <a href="linkedin.com/in/aniket-kushwaha-614996282" target="_blank" className='Footer-link'>Linkedin</a>
         </div>
         <div className='Footer-box3'>
            <img src={require('../Images/github.png')} alt="" className='Footer-img'/>
            <a href='https://github.com/Aniket222-001/Resume-Projects' target="_blank" className='Footer-link'>Github</a>
         </div>
      </div>
    </div>
  )
}

export default Footer
