import styled from "styled-components";
import {PageTemplate} from "./main";
import {useState} from "react";

export const Curriculum = () => {
    const [curriName, setCurriName] = useState(1);

    return (
        <Wrap>
            <ClassWrap>
                <button
                    onClick={() => setCurriName(1)}
                    style={{backgroundColor: curriName === 1 ? 'black' : 'white', color: curriName === 1 ? 'white' : 'black'}}
                >1학년
                </button>
                <button
                    onClick={() => setCurriName(2)}
                    style={{backgroundColor: curriName === 2 ? 'black' : 'white', color: curriName === 2 ? 'white' : 'black'}}
                >2학년</button>
                <button
                    onClick={() => setCurriName(3)}
                    style={{backgroundColor: curriName === 3 ? 'black' : 'white', color: curriName === 3 ? 'white' : 'black'}}
                >3학년</button>
            </ClassWrap>
            <ContentWrap>
                { curriName === 1 ? <img src="assets/gallery/0.jpeg" alt="0"/> : null }
                { curriName === 2 ? <img src="assets/gallery/1.jpg" alt="1"/> : null }
                { curriName === 3 ? <img src="assets/gallery/2.jpeg" alt="2"/> : null }
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