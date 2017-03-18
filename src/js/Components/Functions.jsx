import React from 'react'
import Button from './Button'

class Functions extends React.Component{
  _handleFunct(funct){
    // Conditional to call appropriate function
    switch (funct){
      case "c":
        this.props._clearVals();
        break;
      case "±":
        this.props._swapSign();
        break;
      case ".":
        this.props._insDecimal();
        break;
      default:
        console.log("Something went wrong...");
    }
  }
  render(){
    return(
      <div className="calc-functions">
        {this.props.functions.map((funct) => {
           return <Button
                   button={funct}
                   _handleFunct={this._handleFunct.bind(this)}
                  />;
        })}
      </div>
    );
  }
};

export default Functions
