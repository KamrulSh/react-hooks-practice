import React from "react";
import { useContext } from "react";
import { CountContext } from "./ReducerComponent";

function ReducerComponentF() {
    const countContext = useContext(CountContext);

    return (
        <div>
            <h2>Counter Reducer F {countContext.countState}</h2>
            <button
                className="btn btn-primary m-2"
                onClick={() => countContext.countDispatch("increment")}
            >
                Increment
            </button>
            <button
                className="btn btn-secondary m-2"
                onClick={() => countContext.countDispatch("decrement")}
            >
                Decrement
            </button>
            <button
                className="btn btn-danger m-2"
                onClick={() => countContext.countDispatch("reset")}
            >
                Reset
            </button>
        </div>
    );
}

export default ReducerComponentF;
