import React, { Component, PropTypes } from 'react';
import Checkbox from '../Checkbox';
import Button from '../Button';


import './Popup.css';

export default class Popup extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
        onCloseClick: PropTypes.func
    }

    state = {
        checked: false
    }

    handleCheckboxChange = (e) => {
        const checked = e.target.checked;
        this.setState({checked})
    }

    handleBtnClick = (e) => {
        const { onCloseClick } = this.props;
        e.preventDefault();
        onCloseClick();
    }

    render() {
        const { children, onCloseClick } = this.props;
        const {checked} = this.state;

        return (
            <div className="popup">
                <button 
                className="popup__close" 
                onClick={onCloseClick}
                />
                <h4 className="popup__title">Accept SONM presale terms to continue</h4>
                <div className="popup__content">{children}</div>
                <form action="#" className="popup__form">
                    <div className="popup__checkbox">
                        <Checkbox 
                            id="terms"
                            name="terms"
                            value="terms"
                            label="I agree with this terms"
                            handleChange={this.handleCheckboxChange}
                        />
                    </div>
                    <div className="popup__btn">
                        <Button
                            type="submit"
                            text="Show me presale deposit address" 
                            disabled={!checked}
                            handleClick={this.handleBtnClick}
                        />
                    </div>
                </form>
            </div>
        )
    }
}