import React from 'react'

const StatInfoCard = ({count, label}) => {
  return (
    <div className='flex-1 flex gap-3 md:gap-5 bg-yellow-200 rounded-[14px] p-5'>
        <h4 className='text-4xl md:text-5xl font-medium text-gray-400'>{count}</h4>
        <p className='text-sm md:text-[16px] font-normal text-black leading-6 whitespace-pre-line'>{label}</p>
    </div>
  )
}

export default StatInfoCard