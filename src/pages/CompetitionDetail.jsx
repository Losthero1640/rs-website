import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/CompetitionDetail.css';

// Existing Competitions data
const competitions = [

  {
    id: 1,
    name: 'RosCon India',
    year: '2024',
    achievement: '',
    image: '/compimages/roscon3.jpg',
    description: "ROSCon In'24 Bengaluru",
    content: "The members of the Robotics Society of VSSUT, Burla, participated in the distinguished ROSCon India 2024, held at the Indian Institute of Science (IISc) Bengaluru, where they had the honor of listening to the distinguished speeches by Geoffrey Biggs, CTO of Open Robotics, and Angelo Corsaro, CEO of ZettaScale Technology.The 2-day exhibition highlighted lots of opportunities for meaningful networking as well as workshops featuring NVIDIA, along with 15+ companies, displaying all the newest innovations made in the field of Robotics and Technology.",
    gallery: [
      '/compimages/roscon.jpg',
      '/compimages/roscon2.jpg',
      '/compimages/roscon3.jpg',
      '/compimages/roscon4.jpg',
      '/compimages/roscon5.jpg',
       '/compimages/roscon6.jpg',
        '/compimages/roscon7.jpg'
    ]
  },

  {
    id: 4,
    name: 'MIO Conclave',
    year: '2023',
    achievement: '',
    image: '/compimages/mio.jpg',
    description: "VSSUT Robotics Society has participated in Make in Odisha Conclave - Utkarsh 2025.",
    content: "The Robotics Society of VSSUT, Burla, participated in Make in Odisha Conclave – Utkarsh 2025, showcasing three cutting-edge projects: an Autonomous Mobile Robot with excellent navigation, a Surface Level Vehicle designed for diverse terrains, and a Hexacopter with precise aerial capabilities. The event highlighted the society's commitment to innovation and technological excellence, fostering connections with industry leaders and reinforcing VSSUT's dedication to robotics and automation.",
    gallery: [
      '/compimages/mio.jpg',
      '/compimages/mio2.jpg',
      '/compimages/mio3.jpg',
      '/compimages/mio4.jpg',
      '/compimages/mio5.jpg',
      '/compimages/mio6.jpg',
    ]
  },
  

  {
    id: 3,
    name: 'Smart India Hackathon',
    year: '2024',
    achievement: 'Finalists',
    image: '/compimages/sih.jpg',
    description: 'National level hackathon focused on solving real-world problems using technology.',
    content: "Team 'Anusandhan' of the Robotics Society, VSSUT, Burla, successfully reached the grand finale of the Smart India Hackathon 2024, with their innovative project, 'Student Innovation', showcasing India's rich cultural heritage and traditions.",
    gallery: [
       '/compimages/sih1.jpg',
      '/compimages/sih2.jpg',
      '/compimages/sih3.jpg',
      '/compimages/sih4.jpg',
      '/compimages/sih5.jpg',
      '/compimages/sih6.jpg',
      '/compimages/sih7.jpg',
      '/compimages/sih8.jpg',
      '/compimages/sih9.jpg',
      '/compimages/sih10.jpg',
      '/compimages/sih11.jpg',
      '/compimages/sih12.jpg',
      '/compimages/sih13.jpg'
    ]
  },

  {
    id: 2,
    name: 'Innovision at NIT Rourkela',
    year: '2024',
    achievement: 'Winner',
    image: '/images/comp1.jpg',
    description: 'Technical fest competition showcasing innovative robotics projects.',
    content: 'Team "Dheera" of the Robotics Society, VSSUT, Burla, successfully accomplished the position of Runners-Up in the Robo Sumo Competition at NIT Rourkela, at their annual techno-management fest, Innovision 2024.',
    gallery: [
      '/compimages/inno1.jpg',
      '/compimages/inno2.jpg',
      '/compimages/inno3.jpg',
      '/compimages/inno4.jpg',
      '/compimages/inno5.jpg',
      '/compimages/inno6.jpg',
      '/compimages/inno7.jpg',
      '/compimages/inno8.jpg',
      
    ]
  },
  
  
  {
    id: 5,
    name: 'Innovision 2K23',
    year: '2023',
    achievement: 'Finalists',
    image: '/compimages/inno23.1.png',
    description: 'Combat robotics competition featuring custom-built fighting robots.',
    content: 'Our combat robot showcased exceptional design and engineering in the RoboWars competition, reaching the quarter-finals.',
    gallery: [
      '/compimages/inno23.2.jpg',
     '/compimages/inno23.3.jpg',
     '/compimages/inno23.4.jpg',
     '/compimages/inno23.5.jpg',
     '/compimages/inno23.6.jpg',
     '/compimages/inno23.7.png'
    ]
  }
];

const roboconEvents = [
  {
    id: 101, 
    name: 'Robocon 2015',
    year: '2015',
    achievement: 'AIR-27',
    image: '/roboconimages/robocon15.jpg',
    description: "Project:Robominton - An autonomous badminton-playing robot.",
    content: "Robominton is an autonomous badminton-playing robot developed for Robocon 2015 by the VSSUT Robotics Society. Featuring a pneumatic mobility system and precise control algorithms, it showcased advanced motion control and game logic. Built for speed and accuracy, it secured AIR 27 and Rank 1 in Odisha, marking a major achievement for the team.",
    gallery: []
  },
  {
    id: 102, 
    name: 'Robocon 2016',
    year: '2016',
    achievement: 'AIR-20',
    image: '/roboconimages/robocon16.jpg',
    description: "Project:Hybrid Pole Climbing Bot - A versatile robot designed for the Robocon 2016 competition, capable of climbing poles and navigating complex terrains.",
    content: "The Hybrid Pole Climbing Bot, developed for Robocon 2016 by the VSSUT Robotics Society, is a vertical mobility robot using pneumatic actuation to climb poles without external support. Designed for industrial tasks like wind turbine and pipeline inspection, it showcased strong engineering in gravity-defying environments. The bot earned an impressive AIR 20 at the Robocon Nationals, cementing the team’s reputation in robotics innovation.",
    gallery: []
  },
  {
    id: 103, 
    name: 'Robocon 2017',
    year: '2017',
    achievement: 'AIR-6',
    image: '/roboconimages/robocon17.jpg',
    description: "Project: Aerodisc – A disc-launching robot designed for the Robocon 2017 competition.",
    content: "For Robocon 2017, the VSSUT Robotics Society developed a lightweight, holonomic-motion robot with advanced disc-launching capabilities and precise navigation. Built with aluminium channels and powered by planetary motors, pneumatics, and a 32-bit microcontroller, it featured real-time sensing through Kinect, IMU, and color sensors. The bot’s high performance earned it an impressive AIR 6 at the Robocon Nationals.",
    gallery: ['/compimages/robocon8.jpg']
  }
];


const CompetitionDetail = () => {
  const { id } = useParams();
  const allEvents = [...competitions, ...roboconEvents];
  const competition = allEvents.find(c => c.id === parseInt(id));

  if (!competition) {
    return (
      <>
        <Navbar />
        <div className="container"><h2>Competition Not Found</h2></div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="competition-detail">
        <div className="container">
          <h1>{competition.name}</h1>
          <span className="year">{competition.year}</span>
          {competition.achievement && <p className="achievement">{competition.achievement}</p>}
          <p className="description">{competition.description}</p>
          
          <div className="main-image-container">
            <img 
              src={competition.image} 
              alt={competition.name} 
              className="main-image"
            />
          </div>
          
          <div className="content">
            {competition.content}
          </div>

          {competition.gallery && competition.gallery.length > 0 && (
            <>
              <h2 className="section-header">Gallery</h2>
              <div className="image-gallery">
                {competition.gallery.map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`${competition.name} - Image ${index + 1}`}
                    className="gallery-image"
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CompetitionDetail;