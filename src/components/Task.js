import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../redux/taskSlice';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [newText, setNewText] = useState(task.description);

  const handleEdit = () => {
    dispatch(editTask({ id: task.id, newDescription: newText }));
    setEditMode(false);
  };

  return (
    <div>
      {editMode ? (
        <>
          <input value={newText} onChange={(e) => setNewText(e.target.value)} />
          <button onClick={handleEdit}>Valider</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
            {task.description}
          </span>
          <button onClick={() => setEditMode(true)}>Modifier</button>
        </>
      )}
      <button onClick={() => dispatch(toggleTask(task.id))}>
        {task.isDone ? 'Annuler' : 'Fait'}
      </button>
    </div>
  );
};

export default Task;
