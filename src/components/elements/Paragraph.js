import styled, { css } from 'styled-components';

const Paragraph = styled.p`
    font-size: 1.5rem;
    font-weight: 300;
    padding-bottom: 1.5vh;
    @media (min-width: 768px) {
        padding-bottom: 2vh;
    }

    ${({ project }) => (
        project && css`
            grid-column: 1 / -1;
        `
    )}
`;

export default Paragraph;