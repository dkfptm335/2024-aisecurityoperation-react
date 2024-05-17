import styled from "styled-components";
import {Link, useLocation} from "react-router-dom";

export const Header = () => {
    const {pathname} = useLocation();

    return (
        <Wrap>
            <HeaderImage
                src={'assets/header-no-button.png'}
                alt='header'
            />
            <Container>
                <Link to='/'>
                    <HomeButton>
                        <img src={'assets/0-home-button.png'}
                             alt="go home page button"/>
                    </HomeButton>
                </Link>
                <Link to='/introduction'>
                    <Button>
                        <img src={`assets/1-introduction-button${
                            pathname === '/introduction' ? '-hover' : ''
                        }.png`}
                             alt="go introduction page button"/>
                    </Button>
                </Link>
                <Link to='/curriculum'>
                    <Button>
                        <img src={`assets/2-curriculum-button${
                            pathname === '/curriculum' ? '-hover' : ''
                        }.png`}
                             alt="go curriculum page button"/>
                    </Button>
                </Link>
                <Link to='/apply'>
                    <Button>
                        <img src={`assets/3-apply-button${
                            pathname === '/apply' ? '-hover' : ''
                        }.png`}
                             alt="go apply page button"/>
                    </Button>
                </Link>
                <Link to='/lecturers'>
                    <Button>
                        <img src={`assets/4-lecturers-button${
                            pathname === '/lecturers' ? '-hover' : ''
                        }.png`}
                             alt="go lecturers page button"/>
                    </Button>
                </Link>
                <Link to='/faq'>
                    <Button>
                        <img src={`assets/5-faq-button${
                            pathname === '/faq' ? '-hover' : ''
                        }.png`}
                             alt="go faq page button"/>
                    </Button>
                </Link>
                <a href={'https://www.naver.com/'} target={'_blank'} rel="noreferrer">
                    <Button>
                        <img src={`assets/6-go-apply-button-small.png`}
                             alt="go google form page button"
                        />
                    </Button>
                </a>
            </Container>
        </Wrap>
    );
};

const Wrap = styled.header`
    display: flex;
    justify-content: center; /* 가운데 정렬 */
    align-items: center;
    width: 100%; /* 전체 너비 설정 */
    position: relative;
    margin: 0 auto; /* 자동 마진을 이용한 가운데 정렬 */

    img {
        width: 100%;
    }
`;

const Container = styled.nav`
    display: flex;
    align-items: center;
    max-width: 1350px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%); /* X축으로 -50% 이동하여 완전한 중앙 정렬 */
    top: 27.5%;
    width: 100%;
    //background-color: red;
`;


const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    height: fit-content;
    margin: 0 0; /* 이미지 사이의 간격을 줄입니다. */

    @media screen and (max-width: 480px) {
        width: 125%;
        margin: 0 -10px;
    }

    @media screen and (min-width: 481px) and (max-width: 768px) {
        width: 120%;
        margin: 0 -20px;
    }
`;

const HomeButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    height: fit-content;
    margin: 0 0; /* 이미지 사이의 간격을 줄입니다. */

    @media screen and (max-width: 480px) {
        width: 170%;
        margin: 0 -7px;
    }

    @media screen and (min-width: 481px) and (max-width: 768px) {
        width: 135%;
        margin: 0 -10px;
    }
`;

const HeaderImage = styled.img`
    width:100%;
`;