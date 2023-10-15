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


function Project({ project }) {
  return (
    <ProjectCardWrapper>
      <ProjectImage>
        <img src={project.image} alt={project.title} />
      </ProjectImage>
        <h3>{project.title}</h3>
        <p>{project.type}</p>
    </ProjectCardWrapper>
  );
}

export default Project;
