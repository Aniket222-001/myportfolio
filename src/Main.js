import React from 'react'
import Navbar from './Components/Navbar';
import Aboutme from './Components/Aboutme';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Contactme from './Components/Contactme';

const Main = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
        <Aboutme/>
        <Skills/>
        <Project/>
        <Contactme/>
    </div>
  )
}

export default Main
