import React from 'react';
import styled from 'styled-components';
import Paragraph from '../elements/Paragraph';
import Heading from '../elements/Heading';
import SmallHeading from '../elements/SmallHeading';
import PageWrapper from '../elements/PageWrapper';
import FlexWrapper from '../elements/FlexWrapper';
import photo from './../../assets/photos/skills.svg'
import Photo from '../elements/PhotoWrapper';
import { skills, jsText } from '../../assets/data/skills';

const additionalText = "Tak jak wspominałem na stronie startowej, poza wyżej wymienionymi technologiami miałem też styczność z językiem C# z wykorzystaniem ASP.NET w strukturze MVC.";

const ImgContainer = styled.img`
    height: 50px;
    width: 50px;
    margin-right: 3px;
`;

const ImgWrapper = styled.div`
    display: flex;
    transform: translateX(-5px);
    padding-bottom: 1.5vh;
`;

const Wrapper = styled.div`
    width: 100%;
    @media (min-width: 1024px) {
        width: 50%;
    }
    @media (min-width: 1600px) {
        overflow: hidden;
    }
`;

const SecondDiv = styled.div`
    display: none;
    @media (min-width: 1024px) {
        display: block;
        position: fixed;
        top: 50%;
        right: 10%;
        transform: translateY( -50%);
        width: 300px;
        height: 90vh;
    }
    @media (min-wdith: 1366px) {
        right: 15%;
    }
    @media (min-width: 1800px) {
        right: 20%;
    }
`;

const PhotoWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Skills = () => {
    return (
        <FlexWrapper skills>
            <PageWrapper>
                <Wrapper>
                    <Heading>Programowanie</Heading>
                    {
                        skills.map((item, index) => (
                            <>
                                <SmallHeading>{item.title}</SmallHeading>
                                {!index && <Paragraph>{jsText}</Paragraph>}
                                <Paragraph>{item.text}</Paragraph>
                                <ImgWrapper>
                                    {item.pictures.map((picture, index) => (
                                        <ImgContainer src={picture} key={index}/>
                                    ))}
                                </ImgWrapper>
                            </>
                        ))
                    }
                    <Paragraph>{additionalText}</Paragraph>
                </Wrapper>
            </PageWrapper>
            <SecondDiv>
                {window.innerWidth > 1023 && (
                    <PhotoWrapper>
                        <Photo src={photo} />
                    </PhotoWrapper>
                )}
            </SecondDiv>
        </FlexWrapper> 
    );
}
    
export default Skills;
