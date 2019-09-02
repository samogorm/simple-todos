import React from 'react';
import {TodoItem} from './../todo-item/TodoItem';

import './TodoList.css';

export const TodoList = (props) => {

    return(
        <div className="todo-list">
            <div className="todo-list-header">
                <h3>Todo List</h3>
            </div>
            <div className="todo-list-body">
                {
                    props.items.map(item => {
                        return (
                            <TodoItem
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                completed={item.completed}
                            />
                        )
                    })
                }
            </div>
            <div className="todo-list-footer">

            </div>
        </div>
    )

}