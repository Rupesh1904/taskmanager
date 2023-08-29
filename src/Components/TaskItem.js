import React from 'react';

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  const handleToggleComplete = () => {
    toggleComplete(task.id);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggleComplete}
      />
      <span className="task-name">{task.name}</span>
      <div>
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
