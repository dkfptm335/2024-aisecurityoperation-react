import styled from "styled-components";
import {PageTemplate} from "./main";
import {Loading} from "../components/loading";
import React, {useState} from "react";

export const Introduction = () => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    return (
        <Wrap>
            <MainImageWrap>
                {!isImageLoaded && <Loading/>}
                <MainImage
                    src={'assets/2-introduction-page.webp'}
                    alt='introduction page body'
                    onLoad={() => setIsImageLoaded(true)}
                    style={{display: isImageLoaded ? 'block' : 'none'}}
                />
            </MainImageWrap>
        </Wrap>
    )
};

const Wrap = styled(PageTemplate)`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MainImageWrap = styled(PageTemplate)`
    display: flex;
    justify-content: center;
    max-width: 1920px;
`;

const MainImage = styled.img`
    max-width: 1600px;
`;