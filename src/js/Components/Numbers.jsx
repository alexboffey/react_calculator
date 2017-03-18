import React, { Component, PropTypes } from 'react'
import Button from './Button'

class Numbers extends Component {
  constructor () {
    super()
    this._handleNum = this._handleNum.bind(this)
  }
  _handleNum (num) {
    const parsedNum = num.toString()
    this.props._displayNum(parsedNum)
  }
  render () {
    return (
      <div className='calc-numbers'>
        {this.props.numbers.map((number, i) => {
          return <Button button={number} _handleNum={this._handleNum} key={i} />
        })}
      </div>
    )
  }
}

Numbers.propTypes = {
  _displayNum: PropTypes.func.isRequired,
  numbers: PropTypes.array.isRequired
}

export default Numbers
