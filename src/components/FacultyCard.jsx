// components/FacultyCard.js
import React from 'react';
import '../styles/FacultyCard.css';

const FacultyCard = ({ faculty }) => {
  return (
    <div className="faculty-card">
      <img src={faculty.photo} alt={faculty.name} className="faculty-photo" />
      <h3>{faculty.name}</h3>
      <p>{faculty.designation}</p>
      <a href={`mailto:${faculty.email}`} className="faculty-email">
        {faculty.email}
      </a>
    </div>
  );
};

export default FacultyCard;
