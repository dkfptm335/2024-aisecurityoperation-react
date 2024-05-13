import {Gallery} from "react-grid-gallery";
import styled from "styled-components";
import {PhotoAlert} from "../layouts/photoAlert";

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
];

export const GridGallery = () => (
    <Gallery
        images={images}
        maxRows={3}
        margin={2}
        rowHeight={225}
        onClick={(index) => {
            PhotoAlert.fire({
                imageUrl: images[index].src,
                imageWidth: '100%',
                imageHeight: 'auto',
                confirmButtonText: '닫기',
            });
        }
        }
    />
);