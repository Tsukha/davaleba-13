import React, { Component } from "react";
import TaskForm from "./components/taskForm";
import TaskList from "./components/taskList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    return prevState.tasks !== this.state.tasks;
  }

  addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, newTask],
    }));
  };

  toggleTaskStatus = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    }));
  };

  deleteTask = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));
  };

  render() {
    const { tasks } = this.state;
    const unfinishedTasks = tasks.filter((task) => !task.completed);
    const finishedTasks = tasks.filter((task) => task.completed);

    return (
      <div className="app-container">
        <h1>Task Manager</h1>
        <TaskForm onAddTask={this.addTask} />
        <div className="tasks-container">
          <div className="column">
            <h2>Tasks To Do</h2>
            <TaskList
              tasks={unfinishedTasks}
              onToggle={this.toggleTaskStatus}
              onDelete={this.deleteTask}
              buttonLabel="Done"
            />
          </div>
          <div className="column">
            <h2>Completed Tasks</h2>
            <TaskList
              tasks={finishedTasks}
              onToggle={this.toggleTaskStatus}
              onDelete={this.deleteTask}
              buttonLabel="Undo"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
