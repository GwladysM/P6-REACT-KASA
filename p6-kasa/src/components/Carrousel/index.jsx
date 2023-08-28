import { useState } from "react"
import './carrousel.scss'

function Carrousel({ slides }) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    return (
        <div className="sliderStyles">
            {slides.length > 1 && (
                <>
                    <div className="leftVectorStyles" onClick={goToPrevious}>
                        <img src='/assets/Vector-prev.png' alt="Previous" />
                    </div>
                    <div className="rightVectorStyles" onClick={goToNext}>
                        <img src="/assets/Vector-next.png" alt="Next" />
                    </div>
                    <div className="numberContainerStyles">
                        <div className="numberStyles">
                            {currentIndex + 1} / {slides.length}
                        </div>
                    </div>
                </>
            )}
            <div className="slideStyles" style={{
                backgroundImage: `url(${slides[currentIndex]})`
            }}>
            </div>
        </div>
    )
}

export default Carrousel