import React from 'react';
import Slider from "react-slick";
import {PhotoAlert} from "../layouts/photoAlert";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';
import {sliderGalleryImages} from "./images";
import {PrevArrow, NextArrow} from "./customArrows";

export const GridGallery = () => {
    return (
        <div className="gallery">
            {sliderGalleryImages.slice(0, 12).map((img, index) => ( // 첫 12개 이미지만 표시합니다.
                <div className="gallery-item" key={index}>
                    <img src={img.src} alt={`gallery-${index}`}/>
                </div>
            ))}
        </div>
    );
};

export const CarouselGallery = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        rows: 3,
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    prevArrow: undefined,
                    nextArrow: undefined,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    prevArrow: undefined,
                    nextArrow: undefined,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow: undefined,
                    nextArrow: undefined,
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
                        showConfirmButton: false
                    });
                }} className="gallery-carousel-item">
                    <img src={image.src} alt={`gallery-${index}`} width={image.width} height={image.height}/>
                </div>
            ))}
        </Slider>
    );
};