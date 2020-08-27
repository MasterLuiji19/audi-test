import React from "react";
import "./Dropdown.css";

function Dropdown() {
    return (
        <div className="dropdown-box">
            <select className="dropdown-box__select">
                <option className="option" value="anytype">Any type (New and Pre-owned)</option>
                <option className="option" value="new">New</option>
                <option className="option" value="preowned">Pre-owned</option>
            </select>
        </div>
    );
}

export default Dropdown