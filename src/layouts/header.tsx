import styled from "styled-components";
import {Link, useLocation} from "react-router-dom";

export const Header = () => {
    const {pathname} = useLocation();

    return (
        <Wrap>
            <Container>
                <Link to='/'>
                    <Button>
                        <img src="/assets/0-home-button.webp"
                             alt="go home page button"/>
                    </Button>
                </Link>
                <Link to='/detail'>
                    <Button>
                        <img src={`/assets/1-detail-button${
                            pathname === '/detail' ? '-hover' : ''
                        }.webp`}
                             alt="go detail page button"/>
                    </Button>
                </Link>
                <Link to='/schedule'>
                    <Button>
                        <img src={`/assets/2-schedule-button${
                            pathname === '/schedule' ? '-hover' : ''
                        }.webp`}
                             alt="go schedule page button"/>
                    </Button>
                </Link>
                <Link to='/apply'>
                    <Button>
                        <img src={`/assets/3-apply-button${
                            pathname === '/apply' ? '-hover' : ''
                        }.webp`}
                             alt="go apply page button"/>
                    </Button>
                </Link>
                <Link to='/award'>
                    <Button>
                        <img src={`/assets/4-award-button${
                            pathname === '/award' ? '-hover' : ''
                        }.webp`}
                             alt="go award page button"/>
                    </Button>
                </Link>
                <a
                    href="https://www.czon.io/challenge"
                    target="_blank"
                    rel="noreferrer">
                    <Button>
                        <img src="/assets/redirect-czon-button.webp"
                             alt="go czon page button"/>
                    </Button>
                </a>
            </Container>
        </Wrap>
    );
};

const Wrap = styled.header`
    display: flex;
`;

const Container = styled.nav`
    display: flex;
    align-items: center;

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