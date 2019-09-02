import React from 'react';
import { TodoList } from './components/todo-list/TodoList';

import './App.css';
const items = [
  {
    id: 1,
    title: 'Eat a banana.',
    completed: false
  },
  {
    id: 3,
    title: 'Strenth training.',
    completed: true
  },
  {
    id: 4,
    title: 'Indoor cycle.',
    completed: true
  },
  {
    id: 5,
    title: 'Create a todo app.',
    completed: true
  }
];

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
