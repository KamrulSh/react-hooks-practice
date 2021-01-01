import React from "react";

function CbCount({ text, count }) {
    console.log("Rendering",text, count);
    return (
        <div>
            <h4>
                {text} - {count}
            </h4>
        </div>
    );
}

export default React.memo(CbCount);
