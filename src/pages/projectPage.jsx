import React from 'react';
import Project from '../components/project'; // Import the Project component
import projectData from '../data/projectsData'; // Import your project data
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Create a styled container for the project cards
const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* Adjust the gap as needed */
  margin-top: 20px; /* Add margin to separate from the heading */
`;

const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
  padding: 20px;
`;

function Projects() {
  return (
    <div className="projects">
      <Title>Projects</Title>
      <ProjectList>
        {projectData.map((project) => (
          <Link to={`/projects/${project.id}`} key={project.id}>
            <Project key={project.id} project={project} />
          </Link>
        ))}
      </ProjectList>
    </div>
  );
}

export default Projects;
