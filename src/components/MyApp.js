import React, { Component } from "react";
import Counters from "./Counters";
import Navbar from "./Navbar";

class MyApp extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 1 },
            { id: 4, value: 0 },
        ],
    };

    handleDelete = (counterId) => {
        console.log("delete clicked", counterId);
        const counters = this.state.counters.filter((c) => c.id !== counterId);
        this.setState({ counters });
    };

    handleReset = () => {
        console.log("reseet  cclick");
        const rCounters = this.state.counters.map((c) => {
            c.value = 0;
            return 0;
        });
        this.setState({ rCounters });
    };

    handleIncrement = (counter) => {
        console.log("Increment clicked", counter);
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        console.log(counters);
        this.setState({ counters });
    };

    render() {
        return (
            <div className="myApp">
                <Navbar
                    totalCounters={
                        this.state.counters.filter((i) => i.value > 0).length
                    }
                />
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                    />
                </main>
            </div>
        );
    }
}

export default MyApp;
