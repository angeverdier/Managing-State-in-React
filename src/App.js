import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import Filter from './components/Filter';

function App() {
  return (
    <div className="App">
      <h1>✅ ToDo App avec Redux</h1>
      <AddTask />
      <Filter />
      <ListTask />
    </div>
  );
}

export default App;
