import React from 'react';
import styled from 'styled-components';
import Heading from '../elements/Heading';
import Paragraph from '../elements/Paragraph';
import MailIcon from './../../assets/icons/mail.png';
import LinkedinIcon from './../../assets/icons/linkedin.png';
import PageWrapper from '../elements/PageWrapper';

const text = "Zapraszam do kontaktu ze mną – szukam pracy w Trójmieście.";
const text2 = "Skontaktuj się ze mną poprzez:";

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

const Contact = () => {
    return ( 
        <PageWrapper>
            <Heading>Kontakt</Heading>
            <Paragraph>{text}</Paragraph>
            <Paragraph>{text2}</Paragraph>
            <ContactItem>
                <ContactIcon src={MailIcon}/>
                <ContactText>22wiktors@gmail.com</ContactText>
            </ContactItem>
            <ContactItem>
                <ContactIcon src={LinkedinIcon}/>
                <ContactText>Wiktor Szlegier</ContactText>
            </ContactItem>
        </PageWrapper>
    );
}
 
export default Contact;