import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
  const { list, filter } = useSelector((state) => state.tasks);

  const filteredTasks =
    filter === 'ALL'
      ? list
      : filter === 'DONE'
      ? list.filter((t) => t.isDone)
      : list.filter((t) => !t.isDone);

  return (
    <div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
