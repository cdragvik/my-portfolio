import React from 'react';

function ProjectDetail({ project }) {
  return (
    <div className="project-detail">
      <h2>{project.title}</h2>
      <img src={project.image} alt={project.title} />
      <p>{project.description}</p>
      <p>Technologies Used: {project.technologies.join(', ')}</p>
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">
        Live Demo
      </a>
    </div>
  );
}

export default ProjectDetail;
