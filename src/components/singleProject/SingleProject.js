import React from 'react';
import styled from 'styled-components';
import SmallHeading from '../elements/SmallHeading';
import Paragraph from '../elements/Paragraph';
import Button from '../elements/Button';

const Wrapper = styled.div`
    @media( min-width: 1024px) {
        display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    }
`;

const ImgWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const Img = styled.img`
    width: 100%;
    height: 160px;
    @media (min-width: 768px) {
        width: auto;
        height: 200px;
    } 
    @media (min-width: 1024px) {
        width: 90%;
        height: 180px;
    }
    @media (min-width: 1366px) {
        width: 75%;
        height: 200px;
    }
    @media (min-width: 1600px) {
        width: 80%;
        height: 240px;
    }
`;

const BtnWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin: 1.5vh 0;
    @media (min-width: 768px) {
        justify-content: center;
    }
`;

const SingleProject = ({ head, text, photo, live, code}) => (
    <Wrapper>
        <SmallHeading>{head}</SmallHeading>
        <Paragraph>{text}</Paragraph>
        <ImgWrapper>
            <Img src={photo}/>
        </ImgWrapper>
        <BtnWrapper>
            <Button href={live} target="_blank">Live</Button>
            <Button href={code} target="_blank">Code</Button>
        </BtnWrapper>
    </Wrapper>
)

export default SingleProject;