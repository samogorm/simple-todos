import React, {useState} from 'react';
import {TodoList} from './components/todo-list/TodoList';

import './App.scss';

export const App = () => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('todos')));

  const _didUpdate = (value) => setItems(value);

  return (
    <div className="app">
      <TodoList
        items={items}
        didUpdate={_didUpdate}
      />
      <div className="app-author">
        <p>A small web app by <a href="https://samogorman.dev/">Samantha O'Gorman</a></p>
        <p>NOTE: This app only stores data to your browsers local storage.</p>
      </div>
    </div>
  );
}