import React from 'react'
import PropTypes from 'prop-types'
import Thumbnail from './Thumbnail'

function Results({ results }) {
    console.warn(results)
  return (
    <div>
        { results.map((result) => {
            return <Thumbnail key={result.id} result={result} />
        }) }
    </div>
  )
}

Results.propTypes = {}

export default Results
