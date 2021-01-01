import React, { useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

function CustomHookTitle1() {
    const [counter, setCounter] = useState(0);
    useDocumentTitle(counter);
    return (
        <div>
            <button
                onClick={() => setCounter(counter + 1)}
                className="btn btn-primary m-2"
            >
                Counter1 {counter}
            </button>
        </div>
    );
}

export default CustomHookTitle1;
