import "./collapse.scss";

function handleClick(button) {
    alert("ouvrir cette description ?")
}

function Collapse() {
    return (
        <div className="collapse">
            <div>
                <div className="collapse__title">
                    <h2 >Fiabilité</h2>
                    <button onClick={handleClick}><img src="./assets/Vector.png" alt="Afficher les détails" /></button>
                </div>
                <p className="collapse__text">
                    Les annonces postées sur Kasa garantissent une fiabilité totale.
                    Les photos sont conformes aux logements, et toutes les informations
                    sont régulièrements vérifiées par nos équipes.
                </p>
            </div>
            <div>
                <div className="collapse__title">
                    <h2 >Respect</h2>
                    <button onClick={handleClick}><img src="./assets/Vector.png" alt="Afficher les détails" /></button>
                </div>
                <p className="collapse__text">
                    La bienveillance fait partie des valeurs fondatrices de Kasa.
                    Tout comportement discriminatoire ou de perturbation du
                    voisinage entrainera une exclusion de notre plateforme.
                </p>
            </div>
            <div>
                <div className="collapse__title">
                    <h2 >Service</h2>
                    <button onClick={handleClick}><img src="./assets/Vector.png" alt="Afficher les détails" /></button>
                </div>
                <p className="collapse__text">
                    La bienveillance fait partie des valeurs fondatrices de Kasa.
                    Tout comportement discriminatoire ou de perturbation du
                    voisinage entrainera une exclusion de notre plateforme.
                </p>
            </div>
            <div>
                <div className="collapse__title">
                    <h2 >Sécurité</h2>
                    <button onClick={handleClick}><img src="./assets/Vector.png" alt="Afficher les détails" /></button>
                </div>
                <p className="collapse__text">
                    La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
                    que pour les voyageurs, chaque logement correspond aux critères
                    de sécurité établis par nos services. En laissant une note aussi
                    bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
                    que les standards sont bien respectés. Nous organisons également des
                    ateliers sur la sécurité domestique pour nos hôtes.
                </p>
            </div>
        </div>
    )
}

export default Collapse