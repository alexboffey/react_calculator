import React, { Component, PropTypes } from 'react'
import Button from './Button'

class Functions extends Component {
  constructor () {
    super()
    this._handleFunct = this._handleFunct.bind(this)
  }
  _handleFunct (funct) {
    // Conditional to call appropriate function
    switch (funct) {
      case 'c':
        this.props._clearVals()
        break
      case '±':
        this.props._swapSign()
        break
      case '.':
        this.props._insDecimal()
        break
      default:
        console.log('Something went wrong...')
    }
  }
  render () {
    return (
      <div className='calc-functions'>
        {this.props.functions.map((funct, i) => (
          <Button button={funct} _handleFunct={this._handleFunct} key={i} />
        ))}
      </div>
    )
  }
}

Functions.propTypes = {
  _clearVals: PropTypes.func.isRequired,
  _swapSign: PropTypes.func.isRequired,
  _insDecimal: PropTypes.func.isRequired,
  functions: PropTypes.array.isRequired
}

export default Functions
