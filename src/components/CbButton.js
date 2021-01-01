import React from "react";

function CbButton({ handleIncrement, children }) {
    console.log("Button ", children);
    return (
        <div>
            <button className="btn btn-dark" onClick={handleIncrement}>
                {children}
            </button>
        </div>
    );
}

export default React.memo(CbButton);
