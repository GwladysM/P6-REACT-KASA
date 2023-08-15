import React, { useEffect, useState } from 'react';
import './gallery.scss';
import Card from '../Card';

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
            {cards.map(({ id, title, cover }) => (
                <Card key={id} title={title} cover={cover} cards={cards} setCards={setCards} />
            ))}
        </div>
    )
}
export default Gallery