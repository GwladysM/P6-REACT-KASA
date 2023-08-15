import React, { useEffect, useState } from 'react';
import './gallery.scss';
import Card from '../Card';

function Gallery() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/logements.json")
            .then(res => (res.json()))
            .then(res => setData(res))
    }, []);

    return (
        <div className='gallery'>
            {data.map((location, index) => (
                <Card key={index} location={location} />
            ))}
        </div>
    )
}
export default Gallery