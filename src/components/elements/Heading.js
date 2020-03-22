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
`;

export default Heading;
