import React, { useState, useRef } from 'react'
import { render } from 'react-dom'
import { useTransition, useSpring, useChain, config } from 'react-spring'
import { Container, Item } from './ChainStyle'
import data from './ChainData'
import './Chain.css'




export default function Chain() {
  const [open, set] = useState(false)
  let projects = document.getElementsByClassName('projects')
  console.log('projects', projects);

  window.addEventListener('scroll', function () {
    let position = window.pageYOffset/window.innerHeight
    console.log('division', position)
    if (position > 0.4 && position < 1)  {
      set(true);
    }
    if (position <0.4) {
      set(false);
    }

  });

  const openChain = () => {
    set(open => !open);
  }

  const springRef = useRef()
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { size: '10vw', background: '#FAFFFD' },
    to: { size: open ? '10%' : '100%', background: open ? '#FAFFFD' : '#FAFFFD' }
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
      <Container style={{ ...rest,  width: '100vw', height: '10vh'}} onClick={ openChain }>
        {transitions.map(({ item, key, props }) => (
          <Item className='item' key={key} style={{ ...props, background: item.css }}><div className='text'><h1 className='text-h1'>{item.text}</h1></div>  </Item>
        ))}
       <div className='div-text'>Languages and Frameworks</div> 
      </Container>
    </>
  )
}