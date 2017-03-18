import React, { PropTypes } from 'react'

const Display = (props) => (
  <div className='calc-display'>
    {props.displayVal}
  </div>
)

Display.propTypes = {
  displayVal: PropTypes.string.isRequired
}

export default Display
