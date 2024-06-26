import React from 'react';
import styled from "styled-components";
import {Route, Routes} from "react-router-dom";
import {Header} from "./layouts/header";
import {Footer} from "./layouts/footer";
import {Main} from "./pages/main";
import {Introduction} from "./pages/introduction";
import {Curriculum} from "./pages/curriculum";
import {Apply} from "./pages/apply";
import {Environment} from "./pages/environment";
import {FAQ} from "./pages/faq";
import {Notfound} from "./pages/notfound";

function App() {
    React.useEffect(() => {
        if (window.location.hostname === 'aisocedu.kr') {
            window.location.replace(`https://www.aisocedu.kr${window.location.pathname}${window.location.search}`);
        }
    }, []);

    return (
        <Wrapper>
            <Header/>

            <Routes>
                {/* 최상위 경로에 Main 컴포넌트 라우팅 */}
                <Route path="/" element={<Main/>}/>
                {/*교육소개 페이지*/}
                <Route path="/introduction" element={<Introduction/>}/>
                {/*교육과정 페이지*/}
                <Route path="/curriculum" element={<Curriculum/>}/>
                {/*교육신청 페이지*/}
                <Route path="/apply" element={<Apply/>}/>
                {/*강사진 소개 페이지*/}
                <Route path="/environment" element={<Environment/>}/>
                {/*FAQ 페이지*/}
                <Route path="/faq" element={<FAQ/>}/>
                {/*존재하지 않는 페이지로 접근할 경우 Main 컴포넌트로 리다이렉트*/}
                <Route path="*" element={<Notfound/>}/>
            </Routes>

            <Footer/>
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

    @media only screen and (min-width: 1200px) {
        & > img {
            width: 100%;
        }
    }
`;

export default App;