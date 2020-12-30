import React from "react";
import ComponentB from "./ComponentB";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function ComponentA() {
    return (
        <div className="myApp">
            <UserContext.Provider value={"Shahin"}>
                <ChannelContext.Provider value={"Geniusbird"}>
                    <ComponentB />
                </ChannelContext.Provider>
            </UserContext.Provider>
        </div>
    );
}

export default ComponentA;
