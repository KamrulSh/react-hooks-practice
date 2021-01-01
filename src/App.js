import React, { Component } from "react";
import "./App.css";
import ComponentA from "./components/ComponentA";
import ComponentCallback from "./components/ComponentCallback";
import DataFetching from "./components/DataFetching";
import DataFetchingTwo from "./components/DataFetchingTwo";
import HooksCounter from "./components/HooksCounter";
import HooksCounterFour from "./components/HooksCounterFour";
import HooksCounterThree from "./components/HooksCounterThree";
import HooksCounterTwo from "./components/HooksCounterTwo";
import MouseContainer from "./components/MouseContainer";
import MyApp from "./components/MyApp";
import ReducerComponent from "./components/ReducerComponent";
import ReducerCounter from "./components/ReducerCounter";
import ReducerCounterThree from "./components/ReducerCounterThree";
import ReducerCounterTwo from "./components/ReducerCounterTwo";
import ReducerDataFetching from "./components/ReducerDataFetching";
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
                <ReducerComponent />
                <ReducerDataFetching />
                <ComponentCallback />
            </div>
        );
    }
}

export default App;
