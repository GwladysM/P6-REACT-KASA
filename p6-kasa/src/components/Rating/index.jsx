import React from "react"
import "./rating.scss"

function Rating(props) {
    const ratingValue = props.ratingValue
    const maxValue = 5
    const ratingArray = Array.from({ length: maxValue })


    return (
        <div className="rating">
            {ratingArray.map((_, index) => (
                <img
                    key={index}
                    src={index < ratingValue ? "public/assets/star-active.png" : "public/assets/star-inactive.png"}
                    alt={index < ratingValue ? "starActive" : "starInactive"}
                    className="starImage"
                />
            ))}
        </div>
    )
}

export default Rating