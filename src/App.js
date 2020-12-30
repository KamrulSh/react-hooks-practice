import React, { Component } from "react";
import "./App.css";
import DataFetching from "./components/DataFetching";
import DataFetchingTwo from "./components/DataFetchingTwo";
import HooksCounter from "./components/HooksCounter";
import HooksCounterFour from "./components/HooksCounterFour";
import HooksCounterThree from "./components/HooksCounterThree";
import HooksCounterTwo from "./components/HooksCounterTwo";
import MouseContainer from "./components/MouseContainer";
import MyApp from "./components/MyApp";
class App extends Component {
    render() {
        return (
            <div>
                <MyApp />
                <HooksCounter />
                <HooksCounterTwo />
                <HooksCounterThree />
                <HooksCounterFour />
                <MouseContainer />
                <DataFetching />
                <DataFetchingTwo />
            </div>
        );
    }
}

export default App;
