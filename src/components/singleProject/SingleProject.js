import React from 'react';
import styled, { css } from 'styled-components';
import SmallHeading from '../elements/SmallHeading';
import Paragraph from '../elements/Paragraph';
import Button from '../elements/Button';
import { useState } from 'react';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 30% 70%;
    box-shadow: 0 0 12px rgba(33,33,33,.2);
    padding: 1vh 1vw;
    border-radius: 5px;

    ${({ mobile }) => (
        mobile && css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 1vh 5vw;
        `
    )}
`;

const InformationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 2vh 0;
    border-radius: 5px;
`;

const Img = styled.img`
    width: 100%;
    height: 160px;
    border-radius: 5px;
    @media (min-width: 1366px) {
        height: 140px;
        width: 90%;
    }
    @media (min-width: 1536px) {
        width: 80%;
        height: 150px;
    }
`;

const BtnWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    @media (min-width: 1366px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const SingleProject = ({ head, text, photo, live, code}) => {
    const [width] = useState(window.innerWidth);
    const desktopView = () => (
        <Wrapper>
            <InformationWrapper>
                <SmallHeading project>{head}</SmallHeading>
                <BtnWrapper>
                    <Button href={live} target="_blank">Live</Button>
                    <Button href={code} target="_blank">Code</Button>
                </BtnWrapper>
            </InformationWrapper>
            <ImgWrapper>
                <Img src={photo}/>
            </ImgWrapper>
            <Paragraph project>{text}</Paragraph>
        </Wrapper>
    );
    const mobileView = () => (
        <Wrapper mobile>
            <SmallHeading project>{head}</SmallHeading>
            <ImgWrapper>
                <Img src={photo}/>
            </ImgWrapper>
            <Paragraph project>{text}</Paragraph>
            <BtnWrapper>
                <Button href={live} target="_blank">Live</Button>
                <Button href={code} target="_blank">Code</Button>
            </BtnWrapper>
        </Wrapper>
    )
    return (
        <>
            {width > 1024 ? desktopView() : mobileView()}
        </>
    )
}

export default SingleProject;