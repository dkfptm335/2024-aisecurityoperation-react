import styled from "styled-components";
import Gallery from "../components/gallery";

export const Main = () => {
    return (
        <Wrap>
            <img
                src={'assets/1-main-page.webp'}
                alt='main page body'
            />
            <Button>
                <img
                    src={'assets/1-main-button.webp'}
                    alt='main page button'
                    onClick={() => {
                        window.open('https://www.naver.com', '_blank');
                    }}
                />
            </Button>
            <GalleryWrap>
                <Gallery/>
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

const Wrap = styled(PageTemplate)``;

const GalleryWrap = styled(PageTemplate)``;

export const ImageButtonBase = styled.button`
    background-color: transparent;
    border: none;
    position: absolute;
    cursor: pointer;

    & > img {
        width: 100%;
    }
`;

const Button = styled(ImageButtonBase)`
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    
    // 모바일 세로
    top: 39.5%;

    // 모바일 가로, 태블릿 세로
    @media only screen and (min-width: 481px) and (max-width: 768px){
        top: 41%;
    }
    
    // 태블릿 가로 ~ 1200픽셀
    @media only screen and (min-width: 769px) and (max-width: 1199px){
        top: 41.5%;
    }
    
    // 1200픽셀 이상의 화면 너비에 대한 반응형 디자인
    @media only screen and (min-width: 1200px) {
        top: 41.5%;
    }
`;
