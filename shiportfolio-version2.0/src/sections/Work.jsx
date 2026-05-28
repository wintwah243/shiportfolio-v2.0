import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Satellite, Workflow } from 'lucide-react'

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
        {/* Web and app Development Block */}
        <div className='bg-yellow-200 p-6 rounded-2xl shadow-md hover:shadow-lg transition'>
          <div className='flex items-center gap-3 mb-2'>
            <Code2 className='text-black' size={24} />
            <h5 className='text-lg font-semibold text-black'>Web and App Development</h5>
          </div>
          <p className='text-sm leading-6 text-justify text-black'>
            I build complete web and mobile applications by working on both the frontend and backend. 
            This includes creating responsive user interfaces, integrating APIs, managing databases, 
            and deploying scalable solutions.
          </p>
        </div>

        {/* AI Agent and Automation Block */}
        <div className='bg-blue-200 p-6 rounded-2xl shadow-md hover:shadow-lg transition'>
          <div className='flex items-center gap-3 mb-2'>
            <Satellite className='text-black' size={24} />
            <h5 className='text-lg font-semibold text-black'>AI Agent and Automation</h5>
          </div>
          <p className='text-sm leading-6 text-justify text-black'>
            I build practical AI agents and automation workflows to streamline everyday tasks and
             boost efficiency. My process involves identifying repetitive manual steps, 
             designing logical paths, and using tools like n8n alongside APIs to connect 
             different services and make them run smoothly on their own.
          </p>
        </div>

        {/* UML & Diagramming Block */}
        <div className='bg-green-200 p-6 rounded-2xl shadow-md hover:shadow-lg transition'>
          <div className='flex items-center gap-3 mb-2'>
            <Workflow className='text-black' size={24} />
            <h5 className='text-lg font-semibold text-black'>System Design & UML Modeling</h5>
          </div>
          <p className='text-sm leading-6 text-justify text-black'>
            I create structured system designs using UML diagrams such as use-case, class, and 
            ER diagrams. These visual models help communicate the architecture, data flow, and functional 
            behavior of software projects, ensuring clear documentation and efficient planning.
          </p>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Work
