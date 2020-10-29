import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

function NavBar() {
  return(
      <React.Fragment className='fragment'>
        <div className='grid'>
            <div className='grid1'><h1>Emil Fattakhov</h1></div>
            <div className='grid2'>
                <nav className='nav'>
                <div className='nav-link'>  <a href='#div-container'> <button className='linkbutton'> About me </button></a></div>
                <div className='nav-link'>  <a href='#projects'><button className='linkbutton'> Projects  </button></a></div>
                <div className='nav-link'>  <a href='#contact'><button className='linkbutton'> Contact me  </button></a></div>
                <div className='nav-link'>  <a href='https://www.linkedin.com/in/emil-fattakhov'> <FontAwesomeIcon icon={faLinkedin} size="1vw"/>  </a> </div>
                <div className='nav-link'>  <a href='https://github.com/EmilFattakhov'> <FontAwesomeIcon icon={faGithub} size="1vw"/> </a></div>
                <div className='nav-link'>  <a href='mailto: emil.e.fattakhov@gmail.com'> <FontAwesomeIcon icon={faEnvelopeSquare} size="1vw"/> </a></div>
            </nav> 
            </div>
        </div>
        
      </ React.Fragment>
  )
}

export default NavBar
