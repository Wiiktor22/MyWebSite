import styled from 'styled-components';

const Heading = styled.h2`
    font-size: 2.8rem;
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    letter-spacing: .5px;
    color: #39BAE9;
    padding: 1vh 0 2vh;
    animation: .7s show ease-in;
    @keyframes show {
        from {
            transform: translateY(100%);
        }
        to {
            transform: translateX(0);
        }
    }
    @media (min-width: 768px) {
        font-size: 3.6rem;
        padding: 1vh 0 3vh;
    }
    @media (min-width: 768px) {
        letter-spacing: 1.5px;
    }
`;

export default Heading;
