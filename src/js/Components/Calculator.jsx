import React, { Component } from 'react'
import Button from './Button'
import Operations from './Operations'
import Functions from './Functions'
import Numbers from './Numbers'
import Display from './Display'

class Calculator extends React.Component{
  constructor () {
    super()
    this.state = {
      displayVal: "0",
      calcVals: []
    }
  }
  _displayNum (num){
    if (this.state.displayVal.length > 19) { // Where var too long for display
      return;
    } else if (this.state.displayVal === "0" || this.state.displayVal === "Undefined! 😫") { // Where var is 0, or where result is undefined
      this.setState({
        displayVal: num
      });
    } else if (this.state.displayVal.charAt(0) === "-" && this.state.displayVal.charAt(1) === "0") { // Fix to allow user to add - sign while displayed value is still 0
      this.setState({
        displayVal: `-${num}`
      });
    } else {
      this.setState({
        displayVal: this.state.displayVal + num
      });
    }
  }
  _clearVals(){
    this.setState({
      displayVal: "0",
      calcVals: []
    });
  }
  _insDecimal(){
    if (this.state.displayVal.length > 19) {
      return;
    } else if (this.state.displayVal.indexOf(".") === -1) {
      this.setState({
        displayVal: this.state.displayVal + "."
      })
    } else {
      return;
    }
  }
  _swapSign(){
    const char = this.state.displayVal.charAt(0);
    if (char === "-") {
      this.setState({
        displayVal: this.state.displayVal.slice(1)
      });
    } else {
      this.setState({
        displayVal: "-" + this.state.displayVal
      });
    }
  }
  _addToCalc(oper){
    const currentVal = parseFloat(this.state.displayVal),
      calc = {
        val: currentVal,
        sign: oper
      },
      vals = [...this.state.calcVals];
    vals.push(calc);
    this.setState({
      displayVal: "0",
      calcVals: vals
    });
  }
  _calcResult(oper){
    const valsToCalc = [...this.state.calcVals],
      currentVal = parseFloat(this.state.displayVal);
    let result = 0;
    // Add current value to array
    valsToCalc.push({val: currentVal, sign: oper});
    for (let i = 0, x = valsToCalc.length; i < x; i++){
      // For first iteration, set result = to first value
      // This is so we can do sums between current and previous loop iteration
      if (i === 0) {
        result = valsToCalc[i].val;
      } else {
        // Referencing the previous iteration's sign
        switch (valsToCalc[i - 1].sign){
          case "+":
            result += valsToCalc[i].val;
            break;
          case "-":
            result -= valsToCalc[i].val;
            break;
          case "*":
            result *= valsToCalc[i].val;
            break;
          case "/":
            result /= valsToCalc[i].val;
            break;
          default:
            console.log("Something went wrong...");
        }
      }
    }
    // Catch if user divides by 0
    if (isNaN(result) || result === Infinity) {
      result = "Undefined! 😫";
    } else {
      result = result.toString();
    }
    // Set result on state
    this.setState({
      displayVal: result,
      calcVals: []
    });
  }
  render(){
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
          operations = ['+', '-', '*', '/', '='],
          functions = ['c', '±', '.'];
    return (
      <div className="calculator">
        <Display
          displayVal={this.state.displayVal}
        />
        <Functions
          functions={functions}
          _clearVals={this._clearVals.bind(this)}
          _insDecimal={this._insDecimal.bind(this)}
          _swapSign={this._swapSign.bind(this)}
        />
        <Numbers
          numbers={numbers}
          _displayNum={this._displayNum.bind(this)}
        />
        <Operations
          operations={operations}
          _addToCalc={this._addToCalc.bind(this)}
          _calcResult={this._calcResult.bind(this)}
        />
      </div>
    );
  }
};



















export default Calculator
