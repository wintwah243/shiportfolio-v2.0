import React from 'react';
import LOGO from "../assets/images/LOGO.png";
import { STATS } from '../utils/data';
import Bot from '../components/Bot';
import { motion } from 'framer-motion';
import TimelineSection from '../components/TimelineSection';

const Hero = () => {
  return (
    <section id='hero' className='container mx-auto px-8'>
      <div className='flex flex-col lg:flex-row gap-14 items-center justify-between mt-[80px]'>

        <motion.div
          className='order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className='text-xl lg:text-2xl font-medium text-black'>Hi, I'm Shi 👋</h3>

          <motion.h1
            className='w-full lg:w-[720px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] mt-3 bg-yellow-200 rounded-[20px] p-6'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            a passionate software engineering student crafting beautiful and functional web experiences.
          </motion.h1>

          <motion.p
            className='w-full lg:w-[500px] text-sm lg:text-base mt-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Currently diving deep into React, Typescript, and Express.js to build full-stack applications.
          </motion.p>

          <motion.div
            className='flex justify-center lg:justify-start gap-4 md:gap-8 mt-6'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <button
              className='flex-1 md:flex-none action-btn-outline btn-scale-anim'
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View My Projects
            </button>
            
            <button className='flex-1 md:flex-none action-btn btn-scale-anim'>
              <a
                href="/myCV.pdf"
                download
              >
                Download CV
              </a>
            </button>
            
          </motion.div>
        </motion.div>

        <motion.div
          className='w-[300px] md:w-[370px] h-[350px] md:h-[428px] rounded-3xl relative order-1 lg:order-2'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={LOGO} alt='Profile Pic' className='profile-pic' />
        </motion.div>
      </div>

       <TimelineSection />
       <Bot />
    </section>
  );
};

export default Hero;
