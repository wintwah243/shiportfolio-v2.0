import React from 'react'
import { motion } from 'framer-motion'
import LOGO from '../assets/images/LOGO.png'
import { ABOUT_ME } from '../utils/data'

const AboutMe = () => {
  return (
    <motion.section
      id='about'
      className='container mx-auto px-8 py-16'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h4 className='block lg:hidden w-[200px] section-title text-left mb-16'>About Me</h4>

      <div className='flex flex-col lg:flex-row gap-16 items-start justify-between'>
        <motion.div
          className='w-[300px] md:w-[370px] h-[350px] md:h-[428px] mx-auto'
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img src={LOGO} alt='Profile Pic' className='profile-pic' />
        </motion.div>

        <motion.div
          className='flex-1'
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className='hidden lg:block w-[200px] section-title text-left'>About Me</h4>
          <p className='text-sm text-justify leading-6 whitespace-pre-line mt-4'>{ABOUT_ME.content}</p>

          <div className='flex gap-4 mt-6'>
            {ABOUT_ME.socialLinks.map((item) => (
              <a
              key={item.label}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className='cursor-pointer group'
              >
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
