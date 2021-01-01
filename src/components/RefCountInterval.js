import React, { useEffect, useRef, useState } from "react";

// implement the useRef hook for clearing the interval with event listener
function RefCountInterval() {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef();
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1);
        }, 1000);
        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);
    return (
        <div className="myApp">
            <h2>Count interval using useRef</h2>
            <h4>Count - {timer}</h4>
            <button
                className="btn btn-primary m-2"
                onClick={() => clearInterval(intervalRef.current)}
            >
                CLear
            </button>
        </div>
    );
}

export default RefCountInterval;
