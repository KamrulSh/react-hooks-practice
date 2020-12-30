import React, { useEffect, useState } from "react";

function HooksMouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const mousePositionChange = (e) => {
        console.log("mouse");
        setX(e.clientX);
        setY(e.clientY);
    };

    useEffect(() => {
        console.log("useeffect");
        window.addEventListener("mousemove", mousePositionChange);

        return () => {
            console.log("mousemove unmount");
            window.removeEventListener("mousemove", mousePositionChange);
        };
    }, []);

    return (
        <div className="myApp">
            <h1>
                Mouse X = {x} Y = {y}
            </h1>
        </div>
    );
}

export default HooksMouse;
