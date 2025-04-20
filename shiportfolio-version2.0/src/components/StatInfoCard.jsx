import React from 'react';
import { motion } from 'framer-motion';

const StatInfoCard = ({ count, label }) => {
  return (
    <motion.div
      className='flex-1 flex gap-3 md:gap-5 bg-yellow-200 rounded-[14px] p-5'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h4 className='text-4xl md:text-5xl font-medium text-gray-400'>{count}</h4>
      <p className='text-sm md:text-[16px] font-normal text-black leading-6 whitespace-pre-line'>
        {label}
      </p>
    </motion.div>
  );
};

export default StatInfoCard;
