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
            <div className="card__title">
                {cards.map(({ id, title, cover, pictures, description, host, rating, location, equipments, tags }) => (
                    <Card key={id}
                        id={id}
                        title={title}
                        cover={cover}
                        pictures={pictures}
                        description={description}
                        host={host} rating={rating}
                        location={location}
                        equipments={equipments}
                        tags={tags} />
                ))}
            </div>
        </div>
    )
}
export default Gallery