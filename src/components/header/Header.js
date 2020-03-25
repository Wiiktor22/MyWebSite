import React from 'react';
import styled from 'styled-components';
import Logo from './Logo/Logo';
import Burger from './Burger/Burger';
import MainLinkedin from './../../assets/icons/BlueIN.png';

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 10vh;
    width: 100%;
    padding: 0 8vw;
    @media (min-width: 1024px) {
        width: 10vw;
        height: 100vh;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 5vh 1vw;
    }
`;

const LinkedinRef = styled.img`
    height: 20px;
    width: 20px;
`;

const Header = ({ setShowNav }) => {
    return ( 
        <HeaderWrapper>
            <Logo />
            <Burger setShowNav={setShowNav}/>
            {window.innerWidth > 767 && <LinkedinRef src={MainLinkedin}/>}
        </HeaderWrapper>
    );
}
 
export default Header;