import React from 'react';

function Project({ project }) {
  return (
    <div className="project">
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
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

export default Project;
