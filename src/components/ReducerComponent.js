import React, { useReducer } from "react";
import ReducerComponentA from "./ReducerComponentA";
import ReducerComponentB from "./ReducerComponentB";
import ReducerComponentC from "./ReducerComponentC";

// combining useReducer with useContext for global state management
export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "reset":
            return initialState;
        default:
            return state;
    }
};

function ReducerComponent() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <CountContext.Provider
            value={{ countState: count, countDispatch: dispatch }}
        >
            <div className="myApp">
                <h1>Counter Reducer using context: {count}</h1>
                <ReducerComponentA />
                <ReducerComponentB />
                <ReducerComponentC />
            </div>
        </CountContext.Provider>
    );
}

export default ReducerComponent;
