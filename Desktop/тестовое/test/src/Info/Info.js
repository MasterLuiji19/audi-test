import React from "react";
import "./Info.css";
import Card from "../Card/Card.js";

function Info() {
    return (
        <div className="section">
            <div className="car">
                <img className="car-image" src={"/img/car.png"} alt="car"/>
            </div>
            <div className="info">
                <div className="info-title">
                    <h1 className="info-title__title" data-text="2019 Q5">2019 Q5</h1>
                    <h3 className="info-title__subtitle">2.OT Quattro Premium</h3>
                </div>
                <div className="info-cards">
                    <Card
                        value="499"
                        deposit
                    />
                    <Card value="479"/>
                </div>
                <span className="info-underline"> </span>
                <p className="info-bottom_text">MSRP: $47,450. 10K mi/yr. lease excludes tax, title, and plate free. For qualified customers though
                    Audi Financial Services. Vehicle image shown for illustrative purposes only. #WC2776. Offer ends 09/03/19.</p>
            </div>
        </div>
    );
}
export default Info;