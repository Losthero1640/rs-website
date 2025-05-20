import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/ProjectCard.css'

const ProjectCard = ({ project, onClick, displayLearnMore }) => {
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
        {displayLearnMore && (
          <button className="btn" onClick={onClick}>
            Learn More
          </button>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
