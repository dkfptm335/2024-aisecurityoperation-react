import styled from 'styled-components';

export const Footer = () => {
    return (
        <Wrap>
            <img src='/assets/footer.webp' alt='footer ' />
        </Wrap>
    );
}

const Wrap = styled.footer`
    img {
        width: 100%;
    }
`;