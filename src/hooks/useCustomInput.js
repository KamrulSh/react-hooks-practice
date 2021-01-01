import { useState } from "react";

// implement custom hook for form input
function useCustomInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    const reset = () => {
        setValue(initialValue);
    };
    const bind = {
        value,
        onChange: (e) => {
            setValue(e.target.value);
        },
    };
    return [value, bind, reset];
}

export default useCustomInput;
