import React from 'react';
import styled from 'styled-components';


const LogoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    width: 40vw;
    @media (min-width: 1024px) {
        height: auto;
        width: auto;
    }
`;

const Name = styled.h1`
    font-size: 1.5rem;
    letter-spacing: 1.5px;
    font-weight: 400;
    text-transform: uppercase;
`;

const LastName = styled(Name)`
    color: #39BAE9;
`;

const Logo = () => (
    <LogoWrapper>
        <Name>Wiktor</Name>
        <LastName>Szlegier</LastName>
    </LogoWrapper>
)
 
export default Logo;