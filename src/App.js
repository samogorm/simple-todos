import React from 'react';
import { TodoList } from './components/todo-list/TodoList';

import './App.css';
const items = JSON.parse(localStorage.getItem('todos'));

function App() {
  return (
    <div className="app">
      <TodoList 
        items={items}
      /> 
    </div>
  );
}

export default App;
