import React, { Component, PropTypes } from 'react'

class Button extends Component {
  constructor () {
    super()
    this._handleClick = this._handleClick.bind(this)
  }
  _handleClick (e) {
    // Conditional to handle different types of buttons
    switch (this.props.button) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        this.props._handleNum(this.props.button)
        break
      case 'c':
      case '±':
      case '.':
        this.props._handleFunct(this.props.button)
        break
      case '+':
      case '-':
      case '*':
      case '/':
      case '=':
        this.props._handleOper(this.props.button)
        break
    }
  }
  render () {
    return (
      <button name={this.props.button} onClick={this._handleClick}>
        {this.props.button}
      </button>
    )
  }
}

Button.propTypes = {
  _handleNum: PropTypes.func,
  _handleFunct: PropTypes.func,
  _handleOper: PropTypes.func,
  button: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired
}

export default Button
