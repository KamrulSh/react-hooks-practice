import { useState } from "react";

// implement custom hook for removing code duplication
function useCustomCounter(initialCount = 10, value) {
    const [counter, setCounter] = useState(initialCount);
    const increment = () => {
        setCounter((prevCounter) => prevCounter + value);
    };
    const decrement = () => {
        setCounter((prevCounter) => prevCounter - value);
    };
    const reset = () => {
        setCounter(initialCount);
    };
    return [counter, increment, decrement, reset];
}

export default useCustomCounter;
