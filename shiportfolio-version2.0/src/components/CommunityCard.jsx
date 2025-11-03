import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { motion } from 'framer-motion'

const CommunityCard = ({ work, isExpanded, toggleExpand }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const shortText = work.description.slice(0, 200)

  return (
    <motion.div
      key={work.id}
      className='bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300'
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: work.id * 0.1 }}
    >
      {/* Image carousel */}
      <div className='relative'>
        <div className='overflow-hidden' ref={emblaRef}>
          <div className='flex'>
            {work.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${work.title}-${index}`}
                className='w-full h-48 object-cover flex-shrink-0'
              />
            ))}
          </div>
        </div>
        <button
          className='absolute left-3 top-1/2 transform -translate-y-1/2 bg-gray-100/70 p-1 rounded-full hover:bg-gray-200'
          onClick={scrollPrev}
        >
          <IoIosArrowBack className='text-gray-800' />
        </button>
        <button
          className='absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-100/70 p-1 rounded-full hover:bg-gray-200'
          onClick={scrollNext}
        >
          <IoIosArrowForward className='text-gray-800' />
        </button>
      </div>

      {/* Description section */}
      <div className='p-5'>
        <h3 className='text-lg font-semibold text-gray-800 mb-2'>
          {work.title}
        </h3>
        <p className='text-sm text-gray-600'>
          {isExpanded ? work.description : `${shortText}...`}
        </p>
        <button
          onClick={() => toggleExpand(work.id)}
          className='mt-3 text-green-600 text-sm font-medium hover:underline'
        >
          {isExpanded ? 'See Less' : 'See More'}
        </button>
      </div>
    </motion.div>
  )
}

export default CommunityCard
