import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initialState = {
    loading: true,
    error: "",
    users: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_DATA":
            return {
                loading: false,
                error: "",
                users: action.payload,
            };
        case "ERROR_DATA":
            return {
                loading: true,
                error: "Somthing wrong",
                users: "",
            };

        default:
            return state;
    }
};

function ReducerDataFetching() {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                dispatch({ type: "FETCH_DATA", payload: response.data });
            })
            .catch((error) => {
                dispatch({ type: "ERROR_DATA" });
            });
    });
    return (
        <div className="myApp">
            <h1>DataFetching using useReduce</h1>
            <h3>
                {state.loading
                    ? "Loading..."
                    : state.users.map((user) => <h4>{user.name}</h4>)}
                {state.error ? state.error : null}
            </h3>
        </div>
    );
}

export default ReducerDataFetching;
