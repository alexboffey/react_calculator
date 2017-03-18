import React from 'react'

class Button extends React.Component{
  _handleClick(e){
    // Conditional to handle different types of buttons
    switch (this.props.button){
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
        this.props._handleNum(this.props.button);
        break;
      case "c":
      case "±":
      case ".":
        this.props._handleFunct(this.props.button);
        break;
      case "+":
      case "-":
      case "*":
      case "/":
      case "=":
        this.props._handleOper(this.props.button);
        break;
    }
  }
  render(){
    return(
      <button name={this.props.button} onClick={this._handleClick.bind(this)}>
        {this.props.button}
      </button>
    );
  }
};

export default Button
