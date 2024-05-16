import styled from "styled-components";
import {PageTemplate} from "./main";
import {useState} from "react";

export const Curriculum = () => {
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
                <button
                    onClick={() => setClassName(3)}
                    style={{backgroundColor: className === 3 ? 'black' : 'white', color: className === 3 ? 'white' : 'black'}}
                >3학년</button>
            </ClassWrap>
            <ContentWrap>
                { className === 1 ? <img src="assets/gallery/0.jpeg" alt="0"/> : null }
                { className === 2 ? <img src="assets/gallery/1.jpg" alt="1"/> : null }
                { className === 3 ? <img src="assets/gallery/2.jpeg" alt="2"/> : null }
            </ContentWrap>
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
    }
`;