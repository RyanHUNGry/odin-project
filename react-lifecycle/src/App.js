import React from "react";
import Counter from "./Counter";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ignoreThis: 1
    }
  }

  handleIgnoreThis = () => {
    this.setState({
      ignoreThis: this.state.ignoreThis + 33
    })
  }

  render() {
    return <div>
      <button onClick={this.handleIgnoreThis}>ignore This</button>
      <Counter ignoreThis = {this.state.ignoreThis}></Counter>
    </div>;
  }
}

export default App;
