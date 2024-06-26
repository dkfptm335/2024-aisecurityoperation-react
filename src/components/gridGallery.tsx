import React from 'react';
import Slider from "react-slick";
import {PhotoAlert} from "../layouts/photoAlert";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';
import {sliderGalleryImages} from "./images";
import {NextArrow, PrevArrow} from "./customArrows";
import useWindowSize from "../customhooks/useWindowSize";

export const CarouselGallery = () => {
    const {width} = useWindowSize();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        rows: 3,
        prevArrow: width >= 1753 ? <PrevArrow/> : undefined,
        nextArrow: width >= 1753 ? <NextArrow/> : undefined,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            {sliderGalleryImages.map((image, index) => (
                <div key={index} onClick={() => {
                    PhotoAlert.fire({
                        imageUrl: image.src,
                        imageWidth: '100%',
                        imageHeight: 'auto',
                        showCloseButton: true,
                        showConfirmButton: false,
                        text: image.description,
                    });
                }} className="gallery-carousel-item">
                    <img src={image.src} alt={`gallery-${index}`} width={image.width} height={image.height}/>
                </div>
            ))}
        </Slider>
    );
};
