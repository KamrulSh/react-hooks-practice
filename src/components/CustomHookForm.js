import React from "react";
import useCustomInput from "../hooks/useCustomInput";

// implement custom hook for form input
function CustomHookForm() {
    const [firstName, bindFirstName, resetFirstName] = useCustomInput("");
    const [lastName, bindLastName, resetLastName] = useCustomInput("");
    const submitHandler = (e) => {
        e.preventDefault();
        alert(`Hello ${firstName}, ${lastName}`);
        resetFirstName();
        resetLastName();
    };
    return (
        <form className="myApp" onSubmit={submitHandler}>
            <h3>Custom hook form</h3>
            <input type="text" placeholder="First Name" {...bindFirstName} />
            <input type="text" placeholder="Last Name" {...bindLastName} />
            <button className="btn btn-primary m-2">Submit</button>
        </form>
    );
}

export default CustomHookForm;
