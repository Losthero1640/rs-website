import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CompetitionCard.css';

const CompetitionCard = ({ competition }) => {
  return (
    <div className="competition-card">
      <div className="competition-image-container">
        <img 
          src={competition.image} 
          alt={competition.name} 
          className="competition-image"
        />
        <div className="competition-year">{competition.year}</div>
      </div>
      <div className="competition-info">
        <h3>{competition.name}</h3>
        <p className="achievement">{competition.achievement}</p>
        <div className="competition-details">
          {competition.details && (
            <p className="details">{competition.details}</p>
          )}
          <Link to={`/competitions/${competition.id}`} className="btn btn-outline">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompetitionCard;