import React from "react";
import './RadioButton.css';

function RadioButton() {
    return (
        <div className="radio-toolbar">
            <label className="label">
                <input type="radio"
                       className="radio-button"
                       value="email"
                       name="name1"
                />
                <span className="fake"></span>
                <span className="text">Prefer e-mail</span>
            </label>
            <label  className="label">
                <input type="radio"
                       className="radio-button"
                       value="phone"
                       name="name1"
                />
                <span className="fake"></span>
                <span className="text">Prefer phone</span>
            </label>
        </div>
    );
}

export default RadioButton