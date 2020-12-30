import React, { useContext } from "react";
import { ChannelContext, UserContext } from "./ComponentA";

// implements context hooks
function ComponentB() {
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);
    return (
        <h4>
            User = {user}, Channel = {channel}
        </h4>
    );
}

export default ComponentB;
