function Rating(props) {
    const rateValue = props.rateValue
    const rating = [1, 2, 3, 4, 5]
    return (
        <div>
            <p>rating</p>
            {
                rating.map((ratingElem) =>
                    rateValue >= ratingElem ? <span key={ratingElem.toString()}>Coucou</span> : null
                )
            }
        </div>
    )
}

export default Rating