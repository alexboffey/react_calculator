import React from 'react'

class Display extends React.Component{
  render(){
    return(
      <div className="calc-display">
        {this.props.displayVal}
      </div>
    );
  }
};

export default Display
