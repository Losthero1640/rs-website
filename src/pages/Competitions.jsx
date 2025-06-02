import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Competitions.css';


const roboconEvents = [
  {
    id: 101, 
    name: 'Robocon 2015',
    year: '2015',
    achievement: 'AIR-27',
    image: '/roboconimages/robocon15.jpg',
    description: "Project:Robominton - A badminton-playing robot designed to compete in the Robocon 2015 competition. The robot was engineered to autonomously play badminton, showcasing advanced robotics and AI capabilities.",
  },
  {
    id: 102, 
    name: 'Robocon 2016',
    year: '2016',
    achievement: 'AIR-20',
    image: '/roboconimages/robocon16.jpg', 
    description: "Project:Hybrid Pole Climbing Bot - A versatile robot designed for the Robocon 2016 competition, capable of climbing poles and navigating complex terrains. It demonstrated innovative engineering and control systems.",
  },
  {
    id: 103, 
    name: 'Robocon 2017',
    year: '2017',
    achievement: 'AIR-6',
    image: '/roboconimages/robocon17.jpg',
    description: "Project: Aerodisc – A disc-launching robot designed for the Robocon 2017 competition. Engineered with holonomic motion and real-time sensing capabilities, it featured pneumatic launchers, aluminium chassis, and autonomous navigation using Kinect, IMU, and color sensors."
  }
];

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
    image: '/compimages/mio2.jpg',
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
    name: 'Innovision 2023 NIT-R',
    year: '2023',
    achievement: 'Finalists',
    image: '/compimages/inno23.1.png',
    description: 'Combat robotics competition featuring custom-built fighting robots.'
  }
];

const Competitions = () => {
  return (
    <> 
      <div className="competitions-page robocon-section">
        <div className="container">
          <h1 className="page-title">Robocon</h1>
          <div className="competitions-grid">
            {roboconEvents.map(event => (
              <Link to={`/robocon/${event.id}`} key={event.id} className="competition-card-link">
                <div className="competition-card">
                  <div className="competition-image-container">
                    <img 
                      src={event.image} 
                      alt={event.name} 
                      className="competition-image"
                    />
                    <div className="competition-year">{event.year}</div>
                  </div>
                  <div className="competition-info">
                    <h3>{event.name}</h3>
                    <p className="achievement">{event.achievement}</p>
                    <p className="description">{event.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

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
    </>
  );
};

export default Competitions;