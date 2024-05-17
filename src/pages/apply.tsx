import styled from "styled-components";
import {PageTemplate} from "./main";
import React, {useState} from "react";

export const Apply: React.FC = () => {
    const [className, setClassName] = useState<"qualification" | "schedule">("qualification");

    return (
        <Wrap>
            <MainImageWrap>
                <MainImage
                    src={`assets/4-apply-${className}.webp`}
                    alt='apply page body'
                />
            </MainImageWrap>
            <ClassWrap className={className}>
                <img
                    src={`assets/4-qualification-button${className === "qualification" ? '-hover' : ''}.png`}
                    alt="qualification button"
                    onClick={() => setClassName("qualification")}
                />
                <img
                    src={`assets/4-schedule-button${className === "schedule" ? '-hover' : ''}.png`}
                    alt="schedule button"
                    onClick={() => setClassName("schedule")}
                />
            </ClassWrap>
            <ButtonWrap>
                <img
                    src={'assets/4-apply-button.png'}
                    alt='go apply page button'
                    onClick={() => (
                        window.open('https://www.naver.com/', '_blank')
                    )}
                    style={{
                        zIndex: 1,
                    }}
                />
            </ButtonWrap>
        </Wrap>
    );
};

interface ClassWrapProps {
    className: "qualification" | "schedule";
}

const Wrap = styled(PageTemplate)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    position: relative;
`;

const ClassWrap = styled.nav<ClassWrapProps>`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 1600px;
    position: absolute;
    top: ${({className}) => {
        switch (className) {
            case 'qualification':
                return '33%';
            case 'schedule':
            default:
                return '46.45%';
        }
    }};
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;

    & > img {
        cursor: pointer;
        width: 43%;
    }

    @media screen and (max-width: 768px) {
        /* 작은 화면에서 스타일링 추가 */
    }
`;

const MainImageWrap = styled(PageTemplate)`
    display: flex;
    justify-content: center;
    z-index: 0;
`;

const MainImage = styled.img`
    max-width: 1600px;
`;

const ButtonWrap = styled(PageTemplate)`
    position: absolute;
    bottom: ${({className}) => {
        switch (className) {
            case 'qualification':
                return '20%';
            case 'schedule':
            default:
                return '4%';
        }
    }};
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 1400px;
    cursor: pointer;
    display: flex;
    justify-content: center;

    & > img {
        width: 87vw;
        height: auto; /* 높이를 자동으로 조절하여 비율 유지 */
        max-width: 100%; /* 이미지가 부모 요소보다 커지지 않도록 제한 */
    }
`;