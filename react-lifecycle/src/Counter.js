import React from "react";

class Counter extends React.Component {
  constructor(props) {
    console.log("Constructor")
    super(props);

    this.state = {
      counter: 0,
    };
  }

  increment = () => {
    this.setState({counter: this.state.counter + 1})
  }

  decrement = () => {
    this.setState({counter: this.state.counter - 1})
  }

  componentDidMount() {
    console.log("Compnent Did Mount")
    console.log("_______________________________")
  }

  componentDidUpdate() {
    console.log("Component Did Update")
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`Next props ${nextProps.ignoreThis}`)
    return false
  }

  render() {
    console.log("Render")
    return <div>
      <button onClick={this.increment}>Increment</button>
      <button onClick={this.decrement}>Decrement</button>
      Counter: {this.state.counter}</div>;
  }
}

export default Counter;
