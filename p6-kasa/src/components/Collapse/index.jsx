import { useState } from "react";
import "./collapse.scss";


function Collapse(props) {
    const [open, setOpen] = useState(false);

    function handleClick(button) {
        setOpen(!open)
        let chevron = document.getElementById("chevron")
        console.log(chevron)
        if (open) {
            chevron.className = "btn-active"
        } else {
            chevron.className = "btn"
        }
    }

    return (
        <div className="collapse">
            <div className="collapse__title">
                <h2>{props.label}</h2>
                <button onClick={handleClick} className="btn btn-active" id="chevron"><img src="./assets/Vector.png" alt="Afficher les détails" /></button>
            </div>
            {open &&
                <div className="collapse__text">
                    {props.children}
                </div>
            }
        </div>
    )
}
export default Collapse