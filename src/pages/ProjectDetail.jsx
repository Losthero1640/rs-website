import React from 'react'
import { useParams } from 'react-router-dom'
import { projectsData } from '../data/projectsData' 
import '../styles/ProjectDetail.css'

const ProjectDetailPage = () => {
  const { id } = useParams()
  const project = projectsData.find((p) => p.id.toString() === id)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="project-detail">
      <div className="container">
      <a href="/" className='btn'>&larr; Back To Home</a>
      <br />
        <h2 className='section-title'>{project.title}</h2>
        <img
          src={project.image}
          alt={project.title}
          className="project-banner"
        />
        <p className='project-status' data-status  ={project.status.toLowerCase()}>
          <strong>Status:</strong> {project.status}
        </p>
        <p>
          <strong>Description:</strong>
        </p>
        <p>{project.longDescription || project.description}</p>
      </div>
    </div>
  )
}

export default ProjectDetailPage
