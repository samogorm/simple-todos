import React from 'react';
import {getTodos, setTodos} from './../../constants/localStorage';

import './AddTodo.scss';

const PlusIcon = require('./../../assets/plus.svg');

export const AddTodo = (props) => {

    const _didUpdate = (value) => props.didUpdate(value);

    return(
        <div className="add-todo">
            <input id="add-todo" placeholder="What needs to be done?" />
            <button onClick={() => {
                let input = document.querySelector('#add-todo');

                // get available todos.
                let todos = getTodos();

                let todo = {
                    title: input.value,
                    completed: false
                }

                if(todos !== null) todos.push(todo);
                else todos = [todo];

                // Set new todos.
                setTodos(todos);

                input.value = '';

                // pass prompt back up the chain.
                _didUpdate(todos);
            }}>
                <img src={PlusIcon} alt="Plus icon" />
            </button>
        </div>
    )
}