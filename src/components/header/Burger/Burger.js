import React from 'react';
import styled from 'styled-components';

const BurgerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    height: 100%;
    width: 10vw;
`;

const Item = styled.div`
    height: 4px;
    width: ${({ width }) => width};
    border-radius: 20px;
    background-color: #39BAE9;
    margin-bottom: 5px;
`;

const Burger = ({ setShowNav }) => {
    return ( 
        <BurgerWrapper onClick={setShowNav}>
            <Item width={'30px'}/>
            <Item width={'20px'}/>
            <Item width={'25px'}/>
        </BurgerWrapper>
    );
}
 
export default Burger;