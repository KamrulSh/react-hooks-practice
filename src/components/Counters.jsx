import React, { Component } from "react";
import Counter from "./Counter";

export default class Counters extends Component {
    render() {
        const { onDelete, onReset, onIncrement, counters } = this.props;
        return (
            <div>
                <button onClick={onReset} className="btn btn-primary m-2">
                    Reset
                </button>
                {counters.map((counter) => (
                    <Counter
                        key={counter.id}
                        counter={counter}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                    >
                        <h4>Counter #{counter.id}</h4>
                    </Counter>
                ))}
            </div>
        );
    }
}
