import React from 'react'
import './Project.css'

const Project = () => {
  return (
    <div className='prj-container' id='Project'>
      <div className='prj-box1'>
          <div>
            <img className='prj-img' src={require('../Images/Capture-1.jpg')} alt="" />
          </div>
          <div className='prj-info'>
            <h3>Movie Mania</h3>
            <p>This website is build using react Node js Mongo db and Apis</p>
          </div>
          <div>
            <button><a className='prj-btn1' href="">Demo</a></button>
            <button><a className='prj-btn1' href="">Source</a></button>
          </div>
      </div>
      <div className='prj-box1'>
          <div>
            <img className='prj-img' src={require('../Images/maxresdefault.jpg')} alt="" />
          </div>
          <div className='prj-info'>
            <h3>Movie Mania</h3>
            <p>This website is build using react Node js Mongo db and Apis</p>
          </div>
          <div>
            <button><a className='prj-btn1' href="">Demo</a></button>
            <button><a className='prj-btn1' href="">Source</a></button>
          </div>
      </div>
      <div className='prj-box1'>
          <div>
            <img className='prj-img' src={require('../Images/full-stack-development.png')} />
          </div>
          <div className='prj-info'>
            <h3>Movie Mania</h3>
            <p>This website is build using react Node js Mongo db and Apis</p>
          </div>
          <div>
            <button><a className='prj-btn1' href="">Demo</a></button>
            <button><a className='prj-btn1' href="">Source</a></button>
          </div>
      </div>
    </div>
  )
}

export default Project
