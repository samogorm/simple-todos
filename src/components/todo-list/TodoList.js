import React from 'react';
import {TodoItem} from './../todo-item/TodoItem';
import { AddTodo } from '../add-todo/AddTodo';

import './TodoList.css';

export const TodoList = (props) => {

    const _didUpdate = (value) => {
        props.didUpdate(value);
    }

    return(
        <div className="todo-list">
            <div className="todo-list-header">
                <h3>Todo List</h3>
            </div>
            <div className="todo-list-add-todo">
                <AddTodo 
                    didUpdate={_didUpdate}
                />
            </div>
            <div className="todo-list-body">
                {
                    props.items !== null ? props.items.map((item, index) => {
                        return (
                            <TodoItem
                                key={index}
                                id={index}
                                title={item.title}
                                completed={item.completed}
                                didUpdate={_didUpdate}
                            />
                        )
                    }) : null
                }
            </div>
            <div className="todo-list-footer">

            </div>
        </div>
    )

}