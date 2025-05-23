import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Workshops.css';

const workshops = [
  {
    id: 1,
    title: 'Robotics Bootcamp',
    date: '17 March 2025',
    description: 'Kickstarting Tech Journey: Bootcamp 2025- Learning Before Launch.',
    image: '/eventimages/bootcamp1.jpg'
  },
  {
    id: 2,
    title: 'RoboXplore',
    date: '8 February 2025',
    description: 'Exploring Robotics Made Fun: Roboxplore 2025 - from basics to battle bots',
    image: '/eventimages/xplore1.jpg'
  },
  {
    id: 3,
    title: 'Robo Sumo',
    date: '20 & 21 February 2025',
    description: 'Pushing the Limits: Robo Sumo 2025',
    image: '/eventimages/sumo1.jpg'
  },
  {
    id: 4,
    title: 'Death Race',
    date: '21 & 22 February 2025',
    description: 'Speed meets skill: Death Race Ignites Samavesh 2025',
    image: '/eventimages/race1.jpg'
  },
  {
    id: 5,
    title: 'Drone Dynamics',
    date: '7 October 2023',
    description: 'Drone Dynamics by VSSUT Robotics Society',
    image: '/eventimages/Drone1.png'
  },
  {
    id: 6,
    title: 'Tread-O-quest',
    date: '4 March 2023',
    description: 'Design and control of robotic arms for industrial applications',
    image: '/eventimages/toq1.jpg'
  },
  {
    id: 7,
    title: 'Aeroflix',
    date: '6 March 2023',
    description: 'Design and control of robotic arms for industrial applications',
    image: '/eventimages/aero1.jpg'
  }
];

const Workshops = () => {
  return (
    <div className="workshops-page">
      <div className="container">
        <h1 className="page-title">Our Events</h1>
        <div className="workshops-grid">
          {workshops.map(workshop => (
            <Link to={`/workshops/${workshop.id}`} key={workshop.id} className="workshop-card-link">
              <div className="workshop-card">
                <div className="workshop-image-container">
                  <img 
                    src={workshop.image} 
                    alt={workshop.title} 
                    className="workshop-image"
                  />
                  <div className="workshop-date">{workshop.date}</div>
                </div>
                <div className="workshop-info">
                  <h3>{workshop.title}</h3>
                  <p className="description">{workshop.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workshops; 