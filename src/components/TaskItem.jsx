import React from 'react';

const TaskItem = ({ task, onDelete, onEdit, onToggle }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <h4>{task.name}</h4>
      <p>{task.description}</p>
      <button onClick={() => onToggle(task.id)}>
        {task.completed ? 'Annuler' : 'Terminer'}
      </button>
      <button onClick={() => onEdit(task)}>Modifier</button>
      <button onClick={() => {
        if (window.confirm("Supprimer cette tâche ?")) {
          onDelete(task.id);
        }
      }}>Supprimer</button>
    </div>
  );
};

export default TaskItem;
