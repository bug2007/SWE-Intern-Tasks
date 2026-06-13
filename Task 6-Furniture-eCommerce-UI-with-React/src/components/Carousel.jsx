import innerPeaceImg from '../assets/innerPeace.png';
import carouselImg1 from '../assets/carouselimg1.png';
import carouselImg2 from '../assets/carouselimg2.png';
import carouselImg3 from '../assets/carouselimg3.png';
import carouselImg4 from '../assets/carouselimg4.png';
import carouselImg5 from '../assets/carouselimg5.png';
import { useState } from 'react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const carouselImages = [
    carouselImg1,
    carouselImg2,
    carouselImg3,
    carouselImg4,
    carouselImg5
]

export default function Carousel() {    
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
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={24}          
                        slidesPerView={'auto'} // lets CSS control slide widths for off-screen overflow
                        loop={true}
                        // slidesOffsetAfter={100}
                        simulateTouch={true}  // Enables desktop mouse dragging
                        grabCursor={true}
                        navigation 
                        pagination={{ clickable: true }}
                    >
                        {carouselImages.map((carouselImage, index) => (
                            <SwiperSlide key={index}>
                                <img src={carouselImage} alt='' />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}