import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import { ThumbUpIcon } from '@heroicons/react/outline'

function Thumbnail({result}) {
  console.log(result)
  const BASE_URL = "https://www.themoviedb.org/t/p/original/"
  return (
    <div className='p-2 group cursor-pointer transition duration-200 ease-in transform
      sm:hover:scale-105 hover:z-50
      '>
        {/* img */}
        <Image
            layout='responsive'
            src={
              `${BASE_URL}${result.backdrop_path || result.poster_path }`
              
            }
            height={1080}
            width={1920}
        />
        <div className='p-2'>
          {/* desc */}
          <p className='truncate max-w-md'>{result.overview}</p>
          {/* title */}
          <h2 className='mt-1 text-2xl text-white  transition-all duration-100 ease-in-out group-hover:font-bold' >{ result.title || result.original_name }</h2>
          {/* hover:show date | icon | count */}
          <p className='flex items-center opacity-0 group-hover:opacity-100'>
            {result.media_type && `${result.media_type} *`}{" "} 
            {result.release_date || result.first_air_date } 。{" "} 
            {result.medoa_type && `${result.media_type} *`}{" "} 
            <ThumbUpIcon className='h-5 mx-2' /> { result.vote_count }
          </p>
        </div>
    </div>
  )
}

Thumbnail.propTypes = {}

export default Thumbnail
