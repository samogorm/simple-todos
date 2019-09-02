import React, {Component} from 'react';
import { TodoList } from './components/todo-list/TodoList';

import './App.css';

export default class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      items: JSON.parse(localStorage.getItem('todos'))
    }
  }

  render() {
    return (
      <div className="app">
        <TodoList
          items={this.state.items}
        />
      </div>
    );
  }

  
}