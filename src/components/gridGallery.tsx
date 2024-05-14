import React, {useState} from 'react';
import Slider from "react-slick";
import {Gallery} from "react-grid-gallery";
import {PhotoAlert} from "../layouts/photoAlert";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'; // CSS 파일을 임포트합니다.

export const images = [
    {
        src: 'assets/gallery/0.jpeg',
        width: 400,
        height: 225,
    },
    {
        src: 'assets/gallery/1.jpg',
        width: 400,
        height: 225,
    },
    {
        src: 'assets/gallery/2.jpeg',
        width: 400,
        height: 225,
    },
    {
        src: 'assets/gallery/3.jpg',
        width: 400,
        height: 225,
    },
    {
        src: 'assets/gallery/4.jpg',
        width: 400,
        height: 225,
    },
    {
        src: 'assets/gallery/5.jpg',
        width: 400,
        height: 225,
    },
    {
        src: 'assets/gallery/6.jpg',
        width: 400,
        height: 225,
    },
    {
        src: 'assets/gallery/7.jpg',
        width: 400,
        height: 225,
    },
    {
        src: 'assets/gallery/8.jpg',
        width: 400,
        height: 225,
    },
    {
        src: 'assets/gallery/9.jpg',
        width: 400,
        height: 225,
    },
    {
        src: 'assets/gallery/10.jpg',
        width: 400,
        height: 225,
    },
    {
        src: 'assets/gallery/4.jpg',
        width: 400,
        height: 225,
    },
    {
        src: 'assets/gallery/1.jpg',
        width: 400,
        height: 225,
    },    {
        src: 'assets/gallery/3.jpg',
        width: 400,
        height: 225,
    },
];

export const GridGallery = () => {
    return (
        <div className="gallery">
            {images.slice(0, 12).map((img, index) => ( // 첫 12개 이미지만 표시합니다.
                <div className="gallery-item" key={index}>
                    <img src={img.src} alt={`gallery-${index}`} />
                </div>
            ))}
        </div>
    );
};

export const CarouselGallery = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        rows:3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
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
            {images.map((image, index) => (
                <div key={index} onClick={() => {
                    PhotoAlert.fire({
                        imageUrl: image.src,
                        imageWidth: '100%',
                        imageHeight: 'auto',
                        confirmButtonText: '닫기',
                    });
                }}>
                    <img src={image.src} alt={`gallery-${index}`} width={image.width} height={image.height} />
                </div>
            ))}
        </Slider>
    );
};