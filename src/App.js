import React, {Component} from 'react';
import { TodoList } from './components/todo-list/TodoList';

import './App.scss';

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
          didUpdate={this._didUpdate}
        />
        <div className="app-author">
          <p>A small web app by <a href="https://samogorman.dev/">Samantha O'Gorman</a></p>
          <p>NOTE: This app only stores data to your browsers local storage.</p>
        </div>
      </div>
    );
  }

  _didUpdate = (value) => {
    this.setState({items: value})
  }


}