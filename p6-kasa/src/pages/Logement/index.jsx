import './logement.scss'
import Collapse from '../../components/Collapse'
import Rating from '../../components/Rating'
import Tags from '../../components/Tags'
import Host from '../../components/Host'
import TitleLocation from '../../components/Title-Location'
import Carrousel from '../../components/Carrousel'


function Logement() {

    return (
        <div className="logement">
            <Carrousel />
            <div className='title__host'>
                <TitleLocation />
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