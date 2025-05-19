import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
<div className="project-card">
      <div className="project-image-container">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />
        <p className="status" data-status={project.status.toLowerCase()}>
          {project.status}
        </p>
      </div>

      <div className="project-info">
        <h3>{project.title}</h3>
        <p className="description">{project.description}</p>
        <Link to={`project/${project.id}`} className='btn'>Learn More</Link>
      </div>
    </div>                           

  );
};

export default ProjectCard;