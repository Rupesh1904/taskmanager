import React, { useState } from 'react';

const AddTaskForm = ({ addTask }) => {
  const [newTaskName, setNewTaskName] = useState('');

  const handleAddTask = () => {
    if (newTaskName.trim() !== '') {
      addTask(newTaskName);
      setNewTaskName('');
    }
  };

  return (
    <div className="add-task-form">
      <input
        type="text"
        className="add-task-input"
        value={newTaskName}
        onChange={event => setNewTaskName(event.target.value)}
        placeholder="Enter a new task..."
      />
      <button className="add-task-button" onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
};

export default AddTaskForm;
