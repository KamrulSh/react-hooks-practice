import React, { useState } from "react";

function HooksCounterFour() {
    const [number, setNumber] = useState([]);
    const addNumberInArray = () => {
        setNumber([
            ...number,
            {
                id: number.length,
                value: Math.floor(Math.random() * 101),
            },
        ]);
    };
    return (
        <div className="myApp">
            <h1>Hooks array</h1>
            <button className="btn btn-primary m-2" onClick={addNumberInArray}>
                Add number
            </button>
            {number.map((num) => (
                <li key={num.id}>{num.value}</li>
            ))}
        </div>
    );
}

export default HooksCounterFour;
