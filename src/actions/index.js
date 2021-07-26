import * as types from './ActionTypes';

export {
    increment,
    decrement,
    setColor
}

function increment() {
    return {
         type: types.INCREMENT
    };
}

function decrement() {
    return {
        type: types.DECREMENT
    };
}

function setColor(color) {
    return {
        type: types.SET_COLOR,
        color
    }
}