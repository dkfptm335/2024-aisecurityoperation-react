import styled from "styled-components";
import {PageTemplate} from "./main";
import React from "react";
import {Loading} from "../components/loading";
import {useState} from "react";

export const FAQ = () => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    return (
        <Wrap>
            <MainImageWrap>
                {!isImageLoaded && <Loading />}
                <MainImage
                    src={'assets/6-faq-page.webp'}
                    alt='faq page body'
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