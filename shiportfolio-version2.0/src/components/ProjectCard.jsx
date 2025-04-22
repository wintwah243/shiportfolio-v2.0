import React from 'react'

const ProjectCard = ({imgUrl, title, tags, link}) => {
  return (
    <div className='h-full bg-white rounded-xl overflow-hidden shadow-md mx-2'>
        <img src={imgUrl} alt={title} className='w-full h-72 md:h-80 object-cover' />

        <div className='px-4 py-5'>
            <h3 className='text-base font-semibold line-clamp-2 overflow-hidden text-ellipsis'>{title}</h3>
            <div className='flex flex-wrap gap-2 mt-2'>
                {tags.map((tag,index) => (
                    <span
                        key={index}
                        className='text-xs text-gray-400 px-3 py-1'
                    >
                        {tag}
                    </span>
                ))}
            </div>

          <div className=''>
                    <a href={link} target="_blank" rel="noopener noreferrer" className='cursor-pointer group'>
                        <button className='mt-2'>View on GitHub</button>
                    </a>
          </div>
        </div>
    </div>
  )
}

export default ProjectCard
