import styled, { css } from 'styled-components';

const SmallHeading = styled.h3`
    font-size: 2rem;
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    padding: .5vh 0 1vh;
    @media (min-width: 768px) {
        font-size: 2.2rem;
    }

    ${({ project }) => (
        project && css`
            color: #39BAE9;
            align-self: flex-start;
        `
    )}
`;

export default SmallHeading;