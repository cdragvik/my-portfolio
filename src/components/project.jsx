// Project.jsx

import React from 'react';
import '../index.css';

function Project({ project }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-details">
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <p className="project-technologies">
          Technologies Used: {project.technologies.join(', ')}
        </p>
        <div className="project-links">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            GitHub
          </a>
          <a
            href={project.liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
