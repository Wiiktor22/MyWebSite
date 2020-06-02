import React from 'react';
import styled from 'styled-components';
import Paragraph from '../elements/Paragraph';
import Heading from '../elements/Heading';
import PageWrapper from '../elements/PageWrapper';
import SingleProject from '../singleProject/SingleProject';
import { projects } from '../../assets/data/projects';
import ProjectsWrapper from '../elements/GridWrapper';

const text = "W poniższej sekcji znajduję się wizualizacja kilku z moich projektów. Ich pełną listę można oczywiście zobaczyć na moim profilu ";
const ghRef = "https://github.com/Wiiktor22";
const myCode = "https://github.com/Wiiktor22/MyWebSite";

const MyLink = styled.a`
    color: #39BAE9;
    text-decoration: none;
    font-weight: 400;
`;

const Wrapper = styled.div`
    @media(min-width: 1600px) {
        width: 80%;
        margin: 0 auto;
    }
`;

const Projects = () => (
    <PageWrapper>
        <Wrapper>
            <Heading>Projekty</Heading>
            <Paragraph>{text}<MyLink href={ghRef} target="_blank">GitHub</MyLink>.<br/>Repozytorium mojej strony, na której obecnie się znajdujesz możesz znaleźć <MyLink href={myCode} target="_blank">tutaj</MyLink>.</Paragraph>
            <ProjectsWrapper>
                {projects.map((project, index) => (
                    <SingleProject 
                        key={index}
                        head={project.title}
                        text={project.text}
                        photo={project.photo}
                        live={project.live}
                        code={project.code}
                    />
                ))}
            </ProjectsWrapper>
        </Wrapper>
    </PageWrapper>
)
 
export default Projects;