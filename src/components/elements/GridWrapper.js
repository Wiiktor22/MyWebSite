import styled from 'styled-components';

const ProjectsWrapper = styled.div`
    display: grid;
    width: 100%;
    grid-gap: 30px 30px;
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
        width: 100%;
    }
`;

export default ProjectsWrapper;