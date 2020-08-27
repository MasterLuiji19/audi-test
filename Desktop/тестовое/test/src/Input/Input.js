import React from "react";
import "./Input.css";

const Input = ({placeholder, pattern}) => {

    return (
        <div className="input-list">
            <input className="input" placeholder={placeholder} pattern={pattern} required />
        </div>
    );
}

export default Input