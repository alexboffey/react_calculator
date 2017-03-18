import React, { Component, PropTypes } from 'react'
import Button from './Button'

class Operations extends Component {
  constructor () {
    super()
    this._handleOper = this._handleOper.bind(this)
  }
  _handleOper (oper) {
    switch (oper) {
      case '+':
      case '-':
      case '*':
      case '/':
        this.props._addToCalc(oper)
        break
      case '=':
        this.props._calcResult(oper)
        break
      default:
        console.log('Something went wrong...')
    }
  }
  render () {
    return (
      <div className='calc-operations'>
        {this.props.operations.map((operation, i) => (
          <Button button={operation} _handleOper={this._handleOper} key={i} />
        ))}
      </div>
    )
  }
}

Operations.propTypes = {
  _addToCalc: PropTypes.func.isRequired,
  _calcResult: PropTypes.func.isRequired,
  operations: PropTypes.array.isRequired
}

export default Operations
