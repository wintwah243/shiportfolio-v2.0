import React from 'react';
import { motion } from 'framer-motion';
import { timelineData } from '../utils/data';

const TimelineSection = () => {
  return (
    <div className="mt-20 space-y-12">
      <h2 className="text-2xl font-bold text-center text-gray-800">Achievement</h2>
      <div className="relative border-l-4 border-yellow-300 pl-10 ml-4">
       {/* use map method to display all timeline data from utils */}
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className="relative mb-10"
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
          >
            {/* Circle */}
            <div className="absolute -left-6 top-2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-white shadow-md"></div>

            {/* Content */}
            <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.date}</p>
            <p className="mt-2 text-gray-700">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TimelineSection;
