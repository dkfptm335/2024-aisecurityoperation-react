import styled from "styled-components";
import {PageTemplate} from "./main";
import React, {useState} from "react";
import {Loading} from "../components/loading";

export const Environment: React.FC = () => {
    const [className, setClassName] = useState<"lecturers" | "environment">("lecturers");
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    return (
        <Wrap>
            <TopMainImageWrap>
                {!isImageLoaded && <Loading/>}
                <img src={'assets/5-environment-top.png'} alt="environment_main" onLoad={() => setIsImageLoaded(true)}/>
            </TopMainImageWrap>
            <ButtonWrap>
                <img
                    src={`assets/5-lecturers-button${className === "lecturers" ? '-hover' : ''}.png`}
                    alt="common button"
                    onClick={() => setClassName("lecturers")}
                    style={{display: isImageLoaded ? 'block' : 'none'}}
                />
                <img
                    src={`assets/5-environment-button${className === "environment" ? '-hover' : ''}.png`}
                    alt="special button"
                    onClick={() => setClassName("environment")}
                    style={{display: isImageLoaded ? 'block' : 'none'}}
                />
            </ButtonWrap>
            <BottomMainImageWrap>
                <img src={`assets/5-environment-bottom-${className}.webp`} alt="environment_body"
                     style={{display: isImageLoaded ? 'block' : 'none'}}/>
            </BottomMainImageWrap>
        </Wrap>
    );
};

const Wrap = styled(PageTemplate)`
    position: relative;
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

const TopMainImageWrap = styled.div`
    max-width: 1600px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & > img {
        width: 100%;
    }
`;

const BottomMainImageWrap = styled.div`
    max-width: 1600px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & > img {
        width: 100%;
    }
`;

const ButtonWrap = styled.nav`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 1600px;
    position: relative;
    margin: 0 auto;

    & > img {
        cursor: pointer;
        width: 37%;
        margin: 0 1%;
    }
`;
