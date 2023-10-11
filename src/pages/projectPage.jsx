// projectsPage.jsx
import React from 'react';
import Project from '../components/project'; // Import the Project component
import projectData from '../data/projectsData'; // Import your project data
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectData.map((project) => (
            <Link to={`/projects/${project.id}`} key={project.id}>
          <Project key={project.id} project={project} />
          </Link>
          ))}
      </div>
    </div>
  );
}

export default Projects;
