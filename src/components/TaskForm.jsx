import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSubmit, taskToEdit, clearEdit }) => {
  const [task, setTask] = useState({ name: '', description: '' });

  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit);
    }
  }, [taskToEdit]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.name.trim() || !task.description.trim()) {
      alert("Veuillez remplir tous les champs.");
      return;
    }
    onSubmit(task);
    setTask({ name: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Nom de la tâche"
        value={task.name}
        onChange={handleChange}
      />
      <input
        name="description"
        placeholder="Description"
        value={task.description}
        onChange={handleChange}
      />
      <button type="submit">{taskToEdit ? "Modifier" : "Ajouter"}</button>
      {taskToEdit && <button onClick={clearEdit}>Annuler</button>}
    </form>
  );
};

export default TaskForm;
