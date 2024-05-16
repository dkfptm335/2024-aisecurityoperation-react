import styled from "styled-components";
import { PageTemplate } from "./main";
import { useState } from "react";

export const Curriculum: React.FC = () => {
    const [curriName, setCurriName] = useState<"normal" | "practical" | "special">("normal");

    return (
        <Wrap>
            <MainImageWrap>
                <MainImage
                    src={`assets/3-curriculum-${curriName}.webp`}
                    alt='curriculum page body'
                />
            </MainImageWrap>
            <ClassWrap curriName={curriName}>
                <img
                    src={`assets/3-common-button${curriName === "normal" ? '-hover' : ''}.png`}
                    alt="common button"
                    onClick={() => setCurriName("normal")}
                />
                <img
                    src={`assets/3-practical-button${curriName === "practical" ? '-hover' : ''}.png`}
                    alt="practical button"
                    onClick={() => setCurriName("practical")}
                />
                <img
                    src={`assets/3-special-button${curriName === "special" ? '-hover' : ''}.png`}
                    alt="special button"
                    onClick={() => setCurriName("special")}
                />
            </ClassWrap>
        </Wrap>
    );
};

interface ClassWrapProps {
    curriName: "normal" | "practical" | "special";
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
    top: ${({ curriName }) => {
        switch (curriName) {
            case 'practical':
                return '36%';
            case 'special':
                return '62.8%';
            case 'normal':
            default:
                return '46.45%';
        }
    }};
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;

    & > img {
        cursor: pointer;
        width: 27%;
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
