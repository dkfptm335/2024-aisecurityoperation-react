import styled from "styled-components";
import {PageTemplate} from "./main";
import React, {useState} from "react";

export const Apply = () => {
    const [className, setClassName] = useState(1);

    return (
        <Wrap>
            <ClassWrap>
                <button
                    onClick={() => setClassName(1)}
                    style={{backgroundColor: className === 1 ? 'black' : 'white', color: className === 1 ? 'white' : 'black'}}
                >1학년
                </button>
                <button
                    onClick={() => setClassName(2)}
                    style={{backgroundColor: className === 2 ? 'black' : 'white', color: className === 2 ? 'white' : 'black'}}
                >2학년</button>
            </ClassWrap>
            <ContentWrap>
                { className === 1 ? <img src="assets/gallery/0.jpeg" alt="0"/> : null }
                { className === 2 ? <img src="assets/gallery/1.jpg" alt="1"/> : null }
            </ContentWrap>
            <ButtonWrap>
                <img
                    src={'assets/pngs/1-main-button.png'} alt='main page button'
                    onClick={() => (
                        window.open('https://www.naver.com/', '_blank')
                    )}
                />
            </ButtonWrap>
        </Wrap>
    )
};

const Wrap = styled(PageTemplate)`
    
`;

const ClassWrap = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`;

const ContentWrap = styled.div`
    display: flex;
    justify-content: center;

    & > img {
        width: 100%;
        max-width: 1600px;
    }
`;

const ButtonWrap = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    
    & > img {
        width: 80%;
        cursor: pointer;
        left: 50%;
        max-width: 1200px; /* 필요한 경우 최대 너비 조정 */
        background-color: transparent;
    }
`;
