import styled from "styled-components";
import {PageTemplate} from "./main";

export const FAQ = () => {
    return (
        <Wrap>
            <MainImageWrap>
                <MainImage src={'assets/6-faq-page.webp'} alt='faq page body'/>
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