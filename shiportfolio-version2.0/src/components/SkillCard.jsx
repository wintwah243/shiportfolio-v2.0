import React from 'react'

const SkillCard = ({icon, skillName, description, progress}) => {
  return (
    <div className='bg-white rounded-2xl border p-4 mt-5'>
        <div className='flex gap-3'>
            <div className='w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full'>{icon}</div>

            <div className='flex-1'>
                <div className='flex items-center justify-between'>
                    <p className='text-[13px] text-black font-medium'>{skillName}</p>
                </div>
                
                <div className='w-full bg-green rounded-md h-[15px] relative mt-2'>
                <div
                    className='bg-black h-[5px] rounded-md'
                    style={{ width:`${progress}%`}}
                >
                </div>
                </div>
                
            </div>
        </div>
        <p className='text-xs text-gray-600 text-justify leading-5 mt-2'>{description}</p>
    </div>
  )
}

export default SkillCard
