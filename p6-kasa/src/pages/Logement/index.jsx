import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './logement.scss'
import Collapse from '../../components/Collapse'
import Rating from '../../components/Rating'
import Tags from '../../components/Tags'
import Host from '../../components/Host'
import TitleLocation from '../../components/Title-Location'
import Carrousel from '../../components/Carrousel'
import Error from '../../components/Error'
import Loader from '../../components/Loader'

function Logement() {
    //Récupération de l'ID :
    const { id } = useParams()

    //Création des constantes pour state des données et du chargement de la page :
    const [logementsData, setLogementsData] = useState([]);
    const [loading, setLoading] = useState(false);

    //Appel à fetch pour récup des données du fichier json :
    useEffect(() => {
        setLoading(true)
        fetch(`/logements.json`)
            .then(res => res.json())
            .then(data => {
                setLogementsData(data);
                setLoading(false);
            })
            .catch((error) => console.log(error),
                setLoading(false)
            )
    }, [id]);

    //Utilisation du find() pour cibler l'ID du logement sélectionné :
    const logement = logementsData.find((logementsData) => logementsData.id === id)

    //Msg de chargement si données pas encore prêtes :
    if (setLoading === true) {
        return <Loader />
    }
    //Msg si le logement n'a pas été trouvé :
    else if (!logement) {
        return <Error />
    }

    return (
        <div className="logement">
            <div className='container__caroussel'>
                <Carrousel slides={logement.pictures} />
            </div>
            <div className="logement__presentation">
                <div className='title__tags'>
                    <TitleLocation title={logement?.title} location={logement.location} />
                    <Tags tags={logement.tags} />
                </div>
                <div className="rating__host">
                    <Host hostName={logement.host.name} hostPicture={logement.host.picture} />
                    <Rating ratingValue={logement.rating} />
                </div>
            </div>
            <div className="logement__informations">
                <div className="logement__description">
                    <Collapse label="Description">
                        <p>
                            {logement.description}
                        </p>
                    </Collapse>
                </div>
                <div className="logement__equipements">
                    <Collapse label="Equipements">
                        <ul className="logement__equipements--list">
                            {logement.equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}
                        </ul>
                    </Collapse>
                </div>
            </div>
        </div>
    )
}

export default Logement