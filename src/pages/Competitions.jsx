import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Competitions.css';

const competitions = [

   {
    id: 1,
    name: 'RosCon India',
    year: '2024',
    achievement: '',
    image: '/compimages/roscon.jpg',
    description: "ROSCon In'24 Bengaluru"
  },

  {
    id: 4,
    name: 'MIO Conclave',
    year: '2023',
    achievement: 'First Runner Up',
    image: '/compimages/mio.jpg',
    description: "VSSUT Robotics Society has participated in Make in Odisha Conclave - Utkarsh 2025. "
  },

  

  {
    id: 3,
    name: 'Smart India Hackathon',
    year: '2024',
    achievement: 'Finalists',
    image: '/images/comp2.jpg',
    description: 'National level hackathon focused on solving real-world problems using technology.'
  },

  {
    id: 2,
    name: 'Innovision at NIT Rourkela',
    year: '2024',
    achievement: 'Winner',
    image: '/images/comp1.jpg',
    description: 'Technical fest competition showcasing innovative robotics projects.'
  },
  
 
  {
    id: 5,
    name: 'RoboWars',
    year: '2023',
    achievement: 'Quarter Finalists',
    image: '/images/comp2.jpg',
    description: 'Combat robotics competition featuring custom-built fighting robots.'
  }
];

const Competitions = () => {
  return (
    <div className="competitions-page">
      <div className="container">
        <h1 className="page-title">Competitions/Events Particpated</h1>
        <div className="competitions-grid">
          {competitions.map(competition => (
            <Link to={`/competitions/${competition.id}`} key={competition.id} className="competition-card-link">
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
                  <p className="description">{competition.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Competitions; 