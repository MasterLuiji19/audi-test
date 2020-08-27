import React from "react";
import './Button.css';

const Button = ({text}) => {
    return (
        <div className="submit">
            <button className="button">{text}</button>
        </div>
    );
}

export default Button