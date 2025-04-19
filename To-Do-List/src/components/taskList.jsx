import React, { PureComponent } from "react";
import TaskItem from "./taskItem";

class TaskList extends PureComponent {
  render() {
    const { tasks, onToggle, onDelete, buttonLabel } = this.props;

    if (tasks.length === 0) {
      return <p className="empty-list">No tasks here!</p>;
    }

    return (
      <ul className="task-list">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
            buttonLabel={buttonLabel}
          />
        ))}
      </ul>
    );
  }
}

export default TaskList;
