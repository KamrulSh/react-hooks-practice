import React, { useReducer } from "react";

// using state and action as object in reducer
const initialState = {
    firstCount: 0,
    secondCount: 10,
};
const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { ...state, firstCount: state.firstCount + action.value };
        case "decrement":
            return { ...state, firstCount: state.firstCount - action.value };
        case "increment2":
            return { ...state, secondCount: state.secondCount + action.value };
        case "decrement2":
            return { ...state, secondCount: state.secondCount - action.value };
        case "reset":
            return initialState;
        default:
            return state;
    }
};
function ReducerCounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="myApp">
            <h2>Counter Reducer (object 1) {count.firstCount}</h2>
            <h2>Counter Reducer (object 2) {count.secondCount}</h2>
            <button
                className="btn btn-primary m-2"
                onClick={() => dispatch({ type: "increment", value: 1 })}
            >
                Increment
            </button>
            <button
                className="btn btn-secondary m-2"
                onClick={() => dispatch({ type: "decrement", value: 1 })}
            >
                Decrement
            </button>
            <button
                className="btn btn-primary m-2"
                onClick={() => dispatch({ type: "increment", value: 5 })}
            >
                Increment 5
            </button>
            <button
                className="btn btn-secondary m-2"
                onClick={() => dispatch({ type: "decrement", value: 5 })}
            >
                Decrement 5
            </button>
            <button
                className="btn btn-danger m-2"
                onClick={() => dispatch({ type: "reset" })}
            >
                Reset
            </button>
            <div>
                <button
                    className="btn btn-primary m-2"
                    onClick={() => dispatch({ type: "increment2", value: 3 })}
                >
                    Increment 2
                </button>
                <button
                    className="btn btn-secondary m-2"
                    onClick={() => dispatch({ type: "decrement2", value: 3 })}
                >
                    Decrement 2
                </button>
            </div>
        </div>
    );
}

export default ReducerCounterTwo;
