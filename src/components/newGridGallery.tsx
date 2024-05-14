import React from 'react';
import './style.css';

import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import {items} from "./images";

export const NewGridGallery = () => {
    return (
        <div>
            <LightGallery plugins={[lgZoom, lgVideo]} mode="lg-fade">
                {items.map((item, index) => (
                    <a className={item["a-className"]} data-lg-size={item["data-lg-size"]} href={item.src} data-download-url={false}>
                        <img className={item["img-className"]} src={item.src} alt="" width={4700 / items.length}
                             height={"auto"}/>
                    </a>
                ))}
            </LightGallery>
        </div>
    );
}

