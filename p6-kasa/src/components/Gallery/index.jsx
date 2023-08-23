import './gallery.scss';
import Card from '../Card';
import { useContext } from "react"
import { FetchContext } from "../../utils/context"

function Gallery() {
    const { setCards, cards } = useContext(FetchContext)

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