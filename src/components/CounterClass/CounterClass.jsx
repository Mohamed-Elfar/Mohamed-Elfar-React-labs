import React, { Component } from "react";

class CounterClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: this.props.count,
    };
  }
  handleDecreas = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  handleIncreas = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div className="container">
        <h1>Counter From Class</h1>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleIncreas}>Increase</button>
        <button onClick={this.handleDecreas}>Decrease</button>
      </div>
    );
  }
}

export default CounterClass;
