import React from 'react';
import ProjectCard from './ProjectCard';


function Portfolio() {
  const projects = [
    { id: 1, title: 'Project One', description: 'Description for project one' },
    { id: 2, title: 'Project Two', description: 'Description for project two' },
    // Add more projects as needed
  ];

  return (
    <div className="portfolio">
      <h1>My Projects</h1>
      <div className="projects">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
