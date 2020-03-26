import React from 'react';
import styled from 'styled-components';
import Paragraph from '../elements/Paragraph';
import Heading from '../elements/Heading';
import mtScreen from './../../assets/projects/MT_Screen.jpg';
import yScreen from './../../assets/projects/YScreen.jpg';
import PageWrapper from '../elements/PageWrapper';
import FlexWrapper from '../elements/FlexWrapper';
import SingleProject from '../singleProject/SingleProject';

const text = "W poniższej sekcji znajduję się wizualizacja kilku z moich projektów. Ich pełną listę można oczywiście zobaczyć na moim profilu ";
const ghRef = "https://github.com/Wiiktor22";
const mtDesc = "Program służący do analizy budżetu domowego, pozwala zapisywać przychody i wydatki. Napisany w React + Redux, natomiast jako system autoryzacji oraz bazę danych użyłem Firebase.";
const mtLive = "https://moneytracker-28506.web.app";
const mtCode = "https://github.com/Wiiktor22/MoneyTracker";
const yDesc = "Tradycyjna gra planszowa „w kości”, popularna na całym świecie. Gra napisana w React.";
const yLive = "https://wiiktor22.github.io/Yahtzee-Game/";
const yCode = "https://github.com/Wiiktor22/Yahtzee-Game";
const myCode = "https://github.com/Wiiktor22/MyWebSite";

const MyLink = styled.a`
    color: #39BAE9;
    text-decoration: none;
    font-weight: 400;
`;

const Wrapper = styled.div`
    @media(min-width: 1600px) {
        width: 80%;
        margin: 0 auto;
    }
`;

const Projects = () => (
    <PageWrapper>
        <Wrapper>
        <Heading>Projekty</Heading>
        <Paragraph>{text}<MyLink href={ghRef} target="_blank">GitHub</MyLink>.</Paragraph>
        <FlexWrapper projects>
            <SingleProject 
                head="MoneyTracker"
                text={mtDesc}
                photo={mtScreen}
                live={mtLive}
                code={mtCode}
            />
            <SingleProject 
                head="Yahtzee!"
                text={yDesc}
                photo={yScreen}
                live={yLive}
                code={yCode}
            />
        </FlexWrapper>
        <Paragraph>Repozytorium mojej strony, na której obecnie się znajdujesz możesz znaleźć <MyLink href={myCode} target="_blank">tutaj</MyLink>.</Paragraph>
        </Wrapper>
    </PageWrapper>
)
 
export default Projects;