import React from "react";
import Overview from "./components/Overview";

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      input: "",
      tasks: []
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newTask = this.state.tasks
    this.setState({
      input: "",
      tasks: newTask.concat(this.state.input)
    })
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task">Submit a task:</label>
          <input type="text" id="task" name="task" value={this.state.input} onChange={this.handleChange} />
          <button type='submit'>Submit Your Task!</button>
        </form>
        <div>
          {
            this.state.tasks.map((task) => <Overview text={task}/>)
          }
        </div>
      </div>
    )
  }
}
