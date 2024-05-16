import styled from "styled-components";
import {PageTemplate} from "./main";

export const Introduction = () => {
    return (
        <Wrap>
            <MainImageWrap>
                <MainImage src={'assets/2-introduction-page.webp'} alt='introduction page body'/>
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