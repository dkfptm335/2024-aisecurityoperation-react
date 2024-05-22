import React from 'react';
import Slider from "react-slick";
import {PhotoAlert} from "../layouts/photoAlert";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';
import {sliderGalleryImages} from "./images";
import {NextArrow, PrevArrow} from "./customArrows";
import useWindowSize from "../customhooks/useWindowSize";

// export const GridGallery = () => {
//     return (
//         <div className="gallery">
//             {sliderGalleryImages.slice(0, 12).map((img, index) => (
//                 <div className="gallery-item" key={index}>
//                     <img src={img.src} alt={`gallery-${index}`}/>
//                 </div>
//             ))}
//         </div>
//     );
// };

export const CarouselGallery = () => {
    const {width} = useWindowSize();

    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: Math.min(4, sliderGalleryImages.length),
        slidesToScroll: Math.min(4, sliderGalleryImages.length),
        rows: 3,
        prevArrow: width >= 1753 ? <PrevArrow/> : undefined,
        nextArrow: width >= 1753 ? <NextArrow/> : undefined,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: Math.min(3, sliderGalleryImages.length),
                    slidesToScroll: Math.min(3, sliderGalleryImages.length),
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: Math.min(2, sliderGalleryImages.length),
                    slidesToScroll: Math.min(2, sliderGalleryImages.length),
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
