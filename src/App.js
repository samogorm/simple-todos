import React, {useState} from 'react';
import {TodoList} from './components/todo-list/TodoList';
import {Author} from './components/author/Author';
import {getTodos} from './constants/localStorage';

export const App = () => {
  const [items, setItems] = useState(getTodos());

  const _didUpdate = (value) => setItems(value);

  return (
    <div className="app">
      <TodoList
        items={items}
        didUpdate={_didUpdate}
      />
      <Author 
        url="https://samogorman.dev/"
        name="Samantha O'Gorman"
      />
    </div>
  );
}