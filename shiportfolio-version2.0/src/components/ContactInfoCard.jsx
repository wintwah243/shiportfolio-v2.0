import React from 'react'

const ContactInfoCard = ({icon, text}) => {
  return (
    <div className='flex items-center gap-5 bg-white border rounded-full mt-5'>
        <div className='w-10 h-10 text-xl flex items-center justify-center'>{icon}</div>
        <p className='text-semibold text-xs md:text-sm'>{text}</p>
    </div>
  )
}

export default ContactInfoCard