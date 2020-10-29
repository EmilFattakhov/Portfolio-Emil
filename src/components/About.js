import React, { useRef, useState, useEffect, useCallback } from 'react'
// import { render } from 'react-dom'
// import { useTransition, animated } from 'react-spring'
import './About.css'
// import picture1 from '../pictures/1.jpg'
// import picture2 from '../pictures/2.jpg'
// import picture3 from '../pictures/3.jpg'
// import {Carousel} from 'react-responsive-carousel'
import { render } from 'react-dom'
import { useTransition, animated, config } from 'react-spring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare, faCopyright } from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import ContactForm from './EmailJS/ContactForm'

import Chain from './Springs/Chain'
import Chain2 from './Springs/Chain2'

const slides = [
    { id: 0, url: 'https://i.imgur.com/8mTzCyT.jpg' },
    { id: 1, url: 'https://i.imgur.com/KVhntPI.jpg' },
    { id: 2, url: 'https://i.imgur.com/BdheNkM.jpg' },
    { id: 3, url: 'https://i.imgur.com/1DqjIlT.png' }
  ]
  
// window.addEventListener('scroll', function () {
//   let position = window.pageYOffset/window.innerHeight
//   console.log('division', position)
//   if (position > 0.4) {

//   }
// });


  const Animation = () => {
    const [index, set] = useState(0)
    const transitions = useTransition(slides[index], item => item.id, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: config.molasses,
    })
    useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 3500), [])
    return transitions.map(({ item, props, key }) => (
      <animated.div
        key={key}
        class="bg"
        style={{ ...props, backgroundImage: `url(${item.url})` }}
      />
    ))
  }


export default function About(){
    return(
        <>
        <div id='div-container'>
          <div className='about-text'>
            <h1>Hi, my name is Emil</h1>
            <p>I'm a Full Stack Web Developer from Vancouver, BC</p>
            <p>After over 5 years of working as Petroleum Engineer and Researcher</p>
            <p>I decided to learn programming. And I loved it!</p>
            <p>When I'm not coding I'm enjoying Hiking, Photographing, Travelling</p>
          </div>
            {/* <div id='words'> <Words/> </div> */}
          <div id='pictures'> <Animation/> </div>
        </div>
            <div className='chain1' >
              <Chain/>
            </div>
            <div className='chain2'>
              <Chain2/>
            </div>
        <div id='projects'>
          <h1> Web Development Projects</h1>
          <div className='project'>
              <div className='divider'>
                  <div className='project-screenshot1'><p></p></div>
                  <div className='project-description1'>
                    <h1>Way Home </h1>
                    <p> Application that helps owners find their lost pets. Google Maps features allow other users to point to the location of the lost animal and track it's movement.</p>
                    <h2>React | Ruby On Rails | PostgreSQL | Google API | EmailJS</h2>
                    <a href='https://github.com'><button>Github</button></a>
                    <a href='https://youtube.com'><button>Video</button></a>
                  </div>
              </div>
            </div>
            <div className='project'>
              <div className='divider'>
                  <div className='project-screenshot2'><p></p></div>
                  <div className='project-description1'>
                    <h1>Craig Auction </h1>
                    <p> Online Auction for buying or selling your car </p>
                    <h2>React | Ruby On Rails | PostgreSQL</h2>
                    <a href='https://github.com'><button>Github</button></a>
                    <a href='https://youtube.com'><button>Video</button></a>
                  </div>
              </div>
            </div>
            <div className='project'>
              <div className='divider'>
                  <div className='project-screenshot5'><p></p></div>
                  <div className='project-description1'>
                    <h1>Patatap clone</h1>
                    <p> Click the buttons for sound effects and css animation. Warning: highly addictive!</p>
                    <h2> PaperJS | JavaScript | CSS </h2>
                    <a href='https://github.com'><button>Github</button></a>
                    <a href='https://youtube.com'><button>Video</button></a>
                  </div>
              </div>
            </div>
            <div className='project'>
              <div className='divider'>
                  <div className='project-screenshot3'><p></p></div>
                  <div className='project-description1'>
                    <h1>Adventure Forum </h1>
                    <p> Forum to discuss trails and camping. Ask local experts about the trails before your hike! </p>
                    <h2>React | Ruby On Rails | PostgreSQL | Google API | EmailJS</h2>
                    <a href='https://github.com'><button>Github</button></a>
                    <a href='https://youtube.com'><button>Video</button></a>
                  </div>
              </div>
            </div>
            <div className='project'>
              <div className='divider'>
                  <div className='project-screenshot4'><p></p></div>
                  <div className='project-description1'>
                    <h1>E-shop Home Decor</h1>
                    <p> Online shop to purchase products for your home. Users can also create their own advertisements and sell products.</p>
                    <h2>React | Ruby On Rails | PostgreSQL | OmniAuth | Mailer</h2>
                    <a href='https://github.com'><button>Github</button></a>
                    <a href='https://youtube.com'><button>Video</button></a>
                  </div>
              </div>
            </div>
            <div className='project'>
              <div className='divider'>
                  <div className='project-screenshot6'><p></p></div>
                  <div className='project-description1'>
                    <h1>Simple ToDo App</h1>
                    <p> Simple ToDo App - Create New Tasks, Delete, Mark as done</p>
                    <h2>Javascript | CSS | HTML </h2>
                    <a href='https://github.com'><button>Github</button></a>
                    <a href='https://youtube.com'><button>Video</button></a>
                  </div>
              </div>
            </div>
            <div id='contact'>
              <h1> Contact Me</h1>
                  <div className='icons'>
                  <div><a href='https://www.linkedin.com/in/emil-fattakhov'><FontAwesomeIcon icon={faLinkedin} size={'2x'}/></a></div>
                  <div><a href='https://github.com/EmilFattakhov'><FontAwesomeIcon icon={faGithub} size={'2x'} /></a></div>
                  <div><a href='mailto: emil.e.fattakhov@gmail.com'><FontAwesomeIcon icon={faEnvelopeSquare} size={'2x'} /></a></div>
                  <div><a href='https://www.instagram.com/emilios02/'><FontAwesomeIcon icon={faInstagram} size={'2x'} /></a>  </div>
                  </div>
                  
            </div>
            <div className='email-form'>
              <ContactForm />
            </div>
            <div className='credentials'>
              <p> <FontAwesomeIcon icon={faCopyright} size={'xs'} /> 2018 - 2020 Emil Fattakhov. All right reserved. </p>
            </div>
        </div>
        </> 
    )
}
