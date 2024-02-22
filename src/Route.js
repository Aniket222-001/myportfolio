import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Aboutme from './Components/Aboutme';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Contactme from './Components/Contactme';

const Route = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar/>}/>  
        <Route path='/Home' element={<Home/>}/>
        <Route path='/aboutme' element={<Aboutme/>}/>
        <Route path='/Skills' element={<Skills/>}/>
        <Route path='/Project' element={<Project/>}/>
        <Route path='/Contactme' element={<Contactme/>}/>   
      </Routes>
    </div>
  )
}

export default Route
