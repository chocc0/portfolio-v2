import { useState } from 'react'
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
      <div className='px-[100px] py-[80px] flex flex-col overflow-scroll w-full h-screen items-end snap-y gap-30'>
        <div className='bg-amber-700 min-h-screen snap-center'></div>
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
