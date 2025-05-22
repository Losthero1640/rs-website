import React from 'react'
import '../styles/About.css'

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <h1 className="section-title">About Us</h1>

        <section className="about-section with-video">
          <div className="text-content">
            <h2>Our Mission</h2>
            <p>
              Developing new ideas in the field of Robotics and Technology to
              enable students to learn new technologies, assimilate appropriate
              skills, and create innovations that solve real-world problems. Our
              goal is to improve quality of life by training students with
              character, leadership, and self-attainment.
            </p>

            <h2>Our History</h2>
            <p>
              The Robotics Club is an OFFICIAL TECHNICAL club of VSSUT, Burla
              which encourages various technical activities and projects in the
              field of amateur as well as advanced robotics. The members are a
              bunch of budding technocrats driven by a strong zest for learning
              and applying theoretical knowledge to real-life robotic solutions.
            </p>
          </div>

          <div className="video-container">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/RhroZl45nQo"
              title="VSSUT ROBOTICS- The Confluence of Innovative Minds"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section className="about-section">
          <h2>What We Do</h2>
          <div className="activities">
            <div className="activity-card">
              <h3>Projects</h3>
              <p>
                We work on cutting-edge robotics projects ranging from
                autonomous vehicles to robotic arms and AI-powered systems.
              </p>
              <a className="btn btn-primary" href="/projects" data-discover="true">
                Explore 
              </a>
            </div>
            <div className="activity-card">
              <h3>Events</h3>
              <p>
                Regular workshops on topics like ROS, CAD design, embedded
                systems, and machine learning for robotics.
              </p>
              <a className="btn btn-primary" href="/workshops" data-discover="true">
                Explore 
              </a>
            </div>
            <div className="activity-card">
              <h3>Competitions</h3>
              <p>
                We participate in national and international robotics
                competitions to test, challenge, and improve our skills against
                the best.
              </p>
              <a className="btn btn-primary" href="/competitions" data-discover="true">
                Explore 
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
