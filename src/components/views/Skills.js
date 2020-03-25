import React from 'react';
import styled from 'styled-components';
import Paragraph from '../elements/Paragraph';
import Heading from '../elements/Heading';
import SmallHeading from '../elements/SmallHeading';
import JSLogo from './../../assets/technologyIcons/js.png';
import ReactLogo from './../../assets/technologyIcons/react.png';
import CSSLogo from './../../assets/technologyIcons/css.png';
import SASSLogo from './../../assets/technologyIcons/sass.png';
import BootstrapLogo from './../../assets/technologyIcons/bootstrap.png';
import npmLogo from './../../assets/technologyIcons/npm.png';
import gitLogo from './../../assets/technologyIcons/git.png';
import PageWrapper from '../elements/PageWrapper';
import FlexWrapper from '../elements/FlexWrapper';
import photo from './../../assets/photos/skills.svg'
import Photo from '../elements/PhotoWrapper';

const text1 = "Dzisiejszy eko-system JavaScript’u jest bardzo imponujący, ilość technologii i narzędzi, które współpracują z tym językiem jest ogromna. Zdaję sobie sprawę, iż za pewne znam mały skrawek tego świata, ale zdecydowanie muszę przyznać, że jestem jego fanem!";
const text2 = "Uwielbiam pracować z React’em, budowanie aplikacji/stron react’owych to czysta przyjemność. W niedalekiej przyszłości bardzo chciałbym pracować z użyciem tej technologii, dzięki niej nauczyłem się lepiej porządkować swój kod, tworzyć re-używalne komponenty, co przekłada się na lepszą organizację całego projektu.";
const text3 = "Do tej pory w swoich projektach korzystałem z „czystego” CSS oraz z SASS. Pracowałem również z wykorzystaniem biblioteki Bootstrap.";
const text4 = "Jako system kontroli wersji w swoich projektach wykorzystywałem GIT, część z nich publikowałem na GitHub. Tworząc projekty stosowałem też często przeróżne pakiety, które instalowałem za pośrednictwem npm.";
const text5 = "Tak jak wspominałem na stronie startowej, poza wyżej wymienionymi technologiami miałem też styczność z językiem C# z wykorzystaniem ASP.NET w strukturze MVC.";

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
`;

const SecondDiv = styled.div`
    display: none;
    @media (min-width: 1024px) {
        display: block;
        position: relative;
        width: 300px;
        height: 100vh;
        align-self: flex-start;
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
        <PageWrapper>
            <FlexWrapper>
                <Wrapper>
                    <Heading>Programowanie</Heading>
                    <SmallHeading>JavaScript</SmallHeading>
                    <Paragraph>{text1}</Paragraph>
                    <Paragraph>{text2}</Paragraph>
                    <ImgWrapper>
                        <ImgContainer src={JSLogo}></ImgContainer>
                        <ImgContainer src={ReactLogo}></ImgContainer>
                    </ImgWrapper>
                    <SmallHeading>CSS</SmallHeading>
                    <Paragraph>{text3}</Paragraph>
                    <ImgWrapper>
                        <ImgContainer src={CSSLogo}></ImgContainer>
                        <ImgContainer src={SASSLogo}></ImgContainer>
                        <ImgContainer src={BootstrapLogo}></ImgContainer>
                    </ImgWrapper>
                    <SmallHeading>Narzędzia</SmallHeading>
                    <Paragraph>{text4}</Paragraph>
                    <ImgWrapper>
                        <ImgContainer src={gitLogo}></ImgContainer>
                        <ImgContainer src={npmLogo}></ImgContainer>
                    </ImgWrapper>
                    <Paragraph>{text5}</Paragraph>
                </Wrapper>
                <SecondDiv>
                    {window.innerWidth > 1023 && (
                        <PhotoWrapper>
                            <Photo src={photo} />
                        </PhotoWrapper>
                    )}
                </SecondDiv>
            </FlexWrapper>
        </PageWrapper>
    );
}
    
export default Skills;
