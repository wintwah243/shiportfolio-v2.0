import React from 'react';
import LOGO from "../assets/images/LOGO.png";
import { STATS } from '../utils/data';
import StatInfoCard from '../components/StatInfoCard';

const Hero = () => {
  return (
    <section id='hero' className='container mx-auto px-8'>
      <div className='flex flex-col lg:flex-row gap-14 items-center justify-between mt-[80px]'>
        <div className='order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0'>
          <h3 className='text-xl lg:text-2xl font-medium text-black'>Hi, I'm Shi 🐝</h3>
          <h1 className='w-full lg:w-[720px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] mt-3 bg-yellow-200 rounded-[20px] p-6'>a passionate software engineering student crafting beautiful and functional web experiences.</h1>

          <p className='w-full lg:w-[500px] text-sm lg:text-base mt-4'>Currently diving deep into React, Tailwind CSS, and Express.js to build full-stack applications.</p>

          <div className='flex justify-center lg:justify-start gap-4 md:gap-8 mt-6'>
            <button className='flex-1 md:flex-none action-btn-outline btn-scale-anim' onClick={() => {
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}>View My Projects</button>
            <button className='flex-1 md:flex-none action-btn btn-scale-anim' onClick={() => {
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }}>Get to Know Me</button>
          </div>
        </div>

        <div className='w-[300px] md:w-[370px] h-[350px] md:h-[428px] rounded-3xl relative order-1 lg:order-2'>
          <img src={LOGO} alt='Profile Pic' className='profile-pic' />
        </div>
      </div>

      <div className='flex gap-12 mt-16 md:mt-24 flex-wrap'>
        {STATS.map((item) => (
          <StatInfoCard key={item.id} count={item.count} label={item.label} />
        ))}
      </div>
    </section>
  )
}

export default Hero