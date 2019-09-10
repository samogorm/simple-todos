import React from 'react';
import {TodoItem} from './../todo-item/TodoItem';
import {AddTodo} from '../add-todo/AddTodo';

import './TodoList.scss';

export const TodoList = (props) => {

    const _didUpdate = (value) => props.didUpdate(value);

    return(
        <div className="todo-list">
            <div className="todo-list__header">
                <h3>Todo List</h3>
            </div>
            <div className="todo-list__add-todo">
                <AddTodo 
                    didUpdate={_didUpdate}
                />
            </div>
            <div className="todo-list__body">
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
        </div>
    )

}