import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,

} from 'react-router-dom';
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Animation from './components/Springs/Photo_animation'

export default function  App() {
  return(
  <>
  <BrowserRouter>
  <Navbar></Navbar>
    <Switch className='switch'>
      <Route path='/about' component={About} />
      <Route path='/projects' component={Projects} />
      <Route path='/contact' component={Contact} />
    </Switch> 
  </BrowserRouter>
  </>
  );
}


