import React, { useRef, useState, useEffect } from 'react';
import styled from "styled-components";
import { Video } from "../components/video";
import { GridGallery } from "../components/gridGallery";


export const Main = () => {
    const videoRef = useRef<HTMLElement>(null);
    // 화살표 보이기/숨기기를 위한 상태
    const [showScrollButton, setShowScrollButton] = useState(true);

    const scrollToVideo = () => {
        if (videoRef.current) {
            videoRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // 스크롤 위치에 따라 화살표 상태 업데이트
    useEffect(() => {
        const onScroll = () => {
            if (videoRef.current) {
                const videoPosition = videoRef.current.getBoundingClientRect().top;
                const isVisible = videoPosition > window.innerHeight;

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
            <img src={'assets/1-main-page.webp'} alt='main page body'/>
            {showScrollButton && (
                <ScrollButton onClick={scrollToVideo}>
                    <img src={'assets/화살표.png'}/>
                </ScrollButton>
            )}
            <VideoWrap ref={videoRef}>
                <Video/>
            </VideoWrap>
            <GalleryWrap>
                <GridGallery/>
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
const ScrollButton = styled.button`
    position: fixed; // 화면에 고정
    left: 50%; // 좌우 중앙에 위치
    bottom: 20px; // 하단에서 20px 위에 위치
    transform: translateX(-50%); // 정확한 중앙 정렬을 위해
    background-color: transparent; // 배경색을 투명하게 설정
    border: none; // 테두리 제거
`;
const Wrap = styled(PageTemplate)`
    position: relative; /* Wrap 컴포넌트를 상대 위치로 설정 */
`;

const GalleryWrap = styled(PageTemplate)`
    max-width: 1600px;
    margin: 0 auto;
    border: 2px solid transparent; /* 테두리를 파란색으로 설정 */
    border-radius: 50px; /* 둥근 테두리를 원한다면 추가 */
    box-sizing: border-box; /* 테두리 및 패딩을 총 크기에 포함 */
    overflow: hidden; /* 둥근 테두리 밖의 내용 숨기기 */
`;

const VideoWrap = styled(PageTemplate)`
    position: relative; /* 절대 위치 대신 상대 위치로 설정 */
    width: 80%; /* 필요한 경우 너비 조정 */
    max-width: 1200px; /* 필요한 경우 최대 너비 조정 */
    margin: 0 auto; /* 중앙 정렬 */
    margin-top: 20px; /* img와의 간격 조정을 위해 마진 상단 추가 */

    /* 미디어 쿼리 제거 or 미디어 쿼리 내부 속성 조정 */
`;
