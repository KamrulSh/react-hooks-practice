import axios from "axios";
import React, { useEffect, useState } from "react";

function DataFetching() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                console.log(response);
                setUsers(response.data);
            })
            .catch((error) => console.log(error));
    }, []);
    return (
        <div className="myApp">
            <h1>Data Fetching</h1>
            {users.map((user) => (
                <ul key={user.id}>{user.name + " => " + user.website}</ul>
            ))}
        </div>
    );
}

export default DataFetching;
