import styled from "styled-components";
import {PageTemplate} from "./main";
import {Loading} from "../components/loading";
import React, {useState} from "react";

export const Lecturers = () => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    return (
        <Wrap>
            <MainImageWrap>
                {!isImageLoaded && <Loading/>}
                <MainImage
                    src={'assets/5-lecturers-page.webp'}
                    alt='lecturers page body'
                    onLoad={() => setIsImageLoaded(true)}
                    style={{display: isImageLoaded ? 'block' : 'none'}}
                />
            </MainImageWrap>
        </Wrap>
    )
};

const Wrap = styled(PageTemplate)`
    position: relative;
`;

const MainImageWrap = styled(PageTemplate)`
    display: flex;
    justify-content: center;
`;

const MainImage = styled.img`
    max-width: 1600px;
`;