import React, { useState } from 'react';
import { SKILL_TABS, SKILLS } from '../utils/data';
import Tabs from '../components/Tabs';
import SkillCard from '../components/SkillCard';
import { motion } from "framer-motion";

const Tech = () => {
  const [activeTab, setActiveTab] = useState('language');
  const [tabData, setTabData] = useState(
    SKILLS.filter((skill) => skill.type === 'language')
  );

  const handleTabValueChange = (value) => {
    const updatedList = SKILLS.filter((skill) => skill.type === value);
    setTabData(updatedList);
    setActiveTab(value);
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
      <div className='container mx-auto p-10'>
        <div className='w-full lg:w-[60vw] mx-auto'>
          <h4 className='section-title'>Technical Skills</h4>
          <p className='text-sm text-center mt-4 leading-6'>
            Passionate about building modern web and mobile applications with a strong foundation in JavaScript, React, and backend integration.
          </p>
        </div>

        <Tabs
          tabList={SKILL_TABS}
          activeTab={activeTab}
          onChange={handleTabValueChange}
        />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 min-h-[430px]'>
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
