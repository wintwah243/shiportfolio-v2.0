import React from 'react'
import { IoMdMail } from 'react-icons/io'
import { IoIosPhonePortrait } from 'react-icons/io'
import { IoLogoGithub } from 'react-icons/io'
import { ABOUT_ME } from '../utils/data'
import ContactInfoCard from '../components/ContactInfoCard'

const Contact = () => {
  return (
    <section id='contact'>
      <div className='container mx-auto p-10'>
        <div className='w-full lg:w-[60vw] mx-auto'>
          <h4 className='section-title'>Contact</h4>
          <p className='text-sm text-center mt-4 leading-6'>
          Feel free to reach out to me for collaboration, project inquiries,
           or just to say hello—I'd love to connect!
          </p>
        </div>

        <div className='grid md:gap-16 mt-16'>
          <div className=''>
            <ContactInfoCard icon={<IoMdMail />} text={ABOUT_ME.email} />
            <ContactInfoCard icon={<IoIosPhonePortrait />} text={ABOUT_ME.phone} />
            <ContactInfoCard icon={<IoLogoGithub />} text={ABOUT_ME.github} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact