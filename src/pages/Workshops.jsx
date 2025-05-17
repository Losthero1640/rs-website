import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Workshops.css';

const workshops = [
  {
    id: 1,
    title: 'Robotics Bootcamp',
    date: '17 March 2025',
    description: 'Hands-on Bootcamp on different domains of Robotics for the purpose of Induction.',
    image: '/eventimages/bootcamp1.jpg'
  },
  {
    id: 2,
    title: 'RoboXplore',
    date: '8 April 2025',
    description: 'Making of Line follower bot and sharing knowledge on Arduino',
    image: '/eventimages/xplore1.jpg'
  },
  {
    id: 3,
    title: 'Robo Sumo',
    date: '15 May 2025',
    description: 'Introduction to Robot Operating System and its applications',
    image: '/eventimages/sumo1.jpg'
  },
  {
    id: 4,
    title: 'Death Race',
    date: '22 June 2025',
    description: 'Learn about drone assembly, programming, and flight control',
    image: '/eventimages/race1.jpg'
  },
  {
    id: 5,
    title: 'Drone Dynamics',
    date: '29 July 2025',
    description: 'Introduction to computer vision and image processing for robotics',
    image: '/eventimages/Drone1.png'
  },
  {
    id: 6,
    title: 'Bootcamp',
    date: '5 August 2025',
    description: 'Design and control of robotic arms for industrial applications',
    image: '/images/w3.jpg'
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