import React from 'react';
import Slider from "react-slick";
import { PhotoAlert } from "../layouts/photoAlert";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';
import { sliderGalleryImages } from "./images";
import { PrevArrow, NextArrow } from "./customArrows";
import useWindowSize from "../customhooks/useWindowSize";

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
    const { width } = useWindowSize(); // 현재 윈도우 크기 가져오기

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        rows: 3,
        prevArrow: width >= 1753 ? <PrevArrow /> : undefined, // 1024px 이상일 때만 화살표 표시
        nextArrow: width >= 1753 ? <NextArrow /> : undefined, // 1024px 이상일 때만 화살표 표시
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
                        showConfirmButton: false
                    });
                }} className="gallery-carousel-item">
                    <img src={image.src} alt={`gallery-${index}`} width={image.width} height={image.height} />
                </div>
            ))}
        </Slider>
    );
};