import React from "react";
import CustomHookCounter1 from "./CustomHookCounter1";
import CustomHookCounter2 from "./CustomHookCounter2";

function CustomHookCounter() {
    return (
        <div className="myApp">
            <CustomHookCounter1 />
            <CustomHookCounter2 />
        </div>
    );
}

export default CustomHookCounter;
