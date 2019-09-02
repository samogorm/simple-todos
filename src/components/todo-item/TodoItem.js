import React, {useState} from 'react';
import { CheckboxButton } from '../checkbox-button/CheckboxButton';

import './TodoItem.css';

const CrossIcon = require('./../../assets/times.svg');

export const TodoItem = (props) => {
    const [completed, setCompleted] = useState(props.completed);

    /**
    * Gets the option value from the child component.
    * 
    * @var {Object} value the object passed from the child.
    */
    const _captureOptionValue = (value) => setCompleted(value);

    return(
        <div id={props.id} className={completed ? 'todo-item todo-item--checked' : 'todo-item'}>
            <CheckboxButton 
                checked={props.completed}
                captureValue={_captureOptionValue}
            />
            <p>{props.title}</p>
            
            <div className="delete-todo">
                <img src={CrossIcon} alt="Cross icon"/>
            </div>
        </div>
    )
}