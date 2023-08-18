import React from "react";
import './card.scss'
import { Link } from "react-router-dom";

function Card({ id, title, cover }) {
    function handleClick() {
        console.log(id)
    }

    return (
        <Link to={`/logement/${id}`} onClick={handleClick} className="gallery__card" style={{
            backgroundImage: ``,
            background: `linear-gradient(180deg, rgba(255, 255, 255, 0.03) 50%, 
            rgba(0, 0, 0, 0.9) 100%), url(${cover})`,
            backgroundSize: "cover"
        }}>
            <h3>{title}</h3>
        </Link>
    )
}

export default Card