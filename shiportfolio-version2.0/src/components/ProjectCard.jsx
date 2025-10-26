import React from 'react'
import { FaGithub } from 'react-icons/fa'

const ProjectCard = ({imgUrl, title, tags, link, type}) => {
  return (
    <div className='h-full bg-white rounded-xl overflow-hidden shadow-md mx-2'>
        <img src={imgUrl} alt={title} className='w-full h-72 md:h-80 object-cover' />

        <div className='px-4 py-5'>
            <h3 className='text-base font-semibold line-clamp-2 overflow-hidden text-ellipsis'>{title}</h3>
            <div className='flex flex-wrap gap-2 mt-2'>
                {tags.map((tag,index) => (
                    <span
                        key={index}
                        className='text-xs text-yellow-700 px-3 py-1 bg-yellow-100 rounded-full'
                    >
                        {tag}
                    </span>
                ))}
            </div>

          {/* Separator */}
            <div className="flex items-center my-6">
                    <hr className="flex-grow border-black" />
                    <span className="mx-3 text-gray-500 text-sm font-medium"></span>
                    <hr className="flex-grow border-black" />
            </div>

          <div className='flex gap-2'>
                    <a href={link} target="_blank" rel="noopener noreferrer" className='cursor-pointer group'>
                        <button className='flex mt-4 text-gray-900 bg-gray-100 border py-2 px-2 rounded-lg'>
                            GitHub
                            <FaGithub className='ml-2 mt-1' />
                        </button>
                    </a>
                    <button className='flex mt-4 text-blue-700 bg-blue-100 border py-2 px-2 rounded-lg'>
                        {type}
                    </button>
                </div>
        </div>
    </div>
  )
}

export default ProjectCard
