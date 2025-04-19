import React, { PureComponent } from "react";

class TaskItem extends PureComponent {
  handleToggle = () => {
    this.props.onToggle(this.props.task.id);
  };

  render() {
    const { task, onDelete, buttonLabel } = this.props;

    return (
      <li className="task-item">
        <span className={task.completed ? "completed" : ""}>{task.text}</span>
        <button
          onClick={this.handleToggle}
          className={task.completed ? "undo-button" : "done-button"}
        >
          {buttonLabel}
        </button>
        <button onClick={() => onDelete(task.id)} className="remove-button">
          Delete
        </button>
      </li>
    );
  }
}

export default TaskItem;
