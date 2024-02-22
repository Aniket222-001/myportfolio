import React from 'react'
import { useState } from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='Nav1'>
         <p>Portfolio</p>
      </div>
      
      <div className='Nav2'>
        <Link to='aboutme' className='nav3' activeClass="active"  
         spy={true} 
         smooth={true} 
         offset={-15} 
         duration={500}> About me</Link>
        <Link to='Skills' className='nav3' 
        activeClass="active" 
        spy={true} 
        smooth={true} 
        offset={-50} 
        duration={500}>Skills</Link>
        <Link to='Project' className='nav3'activeClass="active" 
         spy={true} 
         smooth={true} 
         offset={-50} 
         duration={500}>Project</Link>
        <Link to='Contact' className='nav3' activeClass="active"  
         spy={true} 
         smooth={true} 
         offset={-15} 
         duration={500}>Contact</Link>
        
      </div>
    </div>
  )
}

export default Navbar
