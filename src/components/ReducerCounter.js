import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "reset":
            return initialState;
        default:
            return state;
    }
};
function ReducerCounter() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="myApp">
            <h2>Counter Reducer {count}</h2>
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
                onClick={() => dispatch("reset")}
            >
                Reset
            </button>
        </div>
    );
}

export default ReducerCounter;
