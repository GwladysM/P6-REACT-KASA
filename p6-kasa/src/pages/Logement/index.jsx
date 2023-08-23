import { FetchContext } from '../../utils/context'
import { useContext } from 'react'
import { useParams } from "react-router-dom";
import './logement.scss'
import Collapse from '../../components/Collapse'
import Rating from '../../components/Rating'
import Tags from '../../components/Tags'
import Host from '../../components/Host'
import TitleLocation from '../../components/Title-Location'
import Carrousel from '../../components/Carrousel'

function Logement() {
    const { id } = useParams()

    const { setCards, cards } = useContext(FetchContext)

    const logement = cards.find((cards) => cards.id === id)
    console.log(logement)

    //{ title, cover, pictures, description, host, rating, location, equipments, tags }

    return (
        <div className="logement">
            <Carrousel />
            <div className='title__host'>
                {cards.map(({ id, title, location }) => (
                    <TitleLocation
                        key={id}
                        title={title}
                        location={location} />
                ))}
                <Host />
            </div>
            <div className="logement__divers">
                <Tags />
                <Rating />
            </div>
            <div className="logement__informations">
                <div className="logement__description">
                    <Collapse label="Description">
                        <p>
                            ecrire la description
                        </p>
                    </Collapse>
                </div>
                <div className="logement__equipements">
                    <Collapse label="Equipements">
                        <p>
                            ecrire les équipements
                        </p>
                    </Collapse>
                </div>
            </div>
        </div>
    )
}

export default Logement

