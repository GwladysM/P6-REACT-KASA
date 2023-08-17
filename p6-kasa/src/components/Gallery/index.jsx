import React, { useEffect, useState } from 'react';
import './gallery.scss';
import Card from '../Card';
import { NavLink } from 'react-router-dom';

function Gallery() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("/logements.json")
            .then(res => (res.json()))
            .then(res => setCards(res))
            .catch((error) => console.log(error))
    }, []);

    return (
        <div className='gallery'>
            <NavLink to='/logement' className="card__title">
                {cards.map(({ id, title, cover }) => (
                    <Card key={id} title={title} cover={cover} />
                ))}
            </NavLink>
        </div>
    )
}
export default Gallery