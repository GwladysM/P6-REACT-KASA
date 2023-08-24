import React from "react"

function Rating(props) {
    const ratingValue = props.ratingValue
    const ratingScore = [1, 2, 3, 4, 5]

    return (
        <div className="rating">
            {
                ratingScore.map(
                    (ratingElem) =>
                        ratingValue >= ratingElem ?
                            <span key={ratingElem.toString()}>
                                <img src="./assets/star-active.png" alt="star" />
                            </span> : null
                )
            }
        </div>
    )
}

export default Rating

