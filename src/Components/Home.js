import React from 'react'
import './Home.css'
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  return (
    <div className='Container' id='home'>
      <div className='box1'>
        <h1>
        <Typewriter words={[`Hi , I'm Aniket`]} delaySpeed={5000}>
        </Typewriter>   
        </h1>
        <p className='txt2'><span><Typewriter words={[`I m full stack devloper with lots of experience in React and Node js.`
        ,'React out to me to  learn more and hire me']}
        delaySpeed={1000}>
        </Typewriter>
        </span>        
        </p>
        <button><a  className='btn1' href="https://drive.google.com/file/d/1G5_w-7g_CarlY1Or8Zk-KfOACvPVeVTJ/view?usp=drive_link" 
        target="_blank" >
          Resume</a></button>
      </div>
      <div className='box2'>
         <img src={require('../Images/img1.jpg')} alt="" className='img1' />
      </div>
    </div>
  )
}

export default Home
