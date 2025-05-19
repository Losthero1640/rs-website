import React from 'react';
import '../styles/MemberCard.css';

const MemberCard = ({ member, onClick, compact }) => {
  if (compact) {
    return (
      <div className="member-card compact" onClick={onClick}>
        <img src={member.image} alt={member.name} className="member-image" />
        <div className="member-info">
          <h3>{member.name}</h3>
          <p className="role">{member.role}</p>
          <p className="branch">{member.branch}</p>
          <div className="projects">
            <h4>Projects:</h4>
            <ul>
              {member.projects.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="member-card">
      <div className="card-inner">
        <div className="card-front">
          <img src={member.image} alt={member.name} className="member-image" />
          <div className="member-info">
            <h3>{member.name}</h3>
          </div>
        </div>
        <div className="card-back">
          <div className="member-info">
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <p className="branch">{member.branch}</p>
            <div className="skills-section">
              <h4>Skills</h4>
              <div className="skills-list">
                {member.skills && member.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <button className="view-btn" onClick={onClick}>View Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;