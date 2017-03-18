import React from 'react'
import Button from './Button'

class Numbers extends React.Component{
  _handleNum(num){
    const parsedNum = num.toString();
    this.props._displayNum(parsedNum);
  }
  render(){
    return(
      <div className="calc-numbers">
        {this.props.numbers.map((number) => {
          return <Button
                   button={number}
                   _handleNum={this._handleNum.bind(this)}
                  />;
        })}
      </div>
    );
  }
};

export default Numbers
