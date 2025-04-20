import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Tech from './sections/Tech'
import AboutMe from './sections/AboutMe'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

const App = () => {
  return (
    <div className='mb-80'>
        <Navbar />
        <Hero />
        <Tech />
        <AboutMe />
        <Projects />
        <Contact />
    </div>
  )
}

export default App