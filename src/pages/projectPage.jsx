// projectsPage.jsx
import React from 'react';
import Project from '../components/project'; // Import the Project component
import projectData from '../data/projectsData'; // Import your project data

function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectData.map((project) => (
          <Project key={project.id} project={project} /> // Render the Project component for each project
        ))}
      </div>
    </div>
  );
}

export default Projects;
