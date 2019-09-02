import React from 'react';

import './AddTodo.css';

const PlusIcon = require('./../../assets/plus.svg');

export const AddTodo = () => {

    return(
        <div className="add-todo">
            <input id="add-todo" placeholder="What needs to be done?" />
            <button onClick={() => {
                let input = document.querySelector('#add-todo');

                // get available todos.
                let todos = JSON.parse(localStorage.getItem('todos'));

                let todo = {
                    title: input.value,
                    completed: false
                }

                if(todos !== null) todos.push(todo);
                else todos = [todo];

                // Set new todos.
                localStorage.setItem('todos', JSON.stringify(todos));
            }}>
                <img src={PlusIcon} alt="Plus icon" />
            </button>
        </div>
    )

}