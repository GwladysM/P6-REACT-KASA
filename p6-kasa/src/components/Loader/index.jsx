import React from "react";
import './loader.scss'

function Loader() {
    return (
        <div className="container">
            <div className="progress">
                <div className="progress__bar"></div>
            </div>
        </div>
    )
}

export default Loader