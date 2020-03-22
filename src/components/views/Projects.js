import React from 'react';
import styled from 'styled-components';
import Paragraph from '../elements/Paragraph';
import Heading from '../elements/Heading';
import SmallHeading from '../elements/SmallHeading';
import Button from '../elements/Button';
import mtScreen from './../../assets/projects/MT_Screen.jpg';
import yScreen from './../../assets/projects/YScreen.jpg';
import PageWrapper from '../elements/PageWrapper';

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

const BtnWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin: 1.5vh 0;
`;

const Img = styled.img`
    width: 100%;
    height: 160px;
`;

const Projects = () => {
    return ( 
        <PageWrapper>
            <Heading>Projekty</Heading>
            <Paragraph>{text}<MyLink href={ghRef} target="_blank">GitHub</MyLink>.</Paragraph>
            <SmallHeading>MoneyTracker</SmallHeading>
            <Paragraph>{mtDesc}</Paragraph>
            <Img src={mtScreen}/>
            <BtnWrapper>
                <Button href={mtLive} target="_blank">Live</Button>
                <Button href={mtCode} target="_blank">Code</Button>
            </BtnWrapper>
            <SmallHeading>Yahtzee!</SmallHeading>
            <Paragraph>{yDesc}</Paragraph>
            <Img src={yScreen}/>
            <BtnWrapper>
                <Button href={yLive} target="_blank">Live</Button>
                <Button href={yCode} target="_blank">Code</Button>
            </BtnWrapper>
            <Paragraph>Repozytorium mojej strony, na której obecnie się znajdujesz możesz znaleźć <MyLink href={myCode} target="_blank">tutaj</MyLink>.</Paragraph>
        </PageWrapper>
    );
}
 
export default Projects;