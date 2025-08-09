import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Tech from './sections/Tech'
import AboutMe from './sections/AboutMe'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Work from './sections/Work'
import SprinkleCursor from './utils/SprinkleCursor'

const App = () => {
  return (
    <div id='portfolio-wall' className='mb-80'>
      <SprinkleCursor />
        <Navbar />
        <Hero />
        <AboutMe />
        <Tech />
        <Work />
        <Projects />
        <Contact />
    </div>
  )
}

export default App
