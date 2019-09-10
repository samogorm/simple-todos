import React, {useState, Component} from 'react';

import './CheckboxButton.scss';

const CheckIcon = require('./../../assets/check.svg');

export const CheckboxButton = (props) => {
    const [isChecked, setIsChecked] = useState(props.checked);

    const _setIsChecked = () => {
        _passValueBackToParent(!isChecked);
        setIsChecked(!isChecked);
    };

    const _getIcon = () => <img src={CheckIcon} alt="Check icon" />;

    /**
    * This will pass the state value up one parent level.
    * Given that the prop callback is 'captureKeyValue'.
    *
    * @var {Any} value The value to be passed up to the parent.
    */
    const _passValueBackToParent = (value) => props.captureValue(value);

    return (
        <button 
            className={isChecked ? 'checkbox-button checkbox-button--checked' : 'checkbox-button'} 
            data-checked={props.checked} 
            onClick={_setIsChecked}>
            <span>{isChecked ? _getIcon() : ''}</span>
        </button>
    )
}