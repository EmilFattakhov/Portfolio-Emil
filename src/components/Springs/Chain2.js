import React, { useState, useRef } from 'react'
import { render } from 'react-dom'
import { useTransition, useSpring, useChain, config } from 'react-spring'
import { Container, Item } from './ChainStyle2'
import data from './ChainData2'
import './Chain2.css'

export default function Chain() {
  const [open, set] = useState(false)

  let projects = document.getElementsByClassName('projects')
  window.addEventListener('scroll', function () {
    let position = window.pageYOffset/window.innerHeight
    console.log('division', position)
    if (position > 0.6 && position < 1)  {
      set(true);
    }
    if (position <0.6) {
      set(false);
    }

  });

  const springRef = useRef()
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { size: '10vw', background: '#342E37' },
    to: { size: open ? '45vw' : '10vw', background: open ? '#342E37' : '#342E37' }
  })

  const transRef = useRef()
  const transitions = useTransition(open ? data : [], item => item.name, {
    ref: transRef,
    unique: true,
    trail: 400 / data.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' }
  })

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.6])

  return (
    <>
      <Container style={{ ...rest, width: '100vw', height: '10vh' }} onClick={() => set(open => !open)}>
        {transitions.map(({ item, key, props }) => (
          <Item className='item' key={key} style={{ ...props, background: item.css }}><div className='text2'><h1>{item.text}</h1><p>{item.college}</p></div>  </Item>
        ))}
       <div className='div-text2'>Education</div> 
      </Container>
    </>
  )
}