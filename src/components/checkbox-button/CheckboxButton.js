import React, {Component} from 'react';

import './CheckboxButton.scss';

const CheckIcon = require('./../../assets/check.svg');

export class CheckboxButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isChecked: this.props.checked
        }
    }


    render() {
        const { isChecked } = this.state;

        return(
            <button className={isChecked ? 'checkbox-button checkbox-button--checked' : 'checkbox-button'} data-checked={this.props.checked} onClick={this._setIsChecked}>
                <span>{isChecked ? this._getIcon() : ''}</span>
            </button>
        )
    }

    _setIsChecked = () => {
        this._passValueBackToParent(!this.state.isChecked);
        this.setState({ isChecked: !this.state.isChecked });
    }; 

    _getIcon = () => <img src={CheckIcon} alt="Check icon"/>;

    /**
    * This will pass the state value up one parent level.
    * Given that the prop callback is 'captureKeyValue'.
    *
    * @var {Any} value The value to be passed up to the parent.
    */
    _passValueBackToParent = (value) => {
        this.props.captureValue(value);
    }

}