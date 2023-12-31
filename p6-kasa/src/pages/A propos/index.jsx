import React from "react";
import AboutBanner from "../../components/AboutBanner";
import Collapse from "../../components/Collapse";
import './aboutpage.scss'

function APropos() {
    return (
        <div className="about__banner">
            <AboutBanner />
            <Collapse label="Fiabilité">
                <p>
                    Les annonces postées sur Kasa garantissent une fiabilité totale.
                    Les photos sont conformes aux logements, et toutes les informations
                    sont régulièrements vérifiées par nos équipes.
                </p>
            </Collapse>
            <br />
            <Collapse label="Respect">
                <p>
                    La bienveillance fait partie des valeurs fondatrices de Kasa.
                    Tout comportement discriminatoire ou de perturbation du
                    voisinage entrainera une exclusion de notre plateforme.
                </p>
            </Collapse>
            <br />
            <Collapse label="Service">
                <p>
                    La bienveillance fait partie des valeurs fondatrices de Kasa.
                    Tout comportement discriminatoire ou de perturbation du
                    voisinage entrainera une exclusion de notre plateforme.
                </p>
            </Collapse>
            <br />
            <Collapse label="Sécurité">
                <p>
                    La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
                    que pour les voyageurs, chaque logement correspond aux critères
                    de sécurité établis par nos services. En laissant une note aussi
                    bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
                    que les standards sont bien respectés. Nous organisons également des
                    ateliers sur la sécurité domestique pour nos hôtes.

                </p>
            </Collapse>
        </div>
    )
}

export default APropos