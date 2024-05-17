import styled from 'styled-components';

export const Footer = () => {
    return (
        <Wrap>
            <FooterImage src='assets/footer.png' alt='footer ' />
        </Wrap>
    );
}

const Wrap = styled.footer`
    display: flex;
    justify-content: center;
    background-color: white;
    
    img {
        width: 100%;
    }
`;

const FooterImage = styled.img`
    max-width: 1600px;
`;