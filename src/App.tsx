import React from 'react';
import styled from "styled-components";
import {Route, Routes} from "react-router-dom";
import {Main} from "./pages/main";

function App() {
    return (
        <Wrapper>

            <Routes>
                {/* 최상위 경로에 Main 컴포넌트 라우팅 */}
                <Route path="/" element={<Main/>}/>
            </Routes>

        </Wrapper>
    );
}

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    & > img {
        width: 100%;
    }
    
    // 1200픽셀 이상의 화면 너비에 대한 반응형 디자인
    @media only screen and (min-width: 1200px)
    {
        width: 1200px; // 컴포넌트의 좌우 너비 1200픽셀 고정
    }
`;

export default App;