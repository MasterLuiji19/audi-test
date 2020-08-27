import React from 'react';
import './Intro.css';
import Input from "../Input/Input.js";
import RadioButton from "../RadioButton/RadioButton.js";
import Button from "../Button/Button.js";
import Form from "../Form/Form.js";

function Intro() {
    return (
        <div className="wrapper-info">
            <div className="contact-info">
                <h1 className="contact-info__title">contact info</h1>
                <p className="contact-info__description">We appreciate your interest in our inventory, and apologize we
                    do not have model details displaying
                    on the website at this time.</p>
                <p className="contact-info__description">Please fill the form out below and our team will quickly
                    respond, or, please call us at 765-470-4091
                    for more information.</p>
                <Input placeholder="First name"/>
                <Input placeholder="Last name"/>
                <Input placeholder="E-mail"/>
                <Input placeholder="Phone"/>
                <RadioButton/>
                <Button text="contact us"/>
            </div>
            <div className="form-regist">
                <Form/>
                <p className="form-regist__text">By submitting this form, you agree to be contacted with information
                    regarding the vehicle you are searching for.</p>
                <Button text="let us find it"/>
            </div>
        </div>
    );
}

export default Intro