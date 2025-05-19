import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../styles/Achievements.css';

const Achievements = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const achievements = [
    {
      id: 1,
      title: "National Robotics Competition",
      year: "2023",
      description: "Secured 1st place in the National Robotics Competition, showcasing innovative automation solutions.",
      category: "Competition"
    },
    {
      id: 2,
      title: "Research Publication",
      year: "2023",
      description: "Published research paper on 'Advanced Machine Learning Applications in Robotics' in IEEE Robotics Journal.",
      category: "Research"
    },
    {
      id: 3,
      title: "Industry Collaboration",
      year: "2022",
      description: "Successfully completed a collaborative project with leading tech companies in robotics automation.",
      category: "Industry"
    },
    {
      id: 4,
      title: "International Conference",
      year: "2022",
      description: "Presented innovative robotics solutions at the International Robotics Conference in Tokyo.",
      category: "Conference"
    },
    {
      id: 5,
      title: "Innovation Award",
      year: "2021",
      description: "Received the Innovation Award for developing a novel robotic control system.",
      category: "Award"
    }
  ];

  return (
    <div className="achievements-page">
      <Navbar />
      <div className="achievements-container">
        <h1 className="achievements-title">Our Achievements</h1>
        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="achievement-card">
              <div className="achievement-header">
                <h3>{achievement.title}</h3>
                <span className="achievement-year">{achievement.year}</span>
              </div>
              <p className="achievement-description">{achievement.description}</p>
              <span className="achievement-category">{achievement.category}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements; 