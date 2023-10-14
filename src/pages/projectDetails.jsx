import React from 'react';
import styled from 'styled-components';
import projectData from '../data/projectsData';
import { useParams } from 'react-router-dom';


const Section = styled.section`
  display: flex;
  max-width: 1000px;
  margin: auto;
  padding: 20px;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
  padding: 20px;
  margin-bottom: 20px;
`;

const ProjectImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 12px;
`;

const ProjectDescription = styled.p`
  font-size: 18px;
  margin-bottom: 12px;
`;

const Button = styled.a`
  background-color: #f7d9c6;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 18px;
  text-transform: uppercase;
  border-radius: 8px;
  margin: 10px 0;
`;

function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectData.find((p) => p.id === parseInt(projectId));

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
      <Section>
        <Content>
          <Title>{project.title}</Title>
          <ProjectImage src={project.image} alt={project.title} />
          <ProjectDescription>{project.description}</ProjectDescription>
          <p className="project-technologies">
          Technologies Used: {project.technologies.join(', ')}
            </p>
          <Button href={project.githubLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </Button>
          <Button href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">
            Live Demo
          </Button>
        </Content>
      </Section>

  );
}

export default ProjectDetail;
