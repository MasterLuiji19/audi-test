import React from "react";
import "./Form.css";
import Dropdown from "../Dropdown/Dropdown.js";
import Input from "../Input/Input";

function Form() {
    return (
        <div className="form">
            <h1 className="form-title">can't find what you looking for?</h1>
            <div className="flex-wrapper">
                <Dropdown/>
                <div className="media-wrapper">
                    <Dropdown/>
                    <span className="form__line"> </span>
                    <Dropdown/>
                </div>

            </div>
            <div className="flex-wrapper">
                <Dropdown/>
                <Dropdown/>
            </div>
            <div className="flex-wrapper justify-content-end">
                <Dropdown/>
                <Dropdown/>
            </div>
            <Input placeholder="Your massage"/>
        </div>
    );
}

export default Form
