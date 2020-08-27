import React from "react";
import './Card.css';

const Card = ({value, deposit = false}) => {
    const text =  deposit ? '| $0 Security Deposit' : '';
    return (
        <div className="info-card">
            <p className="info-card__name">everyone qualifies</p>
            <p className="info-card__price">$ <span className="info-card__price_value">{value}</span> 39 Mo. Lease</p>
            <p className="info-card__deposit">$3,500 DUe at Signing {text}</p>
        </div>
    );
}

export default Card