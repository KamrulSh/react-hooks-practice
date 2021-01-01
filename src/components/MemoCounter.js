import React, { useMemo, useState } from "react";

// performance optimization using useMemo by caching the result in the invoke function
function MemoCounter() {
    const [numberOne, setNumberOne] = useState(0);
    const [numberTwo, setNumberTwo] = useState(0);
    const incrementOne = () => {
        setNumberOne(numberOne + 1);
    };
    const incrementTwo = () => {
        setNumberTwo(numberTwo + 1);
    };
    const isEven = useMemo(() => {
        let i = 0;
        while (i < 200000000) i++;
        return numberOne % 2 === 0;
    }, [numberOne]);

    return (
        <div className="myApp">
            <h1>Implement useMemo</h1>
            <button className="btn btn-primary m-2" onClick={incrementOne}>
                Increment One {numberOne}
            </button>
            <span>{isEven ? "Even" : "Odd"}</span>
            <button className="btn btn-danger m-2" onClick={incrementTwo}>
                Increment Two {numberTwo}
            </button>
        </div>
    );
}

export default MemoCounter;
