import React from "react";
import './card.scss'
import { Link } from "react-router-dom";

function Card({ cover, title }) {
    return (
        <div className="gallery__card" onClick={handleClick} style={{
            backgroundImage: ``,
            background: `linear-gradient(180deg, rgba(255, 255, 255, 0.03) 50%, 
            rgba(0, 0, 0, 0.9) 100%), url(${cover})`,
            backgroundSize: "cover"
        }}>
            <h3>{title}</h3>
        </div>
    )
}

function handleClick({ cards, setCards }) {
    <Link to="/Logement"></Link>
}

export default Card