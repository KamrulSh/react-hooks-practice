import React from "react";
import CustomHookTitle1 from "./CustomHookTitle1";
import CustomHookTitle2 from "./CustomHookTitle2";

// implementing custom hook for changing document title
function CustomHookTitle() {
    return (
        <div className="myApp">
            <h2>Using custom hook for changing document title</h2>
            <CustomHookTitle1 />
            <CustomHookTitle2 />
        </div>
    );
}

export default CustomHookTitle;
