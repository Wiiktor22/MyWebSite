import styled from 'styled-components';

const Paragraph = styled.p`
    font-size: 1.5rem;
    font-weight: 300;
    padding-bottom: 1.5vh;
    @media (min-width: 768px) {
        font-size: 1.6rem;
        padding-bottom: 2vh;
    }
`;

export default Paragraph;