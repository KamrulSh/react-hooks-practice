import React from "react";

function CbTitle() {
    console.log("Component title");
    return (
        <div>
            <h1>Implementing useCallback hook</h1>
        </div>
    );
}

export default React.memo(CbTitle);
