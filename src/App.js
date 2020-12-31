import React, { Component } from "react";
import "./App.css";
import ComponentA from "./components/ComponentA";
import DataFetching from "./components/DataFetching";
import DataFetchingTwo from "./components/DataFetchingTwo";
import HooksCounter from "./components/HooksCounter";
import HooksCounterFour from "./components/HooksCounterFour";
import HooksCounterThree from "./components/HooksCounterThree";
import HooksCounterTwo from "./components/HooksCounterTwo";
import MouseContainer from "./components/MouseContainer";
import MyApp from "./components/MyApp";
import ReducerCounter from "./components/ReducerCounter";
import ReducerCounterThree from "./components/ReducerCounterThree";
import ReducerCounterTwo from "./components/ReducerCounterTwo";
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
                <ComponentA />
                <ReducerCounter />
                <ReducerCounterTwo />
                <ReducerCounterThree />
            </div>
        );
    }
}

export default App;
