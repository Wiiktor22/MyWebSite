import styled from 'styled-components';

const Heading = styled.h2`
    font-size: 2.8rem;
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    letter-spacing: .5px;
    color: #39BAE9;
    padding: 1vh 0 2vh;
    @media (min-width: 768px) {
        font-size: 3.6rem;
        padding: 0 0 3vh;
    }
    @media (min-width: 768px) {
        letter-spacing: 1.5px;
    }
    @media (min-width: 1600px) {
        font-size: 3.5rem;
    }
`;

export default Heading;
