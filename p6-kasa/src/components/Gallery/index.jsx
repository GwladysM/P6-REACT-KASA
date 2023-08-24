import './gallery.scss';
import Card from '../Card';
import { useState, useEffect } from 'react';

function Gallery() {
    const [logementsData, setLogementsData] = useState([]);

    useEffect(() => {
        fetch("/logements.json")
            .then(res => (res.json()))
            .then(res => setLogementsData(res))
            .catch((error) => console.log(error))

    }, []);

    return (
        <div className='gallery'>
            <div className="card__title">
                {logementsData.map(({ id, title, cover }) => (
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