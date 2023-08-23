import './gallery.scss';
import Card from '../Card';
import { useState, useEffect } from 'react';

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
                {cards.map(({ id, title, cover }) => (
                    <Card key={id}
                        id={id}
                        title={title}
                        cover={cover} />
                ))}
            </div>
        </div>
    )
}
export default Gallery