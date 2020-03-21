import React from 'react';
import styled from 'styled-components';
import Logo from './Logo/Logo';
import Burger from './Burger/Burger';

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    width: 100%;
    padding: 0 8vw;
`;

const Header = ({ setShowNav }) => {
    return ( 
        <HeaderWrapper>
            <Logo />
            <Burger setShowNav={setShowNav}/>
        </HeaderWrapper>
    );
}
 
export default Header;