import React, { Component, PropTypes, defaultProps } from 'react';
import * as actions from '../actions';
import {connect} from 'react-redux';

class Control extends Component {
    constructor(props) {
        super(props);
        this.setRandomColor = this.setRandomColor.bind(this);
    }

    setRandomColor() {
        const color = [
            Math.floor((Math.random() *55)+200),
            Math.floor((Math.random() *55)+200),
            Math.floor((Math.random() *55)+200)            
        ];
        this.props.handleSetColor(color);
    }

    render() {

        return (
            <div>
                <button onClick = {this.props.handleIncrement}>+</button>
                <button onClick = {this.props.handleDecrement}>-</button>
                <button onClick = {this.setRandomColor}> Randomize color </button>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        color: state.ui.color
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleIncrement: () => {dispatch(actions.increment())},
        handleDecrement: () => {dispatch(actions.decrement())},
        handleSetColor: (color) => {dispatch(actions.setColor(color))},
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Control);