import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/taskSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(setFilter('ALL'))}>Toutes</button>
      <button onClick={() => dispatch(setFilter('DONE'))}>Faites</button>
      <button onClick={() => dispatch(setFilter('NOT_DONE'))}>Pas faites</button>
    </div>
  );
};

export default Filter;
