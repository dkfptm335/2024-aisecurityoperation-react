import styled from "styled-components";
import {PageTemplate} from "./main";
import React, {useState} from "react";
import {Loading} from "../components/loading";

export const Curriculum: React.FC = () => {
    const [curriName, setCurriName] = useState<"normal" | "special">("normal");
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    return (
        <Wrap>
            <TopMainImageWrap>
                {!isImageLoaded && <Loading/>}
                <img src={'assets/3-curriculum-top.webp'} alt="curriculum_main" onLoad={() => setIsImageLoaded(true)}/>
            </TopMainImageWrap>
            <ButtonWrap>
                <img
                    src={`assets/3-normal-button${curriName === "normal" ? '-hover' : ''}.png`}
                    alt="normal button"
                    onClick={() => setCurriName("normal")}
                    style={{display: isImageLoaded ? 'block' : 'none'}}
                />
                <img
                    src={`assets/3-special-button${curriName === "special" ? '-hover' : ''}.png`}
                    alt="special button"
                    onClick={() => setCurriName("special")}
                    style={{display: isImageLoaded ? 'block' : 'none'}}
                />
            </ButtonWrap>
            <BottomMainImageWrap>
                <img src={`assets/3-curriculum-bottom-${curriName}.webp`} alt="curriculum_body"
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
    margin-top: 5%;

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
        width: 43%;
    }
`;