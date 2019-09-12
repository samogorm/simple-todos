import React, {useState} from 'react';
import {CheckboxButton} from '../checkbox-button/CheckboxButton';
import {getTodos, setTodos} from './../../constants/localStorage';

import './TodoItem.scss';

const CrossIcon = require('./../../assets/times.svg');

export const TodoItem = (props) => {
    const [completed, setCompleted] = useState(props.completed);

    /**
    * Gets the option value from the child component.
    * 
    * @var {Object} value the object passed from the child.
    */
    const _captureOptionValue = (value) => {
        setCompleted(value);

        // go and update the value in the localstorage.
        let todos = getTodos();
        let todo = todos[props.id];
        todo.completed = value;

        // update the todos.
        setTodos(todos);

        _didUpdate(todos);
    };

    const _didUpdate = (value) => props.didUpdate(value);

    const _removeTodo = (target) => {
        let todos = getTodos();
        let index = target.getAttribute('data-todo');

        todos.splice(index, 1);

        // update the localstorage.
        setTodos(todos);

        _didUpdate(todos);
    }

    return(
        <div id={props.id} className={completed ? 'todo-item todo-item--checked' : 'todo-item'}>
            <CheckboxButton 
                checked={props.completed}
                captureValue={_captureOptionValue}
            />
            <p>{props.title}</p>
            
            <div data-todo={props.id} className="delete-todo" onClick={(event) => _removeTodo(event.target.parentElement)}>
                <img src={CrossIcon} alt="Cross icon"/>
            </div>
        </div>
    )
}