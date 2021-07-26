import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// const propTypes = {
//   number: PropTypes.number
// };

// const defaultProps = {
//   number : -1
// };

// Value.propTypes = propTypes;
// Value.defaultProps = defaultProps;


class Value extends Component {

  render() {
    return(
      <div>
          <h1> {this.props.number } </h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    number: state.counter.number
  };
}


export default connect(mapStateToProps) (Value);
