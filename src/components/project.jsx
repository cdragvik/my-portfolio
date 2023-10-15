import React from 'react';
import styled from 'styled-components';

const ProjectCardWrapper = styled.div`
  width: 300px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const ProjectImage = styled.div`
  img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
    margin-bottom: 12px;
  }
`;

const ProjectDetails = styled.div`
  h3 {
    font-size: 1.5rem;
    margin: 0;
  }

  .project-description {
    font-size: 1rem;
    color: #333;
    margin: 8px 0;
  }

  .project-technologies {
    font-size: 0.9rem;
    color: #777;
    margin: 4px 0;
  }
`;

function Project({ project }) {
  return (
    <ProjectCardWrapper>
      <ProjectImage>
        <img src={process.env.PUBLIC_URL + project.image} alt={project.title} />
      </ProjectImage>
      <ProjectDetails>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <p className="project-technologies">
          Technologies Used: {project.technologies.join(', ')}
        </p>
      </ProjectDetails>
    </ProjectCardWrapper>
  );
}

export default Project;
