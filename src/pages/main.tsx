import styled from "styled-components";
import {Video} from "../components/video";
import {GridGallery} from "../components/gridGallery";

export const Main = () => {
    return (
        <Wrap>
            <img
                src={'assets/1-main-page.webp'}
                alt='main page body'
            />
            <VideoWrap>
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
    position: absolute; /* VideoWrap을 절대 위치로 설정 */
    top: 225px;
    left: 50%; /* 왼쪽에서부터 50% 위치 */
    transform: translate(-50%, -50%); /* 중앙 정렬을 위해 자신의 크기의 반만큼 이동 */
    width: 80%; /* 필요한 경우 너비 조정 */
    max-width: 1200px; /* 필요한 경우 최대 너비 조정 */

    @media screen and (min-width: 481px) and (max-width: 768px) {
        top: 440px;
    }

    @media screen and (min-width: 769px) and (max-width: 1200px) {
        top: 570px;
    }

    @media screen and (min-width: 1201px) and (max-width: 1440px) {
        top: 770px;
    }

    @media screen and (min-width: 1441px) and (max-width: 1919px) {
        top: 990px;
    }

    @media screen and (min-width: 1920px) {
        top: 1186px;
    }
`;