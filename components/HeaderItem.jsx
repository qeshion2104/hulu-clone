import React from 'react'
import PropTypes from 'prop-types'

function HeaderItem({ title, Icon }) {
  return (
    <div className="
        group 
        flex flex-col items-center 
        cursor-pointer 
        w-12 sm:w-20 
        hover:text-white
    ">
        <Icon className="
            h-8 mb-1
            group-hover:animate-bounce
        " />
        <p className="
            tracking-widest 
            opacity-0 group-hover:opacity-100
        ">{title}</p>
    </div>
  )
}

HeaderItem.propTypes = {
    title: PropTypes.string,
    Icon: PropTypes.any,
}

export default HeaderItem
