import React from 'react'
import PropTypes, { func } from 'prop-types'
import requests from '../utils/requests'
import { useRouter } from 'next/router'

function Nav(props) {
    const router = useRouter()
    return (
        <nav className="relative">
            <div className="
                flex
                px-10 sm:px-20
                last:pr-24
                text-2xl whitespace-nowrap
                space-x-10 sm:space-x-20
                overflow-y-hidden overflow-x-scroll scrollbar-hide
            ">
                {/* for x scroll, only work on shift+mouse wheel */}
                {
                    Object.entries(requests).map(([key, {title, url}]) => {
                        console.warn(key, title, url)
                        return (
                            <h2
                                key={key}
                                onClick={() => {router.push(`/?genre=${key}`)}}
                                className="
                                    cursor-pointer 
                                    transition duration-100 transform
                                    hover:scale-125 hover:text-white
                                    active:text-red-500
                                "
                            >
                                {title}
                            </h2>
                        )
                    })
                }
            </div>
            <div className="
                absolute top-0 right-0
                bg-gradient-to-l from-[#06202A] h-10 w-1/12
                pointer-events-none
            "></div>
        </nav>
    )
}

Nav.propTypes = {}

export default Nav
