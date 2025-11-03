import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Tech from './sections/Tech'
import AboutMe from './sections/AboutMe'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Work from './sections/Work'
import SprinkleCursor from './utils/SprinkleCursor'
import Community from './sections/Community'

const App = () => {
  return (
    <div id='portfolio-wall' className='mb-80'>
      <SprinkleCursor />
        <Navbar />
        <Hero />
        <AboutMe />
        <Tech />
       <Community />
        <Work />
        <Projects />
        <Contact />
    </div>
  )
}

export default App
