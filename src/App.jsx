import { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import './App.css'
import Navbar from './component/Navbar/Navbar.Component';
import HeroView from './views/HeroView/HeroView';
import AboutView from './views/AboutView/AboutView';
import ProjectView from './views/ProjectView/ProjectView';


function App() {

  return (
  <div className='h-full flex flex-col'>
    <Navbar/>
    <div className='flex-grow px-60'>
      <HeroView/>
    </div>
    <div style={{ background:'rgb(239 246 255)'}} className='flex-grow px-60 bg-blue-50'>
      <AboutView/>
    </div>
    <div className='flex-grow px-60'>
      <ProjectView/>
    </div>
    
  </div>
  )
}

export default App
