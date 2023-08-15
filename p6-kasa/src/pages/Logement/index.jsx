import './logement.scss'

function Logement() {
    return (
        <div className="logement">
            <img src="./assets/Image-source-1.png" alt="" />
            <div className='title__host'>
                <div className="logement__title">
                    <h2>Cozy loft on the Canal Saint-Martin</h2>
                    <h3>Location</h3>
                </div>
                <div className="logement__host">
                    <p>First name Last name</p>
                    <img src="./assets/Image-source-1.png" alt="" />
                </div>
            </div>
            <div className="logement__divers">
                <p className='logement__divers--tags'>Tags</p>
                <p>rating</p>
            </div>
            <div className="logement__informations">
                <div className="logement__description">
                    <div className='logement__informations--title'>
                        <h2>Description</h2>
                        <button><img src="./assets/Vector.png" alt="Afficher les détails" /></button>
                    </div>
                    <p className='logement__text'>ecrire la description</p>
                </div>
                <div className="logement__equipements">
                    <div className='logement__informations--title'>
                        <h2>Equipements</h2>
                        <button><img src="./assets/Vector.png" alt="Afficher les détails" /></button>
                    </div>
                    <p className='logement__text'>Lister les équipements</p>
                </div>
            </div>
        </div>
    )
}

export default Logement