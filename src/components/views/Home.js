import React from 'react';
import styled from 'styled-components';
import Heading from '../elements/Heading';
import Paragraph from '../elements/Paragraph';
import PageWrapper from '../elements/PageWrapper';
import FlexWrapper from '../elements/FlexWrapper';
import Photo from '../elements/PhotoWrapper';
import photo from './../../assets/photos/main.svg';

const text1 = "Nazywam się Wiktor, mam 21 lat i jestem studentem II roku Uniwersytetu Gdańskiego na kierunku Informatyka i Ekonometria. Aktualnie szukam pracy jako Junior Front-End Developer lub Junior JavaScript Developer, aby zdobywać cenne doświadczenie już jako student.";

const text2 = "Swoją przygodę z programowaniem zacząłem niewinnie od pewnej książki o języku C#, która wpadła mi w ręce. Z uwagi na fakt, że od najmłodszych lat wykazywałem zainteresowanie komputerem i otaczająca nas technologią, świat programowania bardzo mnie zaciekawił. Z biegiem czasu mój entuzjazm w kierunku programowania był co raz to większy, co skłoniło mnie do poszukiwania odpowiedzi na pytanie, którą ze ścieżek szeroko pojętego programowania wybrać…";

const text3 = "Oprócz programowania interesuję się również motoryzacją (w szczególności niemiecką), a także koszykówką. W wolnej chwili lubię obejrzeć dobry kryminał na Netflix :)";

const Wrapper = styled.div`
    width: 100%;
    @media (min-width: 1024px) {
        width: 50%;
        margin-right: 5vw;
    }
`;

const Home = () => {
    return ( 
        <PageWrapper>
            <FlexWrapper>
                <Wrapper>
                    <Heading>Cześć!</Heading>
                    <Paragraph>{text1}</Paragraph>
                    <Paragraph>{text2}</Paragraph>
                    <Paragraph>{text3}</Paragraph>
                </Wrapper>
                {window.innerWidth > 1023 && <Photo src={photo} />}
            </FlexWrapper>
        </PageWrapper>
    );
}
 
export default Home;