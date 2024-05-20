import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {CarouselGallery} from "../components/gridGallery";
import {Alert} from "../layouts/Alert";

export const Main = () => {
    const GalleryRef = useRef<HTMLElement>(null);
    // 화살표 보이기/숨기기를 위한 상태
    const [showScrollButton, setShowScrollButton] = useState(true);

    const scrollToGallery = () => {
        if (GalleryRef.current) {
            GalleryRef.current.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
    };

    // 스크롤 위치에 따라 화살표 상태 업데이트
    useEffect(() => {
        const onScroll = () => {
            if (GalleryRef.current) {
                const GalleryPosition = GalleryRef.current.getBoundingClientRect().top;
                const isVisible = GalleryPosition > window.innerHeight;

                setShowScrollButton(isVisible);
            }
        };

        // 스크롤 이벤트 리스너 등록
        window.addEventListener('scroll', onScroll);

        // 클린업 함수에서 이벤트 리스너 제거
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <Wrap>
            <MainImageWrap>
                <MainImage src={'assets/1-main-page.webp'} alt='main page body'/>
                {showScrollButton && (
                    <ScrollButton onClick={scrollToGallery}>
                        <img
                            src={'assets/scroll-button.png'}
                            alt={'ScrollButton'}
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
                        }}
                    />
                </ButtonWrap>
            </MainImageWrap>
            <GalleryWrap ref={GalleryRef}>
                <StyledCarouselGallery/>
                {/*<NewGridGallery/>*/}
                {/*<GridGallery/>*/}
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
    overflow-x: hidden; /* 수평 스크롤바를 숨깁니다 */
`;


const MainImageWrap = styled(PageTemplate)`
    display: flex;
    justify-content: center;
`;

const MainImage = styled.img`
    max-width: 1600px;
`;

const GalleryWrap = styled(PageTemplate)`
    max-width: 1600px;
    margin: 0 auto;
    border: 2px solid transparent;
    //border-radius: 50px; /* 둥근 테두리를 원한다면 추가 */
    box-sizing: border-box; /* 테두리 및 패딩을 총 크기에 포함 */
    padding-bottom: 60px;
    padding-top: 60px;
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

    /* 모바일 화면에서 버튼 숨기기 */
    @media (max-width: 768px) {
        display: none;
    }
`;

const StyledCarouselGallery = styled(CarouselGallery)`
    max-width: 1600px;

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
        width: 30vw; /* 뷰포트 너비의 10%로 너비 설정 */
        height: auto; /* 높이를 자동으로 조절하여 비율 유지 */
        max-width: 100%; /* 이미지가 부모 요소보다 커지지 않도록 제한 */
    }
`;