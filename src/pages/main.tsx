import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {CarouselGallery} from "../components/gridGallery";
import {Alert} from "../layouts/Alert";
import {Loading} from "../components/loading";
import {sliderGalleryImages} from "../components/images";

export const Main = () => {
    const GalleryRef = useRef<HTMLElement>(null);
    const [showScrollButton, setShowScrollButton] = useState(true);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const scrollToGallery = () => {
        if (GalleryRef.current) {
            GalleryRef.current.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
    };

    useEffect(() => {
        const onScroll = () => {
            if (GalleryRef.current) {
                const GalleryPosition = GalleryRef.current.getBoundingClientRect().top;
                const isVisible = GalleryPosition > window.innerHeight;

                setShowScrollButton(isVisible);
            }
        };

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <Wrap>
            <MainImageWrap>
                {!isImageLoaded && <Loading/>}
                <MainImage
                    src={'assets/1-main-page.webp'}
                    alt='main page body'
                    onLoad={() => setIsImageLoaded(true)}
                    style={{display: isImageLoaded ? 'block' : 'none'}}
                />
                {showScrollButton && (
                    <ScrollButton onClick={scrollToGallery}>
                        <img
                            src={'assets/scroll-button.png'}
                            alt={'ScrollButton'}
                            style={{display: isImageLoaded ? 'block' : 'none'}}
                        />
                    </ScrollButton>
                )}
                <ButtonWrap>
                    <img
                        src={'assets/1-main-page-button.png'} alt='go explain video button'
                        onClick={() => (
                            // window.open('https://www.naver.com/', '_blank')
                            Alert.fire('준비중', '준비중입니다.', 'info')
                        )}
                        style={{
                            zIndex: 1,
                            display: isImageLoaded ? 'block' : 'none'
                        }}
                    />
                </ButtonWrap>
            </MainImageWrap>
            <GalleryWrap ref={GalleryRef}>
                {sliderGalleryImages ? <StyledCarouselGallery/> : null}
            </GalleryWrap>
        </Wrap>
    );
}

export const PageTemplate = styled.section`
    position: relative;

    & > img {
        width: 100%;
    }
`;

const Wrap = styled(PageTemplate)`
    position: relative;
    width: 100%;
    overflow-x: hidden;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`;


const MainImageWrap = styled(PageTemplate)`
    display: flex;
    justify-content: center;
    max-width: 1920px;
`;

const MainImage = styled.img`
    max-width: 1600px;
`;

const GalleryWrap = styled(PageTemplate)`
    max-width: 1600px;
    margin: 0 auto;
    border: 2px solid transparent;
    box-sizing: border-box;
    padding-bottom: 160px;
    padding-top: 160px;
    width: 100%;
`;

const ScrollButton = styled.button`
    position: fixed;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    background-color: transparent;
    border: none;
    cursor: pointer;
    z-index: 2;

    @media (max-width: 768px) {
        display: none;
    }
`;

const StyledCarouselGallery = styled(CarouselGallery)`
    max-width: 1600px;
    width: 100%;

    @media screen and (max-width: 1199px) {
        width: 100%;
    }
`;

const ButtonWrap = styled(PageTemplate)`
    position: absolute;
    top: 28%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 569px;
    cursor: pointer;
    display: flex;
    justify-content: center;

    & > img {
        width: 30vw;
        height: auto;
        max-width: 100%;
    }
`;