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
        background-color: #1c2b36;
        font-weight: 300;
        color: white;
    }
`;

const Wrapper = styled.div`
    min-height: 100vh;
    width: 100%;
    background: rgb(28,43,54);
    background: -moz-linear-gradient(180deg, rgba(28,43,54,1) 0%, rgba(66,90,128,1) 80%);
    background: -webkit-linear-gradient(180deg, rgba(28,43,54,1) 0%, rgba(66,90,128,1) 80%);
    background: linear-gradient(180deg, rgba(28,43,54,1) 0%, rgba(66,90,128,1) 80%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1c2b36",endColorstr="#425a80",GradientType=1);
    @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: 10vw 1fr;
    }
    @media (min-width: 1024px) {
        display: block;
        padding-left: 8vw;
    }
    @media (min-width: 1024px) {
        padding-left: 7vw;
    }
`;

const PagesWrapper = styled.div`
    padding: 10vh 8vw 5vh;
    @media (min-width: 768px) {
        padding: 5vh 8vw;
    }
    @media (min-width: 1024px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 100vh;
    }
`;

const App = () => {
    const setInitialState = () => {
        if (window.innerWidth > 767) {
            return true
        } else {
            return false
        }
    }
    const [showNav, setShowNav] = useState(setInitialState());
    const showNavFunction = () => {
        if (window.innerWidth > 767) {
            setShowNav(true)
        } else {
            setShowNav(!showNav)
        }
    }

    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Wrapper>
                <Header setShowNav={showNavFunction}/>
                {showNav && <Nav showNav={showNav} setShowNav={showNavFunction}/>}
                <Switch>
                    <PagesWrapper>
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