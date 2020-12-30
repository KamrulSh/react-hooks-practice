import React, { useState } from "react";
import HooksMouse from "./HooksMouse";

function MouseContainer() {
    const [display, setDisplay] = useState(true);
    return (
        <div className="myApp">
            {display && <HooksMouse />}
            <button
                onClick={() => setDisplay(!display)}
                className="btn btn-primary m-2"
            >
                Toggle display
            </button>
        </div>
    );
}

export default MouseContainer;
