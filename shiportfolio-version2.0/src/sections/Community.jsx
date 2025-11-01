import React, { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { COMMUNITY_WORK } from '../utils/data'
import CommunityCard from '../components/CommunityCard'

const Community = () => {
  const [expanded, setExpanded] = useState(null)
  const toggleExpand = (id) => setExpanded(expanded === id ? null : id)

  return (
    <motion.section
      id='community'
      className='mt-14'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className='container mx-auto px-8 md:px-10 py-10'>
        <motion.div
          className='w-full lg:w-[60vw] mx-auto text-center'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className='section-title'>Community Work</h4>
          <p className='text-sm text-gray-600 mt-4 leading-6'>
            Here are some of the community projects, involvements and volunteer works I’ve been involved in, where I used technology and collaboration to create positive impact.
          </p>
        </motion.div>

        {/* Grid layout */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14'>
          {COMMUNITY_WORK.map((work) => (
            <CommunityCard
              key={work.id}
              work={work}
              isExpanded={expanded === work.id}
              toggleExpand={toggleExpand}
            />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Community
