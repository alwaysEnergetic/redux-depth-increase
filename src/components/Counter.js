import React, { Component } from 'react';

import Value from './Value';
import Control from './Control';
import {connect} from 'react-redux';

class Counter extends Component {

  render() {
    const color = this. props.color
    const style = {
      background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`
    };
  
  
    return (
      <div style={style}>
          <Value/>
          <Control/>
      </div>
    );
  }
}

  const mapStateToProps = (state) => {
    return {
      color: state.ui.color
    };
  }

export default connect(mapStateToProps) (Counter);
