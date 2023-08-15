import React from "react";
import './card.scss'

function Card({ location }) {
    return (
        <div>
            <div className="gallery__card" style={{
            }}>
                <h3>{location.title}</h3>
                <img src="${location.cover}" alt="" />
            </div>
        </div>
    )
}

export default Card