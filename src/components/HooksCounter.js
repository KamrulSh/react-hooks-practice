import React, { useEffect, useState } from "react";

function HooksCounter() {
    const [timer, setTimer] = useState(0);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const tick = () => {
            setTimer((prevTimer) => prevTimer + 1);
        };
        const interval = setInterval(tick, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="myApp">
            <h1>Hooks counter {timer}</h1>
            <button
                onClick={() => setCounter(counter + 1)}
                className="btn btn-primary m-2"
            >
                Counter {counter}
            </button>
        </div>
    );
}

export default HooksCounter;
