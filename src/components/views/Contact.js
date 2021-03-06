import React from 'react';
import styled from 'styled-components';
import Heading from '../elements/Heading';
import Paragraph from '../elements/Paragraph';
import MailIcon from './../../assets/icons/mail.png';
import LinkedinIcon from './../../assets/icons/linkedin.png';
import PageWrapper from '../elements/PageWrapper';

const text = "Aktualnie szukam pracy na terenie Trójmiasta, chętnie zmierzę się z nowymi wyzwaniami programistycznymi. Jestem osobą ambitną, której zależy na poszerzeniu swojej wiedzy.";
const text2 = "Zapraszam do kontaktu ze mną poprzez:";
const LinkedIn = "https://www.linkedin.com/in/wiktor-szlegier-5881711a5/";

const ContactItem = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 30px;
    width: 100%;
    margin-bottom: 1vh;
`;

const ContactIcon = styled.img`
    height: 24px;
    width: 24px;
    margin-right: 15px;
`;

const ContactText = styled.h3`
    font-size: 1.7rem;
    font-weight: 400;
    color: #39BAE9;
`;

const Footer = styled.footer`
    margin-top: 2vh;
`;

const FooterText = styled.p`
    margin-bottom: .3vh;
`;

const FooterLink = styled.a`
    color: white;
`;

const Contact = () => {
    const date = new Date();
    return ( 
        <PageWrapper>
            <Heading>Kontakt</Heading>
            <Paragraph>{text}</Paragraph>
            <Paragraph>{text2}</Paragraph>
            <ContactItem>
                <a href={"mailto:22wiktors@gmail.com"}><ContactIcon src={MailIcon}/></a>
                <ContactText>22wiktors@gmail.com</ContactText>
            </ContactItem>
            <ContactItem>
                <a href={LinkedIn} target="_blank" rel="noopener noreferrer"><ContactIcon src={LinkedinIcon}/></a>
                <ContactText>Wiktor Szlegier</ContactText>
            </ContactItem>
            <Footer>
                <FooterText>Wiktor Szlegier © {date.getFullYear()}</FooterText>
                <FooterText>Icons source <FooterLink href="https://icons8.com/" target="_blank">icons8</FooterLink></FooterText>
            </Footer>
        </PageWrapper>
    );
}
 
export default Contact;