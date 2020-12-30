import React, { useEffect, useState } from "react";

function HooksCounterThree() {
    const [name, setName] = useState({ firstName: "", lastName: "" });
    const [counter, setCounter] = useState(0);
    // runs after the render while counter value is changed
    useEffect(() => {
        console.log("Rendered");
        document.title = `Clicked ${counter} times`;
    }, [counter]);

    return (
        <div className="myApp">
            <h1>Enter first and last name</h1>
            <input
                type="text"
                placeholder="FirstName"
                value={name.firstName}
                onChange={(e) =>
                    setName({ ...name, firstName: e.target.value })
                }
            />
            <input
                type="text"
                placeholder="LastName"
                value={name.lastName}
                onChange={(e) => setName({ ...name, lastName: e.target.value })}
            />
            <button
                onClick={() => setCounter(counter + 1)}
                className="btn btn-primary m-2"
            >
                Counter {counter}
            </button>
            <h4>{JSON.stringify(name)}</h4>
        </div>
    );
}

export default HooksCounterThree;
