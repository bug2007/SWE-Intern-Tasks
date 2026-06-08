import innerPeaceImg from '../assets/innerPeace.png';
import carouselImg1 from '../assets/carouselimg1.png';
import carouselImg2 from '../assets/carouselimg2.png';
import carouselImg3 from '../assets/carouselimg3.png';
import carouselImg4 from '../assets/carouselimg4.png';
import carouselImg5 from '../assets/carouselimg5.png';
import { useState } from 'react';

const carouselImages = [
    carouselImg1,
    carouselImg2,
    carouselImg3,
    carouselImg4,
    carouselImg5
]

export default function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    function handleNext() {
        setActiveIndex(prevIndex => prevIndex + 1);
    }
    function handlePrev() {
        setActiveIndex(prevIndex => prevIndex - 1);
    }

    const buttons = [];
    for (let i=0; i < carouselImages.length; i++) {
        buttons.push(<button key={i} className={i === activeIndex ? 'active' : ''} />)
    }

    const offset = -(activeIndex * (372 + 24));

    return (
        <div className="carousel">
            <div className="text-content">
                <p>50+ Beautiful rooms inspiration</p>
                <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                <button>Explore More</button>
            </div>
            <div className="innerPeace-carousel">
                <div className="inner-peace">
                    <img src={innerPeaceImg} alt="" />
                    <div className="overlay">
                        <p><span>01</span><span></span><span>Bedroom</span></p>
                        <p>Inner Peace</p>
                    </div>
                    <div className="arrow-box">
                        <i className="bi bi-arrow-right"></i>
                    </div>
                </div>
                <div className="carousel-images">
                    <div className="images" style={{transform: `translateX(${offset}px)`}}>
                        {carouselImages.map((carouselImage, index) => 
                        <img style={{visibility: index < activeIndex ? 'hidden' : 'visible'}} key={carouselImage} src={carouselImage} />
                    )}
                    </div>
                    <div className='navButtons'>
                        {buttons}
                    </div>
                    <button onClick={handlePrev} style={{display: activeIndex === 0 ? 'none' : 'block'}} className='prevArrow'><i className="bi bi-chevron-left"></i></button>
                    <button onClick={handleNext} style={{display: activeIndex === carouselImages.length - 1 ? 'none' : 'block'}} className='nextArrow'><i className="bi bi-chevron-right"></i></button>
                </div>
            </div>
        </div>
    )
}