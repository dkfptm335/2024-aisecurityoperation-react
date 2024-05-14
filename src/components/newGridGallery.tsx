import React from 'react';
import './style.css';

import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';

const items = [
    {
        "data-lg-size": "1920-1080",
        "a-className": "gallery-item",
        "src": "assets/gallery/0.jpeg",
        "data-sub-html": "<h4>Photo Title</h4>",
        "img-className": "img-responsive"
    }
];

export const NewGridGallery = () => {
    return (
        <div>
            <LightGallery plugins={[lgZoom, lgVideo]} mode="lg-fade">
                <a
                    data-lg-size="1920-1080"
                    className="gallery-item"
                    data-src={'assets/gallery/0.jpeg'}
                    data-sub-html="<h4>Photo Title</h4>"
                >
                    <img
                        className="img-responsive"
                        src={'assets/gallery/0.jpeg'}
                        width="300"
                        height='auto'
                    />
                </a>
                <a
                    data-lg-size="1920-1080"
                    className="gallery-item"
                    data-src={'assets/gallery/1.jpg'}
                    data-sub-html="<h4>Photo Title</h4>"
                >
                    <img
                        className="img-responsive"
                        src={'assets/gallery/1.jpg'}
                        width="300"
                        height='auto'
                    />
                </a>
                <a
                    data-lg-size="1920-1080"
                    className="gallery-item"
                    data-src={'assets/gallery/2.jpeg'}
                    data-sub-html="<h4>Photo Title</h4>"
                >
                    <img
                        className="img-responsive"
                        src={'assets/gallery/2.jpeg'}
                        width="300"
                        height='auto'
                    />
                </a>
                <a
                    data-lg-size="1920-1080"
                    className="gallery-item"
                    data-src={'assets/gallery/3.jpg'}
                    data-sub-html="<h4>Photo Title</h4>"
                >
                    <img
                        className="img-responsive"
                        src={'assets/gallery/3.jpg'}
                        width="300"
                        height='auto'
                    />
                </a>
                <a
                    data-lg-size="1920-1080"
                    className="gallery-item"
                    data-src={'assets/gallery/4.jpg'}
                    data-sub-html="<h4>Photo Title</h4>"
                >
                    <img
                        className="img-responsive"
                        src={'assets/gallery/4.jpg'}
                        width="300"
                        height='auto'
                    />
                </a>
                <a
                    data-lg-size="1920-1080"
                    className="gallery-item"
                    data-src={'assets/gallery/5.jpg'}
                    data-sub-html="<h4>Photo Title</h4>"
                >
                    <img
                        className="img-responsive"
                        src={'assets/gallery/5.jpg'}
                        width="300"
                        height='auto'
                    />
                </a>
                <a
                    data-lg-size="1920-1080"
                    className="gallery-item"
                    data-src={'assets/gallery/6.jpg'}
                    data-sub-html="<h4>Photo Title</h4>"
                >
                    <img
                        className="img-responsive"
                        src={'assets/gallery/6.jpg'}
                        width="300"
                        height='auto'
                    />
                </a>
                <a
                    data-lg-size="1920-1080"
                    className="gallery-item"
                    data-src={'assets/gallery/7.jpg'}
                    data-sub-html="<h4>Photo Title</h4>"
                >
                    <img
                        className="img-responsive"
                        src={'assets/gallery/7.jpg'}
                        width="300"
                        height='auto'
                    />
                </a>
                <a
                    data-lg-size="1920-1080"
                    className="gallery-item"
                    data-src={'assets/gallery/8.jpg'}
                    data-sub-html="<h4>Photo Title</h4>"
                >
                    <img
                        className="img-responsive"
                        src={'assets/gallery/8.jpg'}
                        width="300"
                        height='auto'
                    />
                </a>
                <a
                    data-lg-size="1920-1080"
                    className="gallery-item"
                    data-src={'assets/gallery/9.jpg'}
                    data-sub-html="<h4>Photo Title</h4>"
                >
                    <img
                        className="img-responsive"
                        src={'assets/gallery/9.jpg'}
                        width="300"
                        height='auto'
                    />
                </a>
                <a
                    data-lg-size="1920-1080"
                    className="gallery-item"
                    data-src={'assets/gallery/10.jpg'}
                    data-sub-html="<h4>Photo Title</h4>"
                >
                    <img
                        className="img-responsive"
                        src={'assets/gallery/10.jpg'}
                        width="300"
                        height='auto'
                    />
                </a>
                <a
                    data-lg-size="1920-1080"
                    className="gallery-item"
                    data-src={'assets/gallery/1.jpg'}
                    data-sub-html="<h4>Photo Title</h4>"
                >
                    <img
                        className="img-responsive"
                        src={'assets/gallery/1.jpg'}
                        width="300"
                        height='auto'
                    />
                </a>
                <a
                    data-lg-size="1920-1080"
                    className="gallery-item"
                    data-src={'assets/gallery/0.jpeg'}
                    data-sub-html="<h4>Photo Title</h4>"
                >
                    <img
                        className="img-responsive"
                        src={'assets/gallery/0.jpeg'}
                        width="300"
                        height='auto'
                    />
                </a>


            </LightGallery>
        </div>
    );
}
