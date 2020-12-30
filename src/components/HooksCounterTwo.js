import React, { useState } from "react";

function HooksCounterTwo() {
    const initialCount = 0;
    const [counter, setCounter] = useState(initialCount);
    const incrementByFive = () => {
        for (let i = 0; i < 5; i++) {
            setCounter((prevCounter) => prevCounter + 1);
        }
    };
    return (
        <div className="myApp">
            <h1>Counter: {counter}</h1>
            <button
                onClick={() => setCounter((prevCounter) => prevCounter + 1)}
                className="btn btn-primary m-2"
            >
                Increment
            </button>
            <button onClick={incrementByFive} className="btn btn-primary m-2">
                Increment 5
            </button>
            <button
                onClick={() => setCounter((prevCounter) => prevCounter - 1)}
                className="btn btn-primary m-2"
            >
                Decrement
            </button>
            <button
                onClick={() => setCounter(initialCount)}
                className="btn btn-danger m-2"
            >
                Reset
            </button>
        </div>
    );
}

export default HooksCounterTwo;
