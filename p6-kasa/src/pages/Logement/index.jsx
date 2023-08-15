function Logement({ title, pictures, description, name, picture, rating, location, equipments, tags }) {
    return (
        <div className="logement">
            <img src={pictures} alt="" />
            <div className="logement__title">
                <h2>{title}</h2>
                <h3>{location}</h3>
            </div>
            <div className="logement__host">
                <p>{name}</p>
                <img src={picture} alt="" />
            </div>
            <div className="logement__divers">
                <p>{tags}</p>
                <p>{rating}</p>
            </div>
            <div className="logement__informations">
                <div className="logement__description">
                    <div>
                        <h2>Description</h2>
                        <button><img src="./assets/Vector.png" alt="Afficher les détails" /></button>
                    </div>
                    <p>{description}</p>
                </div>
                <div className="logement__equipements">
                    <div>
                        <h2>Equipements</h2>
                        <button><img src="./assets/Vector.png" alt="Afficher les détails" /></button>
                    </div>
                    <p>{equipments}</p>
                </div>
            </div>
        </div>
    )
}

export default Logement