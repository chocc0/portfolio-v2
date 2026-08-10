import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Navbar from './components/Navbar'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Background from './components/Background'

function App() {
  return (
    <div className='h-screen w-screen items-stretch'>
      <Navbar/>
      <div className='px-[100px] py-[80px] flex flex-col overflow-scroll w-full h-screen items-end'>
        <div className='bg-amber-700 min-h-screen'></div>
        <About/>
        <Experience />
        <Skills/>
        <Contact/>
      </div>
      <Background/>
    </div>
  )
}

export default App
