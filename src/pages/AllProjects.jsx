import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AllProjects.css';

const AllProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'AMR',
      description: 'Developing a Mars rover prototype with autonomous navigation capabilities. This project focuses on implementing advanced path planning algorithms and obstacle avoidance systems.',
      image: 'projects/amr.jpg',
      status: 'In Progress',
      technologies: ['ROS', 'Python', 'Computer Vision']
    },
    {
      id: 2,
      title: 'UAV',
      description: "An unmanned aerial vehicle (UAV), commonly known as a drone, is an aircraft without any human pilot, crew, or passengers on board. UAVs are a component of an unmanned aircraft system (UAS), UAVs are used for observation and tactical planning. This technology is now available for use in the emergency response field to assist crew members.",
      image: 'projects/uav.jpg',
      status: 'Completed',
      technologies: ['Arduino', 'C++', 'OpenCV']
    },
    {
      id: 3,
      title: '3D - Printer',
      description: 'Students of VSSUT’s Robotics Society have achieved a new feat in the field of innovation and technology by developing Odishas first low cost fully-customizable open-source 3D printer, which creates three-dimensional solid objects from a digital file. We use a form of additive manufacturing known as FDM to print prototypes.',
      image: 'projects/3d.jpg',
      status: 'Completed',
      technologies: ['Python', 'OpenCV', 'ROS']
    },
    {
      id: 4,
      title: 'ROUV',
      description: "ROUVs are one of the most important discoveries in the exploration of the underwater environment because of having greater speed, endurance, and depth capability. It consists of 6 thrusters having the configuration of 4 vectored and 2 verticals. It also comprises of Gyroscope, Accelerometer, and Compass.",
      image: 'projects/rouv.jpg',
      status: 'Completed',
      technologies: ['IoT', 'Node.js', 'React Native']
    },
    {
      id: 5,
      title: 'E-Cycle',
      description: "Electric Cycle is one of the effective solutions to tackle the global menace of Environmental Pollution & increase in the prices of Petrol and Diesel. Equipped with a Li-on battery, DC motor, and Controller, It has various features like rechargeable battery which gets fully charged in 2 hours, battery is getting charged pedaling, so there is no problem with the battery draining, attains a maximum speed of 20 mph with a Payload of 65 Kg, has mileage of 20-25 Km in one full charge.",
      image: 'projects/ecycle.jpg',
      status: 'In Progress',
      technologies: ['Python', 'TensorFlow', 'OpenCV']
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  return (
    <div className="all-projects-page">
      <div className="container">
        <h1 className="page-title">Our Projects</h1>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card" onClick={() => handleProjectClick(project)}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="project-popup-overlay" onClick={handleClosePopup}>
          <div className="project-popup-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={handleClosePopup}>×</button>
            <img src={selectedProject.image} alt={selectedProject.title} className="project-popup-image" />
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <div className="project-details">
              <p><strong>Status:</strong> {selectedProject.status}</p>
              <p><strong>Technologies:</strong> {selectedProject.technologies.join(', ')}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProjects; 