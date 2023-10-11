import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to access route parameters
import projectData from '../data/projectsData';

function ProjectDetail() {
  // Access the projectId from the URL parameter
  const { projectId } = useParams();

  // Fetch the project details based on the projectId
  const project = projectData.find((p) => p.id === parseInt(projectId));

  if (!project) {
    return <div>Project not found.</div>;
  }

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
