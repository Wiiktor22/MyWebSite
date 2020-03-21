import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&family=Raleway:wght@300;400&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-size: 10px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        color: white;
    }
`;

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    background: rgb(28,43,54);
    background: -moz-linear-gradient(180deg, rgba(28,43,54,1) 0%, rgba(66,90,128,1) 80%);
    background: -webkit-linear-gradient(180deg, rgba(28,43,54,1) 0%, rgba(66,90,128,1) 80%);
    background: linear-gradient(180deg, rgba(28,43,54,1) 0%, rgba(66,90,128,1) 80%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1c2b36",endColorstr="#425a80",GradientType=1);
`;

const App = () => {
    return (
        <>
            <GlobalStyle/>
            <Wrapper>
                <h1>Siema</h1>
            </Wrapper>
        </>
    );
}
 
export default App;