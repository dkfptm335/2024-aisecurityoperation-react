import styled from "styled-components";
import {PageTemplate} from "./main";
import React, {useState} from "react";
import {Loading} from "../components/loading";

export const Apply: React.FC = () => {
    const [className, setClassName] = useState<"qualification" | "schedule">("qualification");
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    return (
        <Wrap>
            <TopMainImageWrap>
                {!isImageLoaded && <Loading/>}
                <img src={'assets/4-apply-top.png'} alt="apply_main" onLoad={() => setIsImageLoaded(true)}/>
            </TopMainImageWrap>
            <ButtonWrap>
                <img
                    src={`assets/4-qualification-button${className === "qualification" ? '-hover' : ''}.png`}
                    alt="qualification button"
                    onClick={() => setClassName("qualification")}
                    style={{display: isImageLoaded ? 'block' : 'none'}}
                />
                <img
                    src={`assets/4-schedule-button${className === "schedule" ? '-hover' : ''}.png`}
                    alt="schedule button"
                    onClick={() => setClassName("schedule")}
                    style={{display: isImageLoaded ? 'block' : 'none'}}
                />
            </ButtonWrap>
            <BottomMainImageWrap>
                <img src={`assets/4-apply-bottom-${className}.webp`} alt="apply_body"
                     style={{display: isImageLoaded ? 'block' : 'none'}}/>
            </BottomMainImageWrap>
            <ApplyButtonWrap>
                <img
                    src={'assets/4-apply-button.png'}
                    alt='go apply page button'
                    onClick={() => (
                        window.open('https://forms.gle/DMKe49ZCDUMatVL38', '_blank')
                        // Alert.fire('준비중', '준비중입니다.', 'info')
                    )}
                    style={{display: isImageLoaded ? 'block' : 'none'}}
                />
            </ApplyButtonWrap>
            <FooterMainImageWrap>
                <img src={`assets/4-apply-footer.png`} alt="apply_footer"
                     style={{display: isImageLoaded ? 'block' : 'none'}}/>
            </FooterMainImageWrap>
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

const FooterMainImageWrap = styled.div`
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
        width: 43%;
    }
`;

const ApplyButtonWrap = styled.div`
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    display: flex;
    justify-content: center;

    & > img {
        width: 85%;
        height: auto;
        cursor: pointer;
    }
`;