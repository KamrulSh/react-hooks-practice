import React, { useCallback, useState } from "react";
import CbButton from "./CbButton";
import CbCount from "./CbCount";
import CbTitle from "./CbTitle";

// implement useCallback hook to prevent unnecessary renders and optimize performance
function ComponentCallback() {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000);
    const incrementAge = useCallback(() => {
        setAge(age + 1);
    }, [age]);
    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000);
    }, [salary]);
    console.log("Component Callback");

    return (
        <div className="myApp">
            <CbTitle />
            <CbCount text="Age" count={age} />
            <CbButton handleIncrement={incrementAge}>Increment age</CbButton>
            <CbCount text="Salary" count={salary} />
            <CbButton handleIncrement={incrementSalary}>
                Increment salary
            </CbButton>
        </div>
    );
}

export default ComponentCallback;
