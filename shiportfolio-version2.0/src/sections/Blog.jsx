import React from 'react'
import { motion } from 'framer-motion'
import { BLOGS } from '../utils/data'

const Blog = () => {
  return (
    <motion.section
      id='blog'
      className='container mx-auto px-8 py-16'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* ---- MOBILE TITLE ---- */}
      <h4 className='block lg:hidden w-[300px] section-title text-left mb-16'>
        Blog, Article & News
      </h4>

      {/* ---- HEADER ---- */}
      <div className='flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12'>
        <div>
          <h4 className='hidden lg:block w-[300px] section-title text-left'>
            Blog, Article & News 
          </h4>
          <p className='text-sm text-gray-600 leading-6 mt-4 max-w-xl'>
            Here's my blogs, articles and news about the things I build, and the lessons I
            pick up along the way. Thanks for stopping by — I hope you find
            something useful here.
          </p>
        </div>

      </div>

      {/* ---- BLOG GRID ---- */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {BLOGS?.map((blog, index) => (
          <motion.article
            key={blog.id ?? index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <a
              href={blog.link}
              target='_blank'
              rel='noreferrer'
              className='group flex h-full flex-col bg-white shadow-xl rounded-2xl p-4 border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl'
            >
              {/* ---- THUMBNAIL ---- */}
              <div className='w-full h-[190px] overflow-hidden rounded-xl border border-gray-300 bg-gray-100'>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                />
              </div>

              {/* ---- META ---- */}
              <div className='flex items-center gap-3 text-xs text-gray-500 mt-4'>
                <span>{blog.date}</span>
                {blog.readTime && (
                  <>
                    <span className='w-1 h-1 rounded-full bg-gray-400' />
                    <span>{blog.readTime}</span>
                  </>
                )}
              </div>

              {/* ---- TITLE ---- */}
              <h3 className='text-lg font-semibold leading-6 mt-2 transition-colors duration-300'>
                {blog.title}
              </h3>

              {/* ---- DESCRIPTION ---- */}
              <p className='text-sm text-gray-600 text-justify leading-6 mt-2 line-clamp-3'>
                {blog.description}
              </p>

              {/* ---- READ MORE ---- */}
              <div className='mt-auto pt-4 flex items-center gap-2 text-sm font-medium text-black'>
                Read more
                <span className='transition-transform duration-300 group-hover:translate-x-1'>
                  &rarr;
                </span>
              </div>
            </a>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}

export default Blog