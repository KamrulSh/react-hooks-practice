import axios from "axios";
import React, { useEffect, useState } from "react";

function DataFetchingTwo() {
    const [user, setUser] = useState({});
    const [id, setId] = useState(1);
    const [idFromButton, setIdFromButton] = useState(1);
    const fetchUserByButtonClick = () => {
        setIdFromButton(id);
    };
    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/users/${idFromButton}`)
            .then((response) => {
                console.log(response);
                setUser(response.data);
            })
            .catch((error) => console.log(error));
    }, [idFromButton]);
    return (
        <div className="myApp">
            <h1>Data Fetching by id</h1>
            <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <button
                className="btn btn-primary m-2"
                onClick={fetchUserByButtonClick}
            >
                Fetch data
            </button>
            <h4>{user.name}</h4>
        </div>
    );
}

export default DataFetchingTwo;
