import React, { useReducer } from "react";

// using multiple reducer
const initialState = 0;
const initialStateTwo = 10;
const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "reset1":
            return initialState;
        case "reset2":
            return initialStateTwo;
        default:
            return state;
    }
};

function ReducerCounterThree() {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [countTwo, dispatchTwo] = useReducer(reducer, initialStateTwo);
    return (
        <div className="myApp">
            <h2>Counter Reducer One {count}</h2>
            <button
                className="btn btn-primary m-2"
                onClick={() => dispatch("increment")}
            >
                Increment
            </button>
            <button
                className="btn btn-secondary m-2"
                onClick={() => dispatch("decrement")}
            >
                Decrement
            </button>
            <button
                className="btn btn-danger m-2"
                onClick={() => dispatch("reset1")}
            >
                Reset
            </button>
            <h2>Counter Reducer Two {countTwo}</h2>
            <button
                className="btn btn-primary m-2"
                onClick={() => dispatchTwo("increment")}
            >
                Increment
            </button>
            <button
                className="btn btn-secondary m-2"
                onClick={() => dispatchTwo("decrement")}
            >
                Decrement
            </button>
            <button
                className="btn btn-danger m-2"
                onClick={() => dispatchTwo("reset2")}
            >
                Reset
            </button>
        </div>
    );
}

export default ReducerCounterThree;
