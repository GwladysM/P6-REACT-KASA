import React from "react";
import './loader.scss'

function Loader() {
    return (
        <div className="container">
            <div className="load">
                <div className="load__bar load__bar--1"></div>
                <div className="load__bar load__bar--2"></div>
                <div className="load__bar load__bar--3"></div>
                <div className="load__bar load__bar--4"></div>
                <div className="load__bar load__bar--5"></div>
                <div className="load__bar load__bar--6"></div>
                <div className="load__bar load__bar--7"></div>
                <div className="load__bar load__bar--8"></div>
                <div className="load__bar load__bar--9"></div>
                <div className="load__bar load__bar--10"></div>
            </div>
        </div>
    )
}

export default Loader