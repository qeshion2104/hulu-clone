import React from 'react'
import PropTypes from 'prop-types'
import Thumbnail from './Thumbnail'
import FlipMove from 'react-flip-move';

function Results({ results }) {
    console.warn(results)
  return (
    <FlipMove className='
        px-5 my-10
        flex-wrap  justify-center
        sm:grid
        md:grid-cols-2
        xl:grid-cols-3
        3xl:flex
        
    '>
        { results.map((result) => {
            return <Thumbnail key={result.id} result={result} />
        }) }
    </FlipMove>
  )
}

Results.propTypes = {}

export default Results
