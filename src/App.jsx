import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addOrUpdateTask = (task) => {
    if (taskToEdit) {
      setTasks(tasks.map(t => t.id === task.id ? task : t));
      setTaskToEdit(null);
    } else {
      setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const editTask = (task) => {
    setTaskToEdit(task);
  };

  return (
    <div className="app">
      <h1>Ma To-Do List</h1>
      <TaskForm
        onSubmit={addOrUpdateTask}
        taskToEdit={taskToEdit}
        clearEdit={() => setTaskToEdit(null)}
      />
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onEdit={editTask}
        onToggle={toggleComplete}
      />
    </div>
  );
};

export default App;
