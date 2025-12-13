import React from 'react'
import { motion } from 'framer-motion'
import ABOUTMELOGO from '../assets/images/mypic.jpg'
import { ABOUT_ME } from '../utils/data'

const AboutMe = () => {
  return (
    <motion.section
      id='about'
      className='container mx-auto px-8 py-16 mt-20'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h4 className='block lg:hidden w-[200px] section-title text-left mb-16'>
        About Me
      </h4>

      <div className='flex flex-col lg:flex-row gap-16 items-start justify-between'>
        
        {/* ---- IMAGE ---- */}
        <motion.div
          className='w-[300px] md:w-[370px] mx-auto'
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className='bg-gray-100 shadow-xl rounded-2xl p-4 border border-gray-200'>
  <div className='w-full h-[320px] flex items-center justify-center rounded-xl border border-gray-300 bg-white'>
    <img
      src={ABOUTMELOGO}
      alt='Profile'
      className='w-full h-full object-contain p-2'
    />
  </div>

  <div className='mt-4 text-center'>
    <h3 className='text-lg font-semibold'>Wint Wah (Shi)</h3>
     {/* <h5 className='text-sm text-gray-900'>University of Computer Studies, Yangon</h5> */}
    <p className='text-sm text-gray-600'>
      Developer | Software Engineer
    </p>
  </div>
</div>

        </motion.div>

        {/* ---- ABOUT ME TEXT ---- */}
        <motion.div
          className='flex-1'
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className='hidden lg:block w-[200px] section-title text-left'>
            About Me
          </h4>

          <p className='text-sm text-justify leading-6 whitespace-pre-line mt-4'>
            You can call me{' '}
            <span className='text-green-600'>"Shi"</span> — a coffee lover with a passion for technology and community supporting works.
            I describe myself as someone who is always eager to grow, connect, and explore new opportunities that help me improve.
            As a{' '}
            <span className='text-green-600'>web developer</span>{' '}
            and{' '}
            <span className='text-green-600'>community enthusiast</span>,
            I love using technology to create meaningful projects that help people and make a positive impact on the community.
            I often find myself "productively wasting time" by learning new skills, discovering opportunities,
            and challenging myself to improve — because for me, growth and impact never stop.
          </p>

          <div className='flex gap-4 mt-6'>
            {ABOUT_ME.socialLinks.map((item) => (
              <a key={item.label} href={item.Link} className='cursor-pointer group'>
                <item.icon className='text-2xl text-semibold transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:translate-y-[-2px]' />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default AboutMe
