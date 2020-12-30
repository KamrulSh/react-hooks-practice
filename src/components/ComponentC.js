import React from "react";
import { ChannelContext, UserContext } from "./ComponentA";

// context without react context hooks
function ComponentC() {
    return (
        <div>
            <UserContext.Consumer>
                {(user) => {
                    return (
                        <ChannelContext.Consumer>
                            {(channel) => {
                                return (
                                    <h4>
                                        Hello componentsC {user}, channel
                                        {channel}
                                    </h4>
                                );
                            }}
                        </ChannelContext.Consumer>
                    );
                }}
            </UserContext.Consumer>
        </div>
    );
}

export default ComponentC;
