import React, { Component } from "react";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }

  onChange = (e) => {
    this.setState({ input: e.target.value });
  };

  submit = (e) => {
    e.preventDefault();
    if (this.state.input.trim()) {
      this.props.onAddTask(this.state.input);
      this.setState({ input: "" });
    }
  };

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.input !== nextState.input;
  }

  render() {
    return (
      <form className="task-form" onSubmit={this.submit}>
        <input
          type="text"
          value={this.state.input}
          onChange={this.onChange}
          placeholder="Add a new task..."
          className="task-input"
        />
        <button type="submit" className="add-button">
          Add Task
        </button>
      </form>
    );
  }
}

export default TaskForm;
