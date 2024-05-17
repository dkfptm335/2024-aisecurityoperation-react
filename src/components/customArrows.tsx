import React from 'react';
import { CustomArrowProps } from 'react-slick';

const NextArrow: React.FC<CustomArrowProps> = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: 'none', zIndex: 1, right: '-40px', top: '47%'}}
            onClick={onClick}
        >
            <img
                src={"assets/nextArrow.png"}
                alt="next"
                width="50"
            />
        </div>
    );
};

const PrevArrow: React.FC<CustomArrowProps> = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{...style, display: 'block', background: 'none', zIndex: 1, left: '-70px', top: '47%'}}
            onClick={onClick}
        >
            <img
                src={"assets/prevArrow.png"}
                alt="prev"
                width="50"
            />
        </div>
    );
};

export {NextArrow, PrevArrow};
