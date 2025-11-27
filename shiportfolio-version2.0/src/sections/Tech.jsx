import React, { useState } from 'react';
import { SKILL_TABS, SKILLS } from '../utils/data';
import Tabs from '../components/Tabs';
import SkillCard from '../components/SkillCard';
import { motion } from "framer-motion";

const Tech = () => {
  //this state is used for activeTab UI
  const [activeTab, setActiveTab] = useState('language'); 
  
  //set tabData initial value to Language
  const [tabData, setTabData] = useState(
    // we got skill.type from data.js from utils folder
    SKILLS.filter((skill) => skill.type === 'language') //initial array with type 'language'
  );
  
  //event handler to handle tab value change
  const handleTabValueChange = (value) => {
    //create new array with filter method based on skill type
    const updatedList = SKILLS.filter((skill) => skill.type === value);
    setTabData(updatedList); //update tab data
    setActiveTab(value); //update activeTab UI based on value
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      id='skills'
      className='mt-20 bg-white'
    >
      {/* Header and Intro */}
      <div className='container mx-auto p-10'>
        <div className='w-full lg:w-[60vw] mx-auto'>
          <h4 className='section-title'>Technical Skills</h4>
          <p className='text-sm text-center mt-4 leading-6'>
            Passionate about building modern web and mobile applications with a strong foundation in JavaScript, React, and backend integration.
          </p>
        </div>

       {/* Tab Data menu Section */}
        <Tabs
          tabList={SKILL_TABS}
          activeTab={activeTab}
          onChange={handleTabValueChange}
        />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10'>
          {tabData.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <SkillCard
                icon={<skill.icon className='w-6 h-6 text-black' />}
                skillName={skill.skill}
                description={skill.description}
                progress={skill.progress}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Tech;
