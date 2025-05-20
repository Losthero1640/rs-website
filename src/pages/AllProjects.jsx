import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/AllProjects.css'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projectdata'

const AllProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const handleProjectClick = (project) => {
    setSelectedProject(project)
  }

  const handleClosePopup = () => {
    setSelectedProject(null)
  }

  return (
    <div className="all-projects-page">
      <div className="container">
        <h1 className="page-title">Our Projects</h1>
        <div className="projects-grid">
          {projects.map((project) => (
            // <div key={project.id} className="project-card" onClick={() => handleProjectClick(project)}>
            //   <img src={project.image} alt={project.title} />
            //   <h3>{project.title}</h3>
            // </div>
            <ProjectCard
              project={project}
              onClick={() => handleProjectClick(project)}
              displayLearnMore={true}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="project-popup-overlay" onClick={handleClosePopup}>
          <div
            className="project-popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-button" onClick={handleClosePopup}>
              ×
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="project-popup-image"
            />
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <div className="project-details">
              <p>
                <strong>Status:</strong> {selectedProject.status}
              </p>
              <p>
                <strong>Technologies:</strong>{' '}
                {selectedProject.technologies.join(', ')}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AllProjects
