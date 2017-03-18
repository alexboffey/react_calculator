import React from 'react'
import Button from './Button'

class Operations extends React.Component{
  _handleOper(oper){
    switch (oper){
      case "+":
      case "-":
      case "*":
      case "/":
        this.props._addToCalc(oper);
        break;
      case "=":
        this.props._calcResult(oper);
        break;
      default:
        console.log("Something went wrong...");
    }
  }
  render(){
    return(
      <div className="calc-operations">
        {this.props.operations.map((operation) => {
          return <Button
                   button={operation}
                   _handleOper={this._handleOper.bind(this)}
                  />;
        })}
      </div>
    );
  }
};

export default Operations
