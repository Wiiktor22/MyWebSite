import React from 'react';
import styled from 'styled-components';
import HomeIcon from './../../../assets/icons/homeIcon.png';
import CodeIcon from './../../../assets/icons/codeIcon.png';
import LaptopIcon from './../../../assets/icons/iconLaptop.png';
import ContactIcon from './../../../assets/icons/ContactIcon.png';
import { Link } from 'react-router-dom';

const NavWrapper = styled.nav`
    position: absolute;
    top: 10vh;
    left: 0;
    height: 10vh;
    width: 100%;
    animation: ${({ showNav }) => showNav ? '.5s show ease-out;' : '.5s hide ease-out;'};
    @keyframes show {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0);
        }
    }
    @keyframes hide {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(100%);
        }
    }
`;

const ListWrapper = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    align-content: center;
    height: 100%;
    width: 90%;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: 0px 0px 12px 0px rgba(61,89,110,0.2);
`;

const NavItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    height: 100%;
`;

const Nav = ({ showNav, setShowNav }) => {
    return ( 
        <NavWrapper showNav={showNav}>
            <ListWrapper>
                <NavItem onClick={setShowNav}><Link to='/'><img src={HomeIcon} alt='Dom'/></Link></NavItem>
                <NavItem onClick={setShowNav}><Link to='/skills'><img src={CodeIcon} alt='Umiejętności'/></Link></NavItem>
                <NavItem onClick={setShowNav}><Link to='/projects'><img src={LaptopIcon} alt='Projekty'/></Link></NavItem>
                <NavItem onClick={setShowNav}><Link to='/contact'><img src={ContactIcon} alt='Kontakt'/></Link></NavItem>
            </ListWrapper>
        </NavWrapper>
    );
}
 
export default Nav;