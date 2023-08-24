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

function Logement() {
    //Récupération de l'ID :
    const { id } = useParams()

    //Création des constantes pour state des données et du chargement de la page :
    const [logementsData, setLogementsData] = useState([]);
    const [loading, setLoading] = useState(true);

    //Appel à fetch pour récup des données du fichier json :
    useEffect(() => {
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
    if (loading) {
        return <div>Loading...</div>
    }

    //Msg si le logement n'a pas été trouvé :
    if (!logement) {
        return <Error />
    }

    const containerStyles = {
        width: '1240px',
        height: '415px',
        margin: '0 auto',
    }

    return (
        <div className="logement">
            <div style={containerStyles}>
                <Carrousel slides={logement.pictures} />
            </div>
            <div className='title__host'>
                <TitleLocation title={logement?.title} location={logement.location} />
                <Host hostName={logement.host.name} hostPicture={logement.host.picture} />
            </div>
            <div className="logement__divers">
                <Tags tags={logement.tags} />
                <Rating ratingValue={logement.rating} />
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
                        <ul className="logement__equipements__list">
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

//{ title, cover, pictures, description, host, rating, location, equipments, tags }