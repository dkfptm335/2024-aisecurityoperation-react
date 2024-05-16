import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {CarouselGallery} from "../components/gridGallery";

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
                <img src={'assets/1-main-page.webp'} alt='main page body'/>
                {showScrollButton && (
                    <ScrollButton onClick={scrollToGallery}>
                        <img src={'assets/direction-sign.png'}/>
                    </ScrollButton>
                )}
                <ButtonWrap>
                    <img
                        src={'assets/pngs/1-main-button.png'} alt='main page button'
                        onClick={() => (
                            window.open('https://www.naver.com/', '_blank')
                        )}
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
    position: relative; /* Wrap 컴포넌트를 상대 위치로 설정 */
`;

const MainImageWrap = styled(PageTemplate)`
`;

const GalleryWrap = styled(PageTemplate)`
    max-width: 1600px;
    margin: 0 auto;
    border: 2px solid transparent;
    //border-radius: 50px; /* 둥근 테두리를 원한다면 추가 */
    box-sizing: border-box; /* 테두리 및 패딩을 총 크기에 포함 */
    padding-bottom: 30px;
    padding-top: 30px;
`;

const ScrollButton = styled.button`
    position: fixed;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    background-color: transparent;
    border: none;
    cursor: pointer;

    /* 모바일 화면에서 버튼 숨기기 */
    @media (max-width: 768px) {
        display: none;
    }
`;

const StyledCarouselGallery = styled(CarouselGallery)`
    max-width: 1600px;

    @media screen and (max-width: 1599px) {
        width: 100%;
    }
`;

const ButtonWrap = styled(PageTemplate)`
    position: absolute; /* VideoWrap을 절대 위치로 설정 */
    top: 60.5%; /* 상단에서부터 50% 위치 */
    left: 50%; /* 왼쪽에서부터 50% 위치 */
    transform: translate(-50%, -50%); /* 중앙 정렬을 위해 가로와 세로 모두 자신의 크기의 반만큼 이동 */
    width: 80%; /* 필요한 경우 너비 조정 */
    max-width: 1200px; /* 필요한 경우 최대 너비 조정 */
    cursor: pointer;
`;
