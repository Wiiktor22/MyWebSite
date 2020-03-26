import React from 'react';
import styled from 'styled-components';
import Logo from './Logo/Logo';
import Burger from './Burger/Burger';
import MainLinkedin from './../../assets/icons/BlueIN.png';
import MainGH from './../../assets/icons/BlueGH.png';

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 10vh;
    width: 100%;
    padding: 0 8vw;
    @media (min-width: 1024px) {
        position: fixed;
        top: 0;
        left: 0;
        width: 10vw;
        height: 100vh;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 5vh 1vw;
    }
    @media (min-width: 1366px) {
        width: 8vw;
    }
    @media (min-width: 1600px) {
        width: 7vw;
    }
`;

const LinksWrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 10px 0;
`;

const Ref = styled.img`
    height: 20px;
    width: 20px;
    cursor: pointer;
`;

const Header = ({ setShowNav }) => {
    const LinkedIn = 'https://www.linkedin.com/in/wiktor-szlegier-5881711a5/';
    const GitHub = 'https://github.com/Wiiktor22';
    return ( 
        <HeaderWrapper>
            <Logo />
            <Burger setShowNav={setShowNav}/>
            {window.innerWidth > 767 && 
                <LinksWrapper>
                    <a href={LinkedIn} target="_blank" rel="noopener noreferrer"><Ref src={MainLinkedin} /></a>
                    <a href={GitHub} target="_blank" rel="noopener noreferrer"><Ref src={MainGH} /></a>
                </LinksWrapper>
            }
        </HeaderWrapper>
    );
}
 
export default Header;