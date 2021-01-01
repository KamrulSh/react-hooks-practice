import React from "react";
import useCustomCounter from "../hooks/useCustomCounter";

// implement custom hook for removing code duplication
function CustomHookCounter2() {
    const [counter, increment, decrement, reset] = useCustomCounter(10, 5);
    return (
        <div>
            <h4>CounterTwo = {counter}</h4>
            <button onClick={increment} className="btn btn-primary m-2">
                Increment
            </button>
            <button onClick={decrement} className="btn btn-primary m-2">
                Decrement
            </button>
            <button onClick={reset} className="btn btn-danger m-2">
                Reset
            </button>
        </div>
    );
}

export default CustomHookCounter2;
