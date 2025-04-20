import React from 'react'
import { IoMdMail } from 'react-icons/io'
import { IoIosPhonePortrait } from 'react-icons/io'
import { IoLogoGithub } from 'react-icons/io'
import { ABOUT_ME } from '../utils/data'
import ContactInfoCard from '../components/ContactInfoCard'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <motion.section
      id='contact'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className='container mx-auto p-10'>
        <motion.div
          className='w-full lg:w-[60vw] mx-auto'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className='section-title'>Contact</h4>
          <p className='text-sm text-center mt-4 leading-6'>
            Feel free to reach out to me for collaboration, project inquiries,
            or just to say hello—I'd love to connect!
          </p>
        </motion.div>

        <motion.div
          className='grid md:gap-16 mt-16'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <ContactInfoCard icon={<IoMdMail />} text={ABOUT_ME.email} />
            <ContactInfoCard icon={<IoIosPhonePortrait />} text={ABOUT_ME.phone} />
            <ContactInfoCard icon={<IoLogoGithub />} text={ABOUT_ME.github} />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Contact
