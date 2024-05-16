import styled from "styled-components";
import {Link, useLocation} from "react-router-dom";

export const Header = () => {
    const {pathname} = useLocation();

    return (
        <Wrap>
            <Container>
                <Link to='/'>
                    <Button>
                        <img src="assets/0-home-button.webp"
                             alt="go home page button"/>
                    </Button>
                </Link>
                <Link to='/introduction'>
                    <Button>
                        <img src={`assets/1-detail-button${
                            pathname === '/introduction' ? '-hover' : ''
                        }.webp`}
                             alt="go detail page button"/>
                    </Button>
                </Link>
                <Link to='/curriculum'>
                    <Button>
                        <img src={`assets/2-schedule-button${
                            pathname === '/curriculum' ? '-hover' : ''
                        }.webp`}
                             alt="go schedule page button"/>
                    </Button>
                </Link>
                <Link to='/apply'>
                    <Button>
                        <img src={`assets/3-apply-button${
                            pathname === '/apply' ? '-hover' : ''
                        }.webp`}
                             alt="go apply page button"/>
                    </Button>
                </Link>
                <Link to='/lecturers'>
                    <Button>
                        <img src={`assets/4-award-button${
                            pathname === '/lecturers' ? '-hover' : ''
                        }.webp`}
                             alt="go award page button"/>
                    </Button>
                </Link>
            </Container>
        </Wrap>
    );
};

const Wrap = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
`;


const Container = styled.nav`
    display: flex;
    align-items: center;
    max-width: 1600px;

    img {
        width: 100%;
    }
`;

const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    height: fit-content;
`;