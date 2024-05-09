import styled from "styled-components";
import Gallery from "../components/gallery";

export const Main = () => {
    return (
        <Wrap>
            <img
                src='assets/1-main-page.webp'
                alt='main page body'
            />
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