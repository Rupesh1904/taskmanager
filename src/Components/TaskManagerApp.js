import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';

const TaskManagerApp = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = newTask => {
    setTasks([...tasks, { id: Date.now(), name: newTask, completed: false }]);
  };

  const toggleComplete = taskId => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = taskId => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const markAllTasksAsCompleted = () => {
    const updatedTasks = tasks.map(task => ({ ...task, completed: true }));
    setTasks(updatedTasks);
  };

  const clearCompletedTasks = () => {
    const updatedTasks = tasks.filter(task => !task.completed);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1 className="header">Task Manager</h1>
      <div className="button-container">
        <button className="add-task-button" onClick={markAllTasksAsCompleted}>
          Mark All as Completed
        </button>
        <button className="add-task-button" onClick={clearCompletedTasks}>
          Clear Completed
        </button>
      </div>
      <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
      <AddTaskForm addTask={addTask} />
    </div>
  );
};

export default TaskManagerApp;
