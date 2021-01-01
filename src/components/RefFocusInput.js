import React, { useEffect, useRef, useState } from "react";

function RefFocusInput() {
    const [val, setVal] = useState("");
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    });

    const handleClick = () => {
        alert(val);
    };
    return (
        <div className="myApp">
            <h2>Focus input using useRef hook</h2>
            <input
                type="text"
                ref={inputRef}
                onChange={(e) => setVal(e.target.value)}
            ></input>
            <button className="btn btn-dark m-2" onClick={handleClick}>
                Submit
            </button>
        </div>
    );
}

export default RefFocusInput;
