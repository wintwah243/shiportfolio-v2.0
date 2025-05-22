import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Palette } from 'lucide-react'

const Work = () => {
  return (
    <motion.section
      id='work'
      className='container mx-auto px-8 py-16 mt-20'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h4 className='section-title mb-10'>What I do?</h4>

      <motion.div
        className='flex flex-col gap-8'
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Web Development Block */}
        <div className='bg-yellow-200 p-6 rounded-2xl shadow-md hover:shadow-lg transition'>
          <div className='flex items-center gap-3 mb-2'>
            <Code2 className='text-black' size={24} />
            <h5 className='text-lg font-semibold text-black'>Full-Stack Web Development</h5>
          </div>
          <p className='text-sm leading-6 text-justify text-black'>
            I build complete web applications by working on both the frontend and backend. 
            This includes creating responsive user interfaces, integrating APIs, managing databases, 
            and deploying scalable solutions.
          </p>
        </div>

        {/* UI Design Block */}
        <div className='bg-blue-200 p-6 rounded-2xl shadow-md hover:shadow-lg transition'>
          <div className='flex items-center gap-3 mb-2'>
            <Palette className='text-black' size={24} />
            <h5 className='text-lg font-semibold text-black'>UI Design & Prototyping</h5>
          </div>
          <p className='text-sm leading-6 text-justify text-black'>
            I design interactive and visually appealing UI prototypes for web and mobile applications. 
            My process involves understanding user needs, crafting intuitive layouts, and using tools 
            like Figma.
          </p>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Work
