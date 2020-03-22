import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    height: 100%;
    padding: 0 8vw 2vh;
    text-align: center;
`;

const FooterText = styled.p`
    font-size: 1.1rem;
`;

const date = new Date();

const Footer = () => (
    <FooterWrapper>
        <FooterText>Wiktor Szlegier © {date.getFullYear()}</FooterText>
    </FooterWrapper>
)

export default Footer;