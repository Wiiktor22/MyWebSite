import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/header/Header';
import Nav from './components/header/Nav/Nav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/views/Home';
import Skills from './components/views/Skills';
import Projects from './components/views/Projects';
import Contact from './components/views/Contact';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 10px;
        font-family: 'Montserrat', sans-serif;
    }

    body {
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

const PagesWrapper = styled.div`
    padding: ${({ showNav }) => showNav ? '0 8vw' : '10vh 8vw 0'};
`;

const App = () => {
    const [showNav, setShowNav] = useState(false);
    const showNavFunction = () => {
        setShowNav(!showNav);
    }

    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Wrapper>
                <Header setShowNav={showNavFunction}/>
                {showNav && <Nav showNav={showNav} setShowNav={showNavFunction}/>}
                <Switch>
                    <PagesWrapper paddding={showNav}>
                        <Route exact path='/' component={Home} />
                        <Route path='/skills' component={Skills} />
                        <Route path='/projects' component={Projects} />
                        <Route path='/contact' component={Contact} />
                    </PagesWrapper>
                </Switch>
            </Wrapper>
        </BrowserRouter>
    );
}
 
export default App;