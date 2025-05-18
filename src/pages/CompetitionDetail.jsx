import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/CompetitionDetail.css';

const competitions = [
  {
    id: 1,
    name: 'Smart India Hackathon',
    year: '2024',
    achievement: 'Finalists',
    image: '/images/comp2.jpg',
    description: 'National level hackathon focused on solving real-world problems using technology.',
    content: 'Our team participated in the Smart India Hackathon 2024, where we developed innovative solutions for real-world challenges. The competition brought together the brightest minds from across the country.',
    gallery: [
      '/images/comp2.jpg',
      '/images/comp1.jpg',
      '/compimages/roscon.jpg'
    ]
  },
  {
    id: 2,
    name: 'Innovision at NIT Rourkela',
    year: '2024',
    achievement: 'Winner',
    image: '/images/comp1.jpg',
    description: 'Technical fest competition showcasing innovative robotics projects.',
    content: 'We emerged victorious at Innovision 2024 with our groundbreaking robotics project. The competition tested our technical skills and innovation capabilities.',
    gallery: [
      '/compimages/inno1.jpg',
      '/compimages/inno2.jpg',
      '/compimages/inno3.jpg',
      '/compimages/inno4.jpg',
      '/compimages/inno5.jpg',
      '/compimages/inno6.jpg',
      '/compimages/inno7.jpg'
      
    ]
  },
  {
    id: 3,
    name: 'RosCon India',
    year: '2024',
    achievement: '',
    image: '/compimages/roscon.jpg',
    description: "ROSCon In'24 Bengaluru",
    content: 'Our team participated in ROSCon India 2024, showcasing our expertise in ROS (Robot Operating System) development.',
    gallery: [
      '/compimages/roscon.jpg',
      '/images/comp1.jpg'
    ]
  },
  {
    id: 4,
    name: 'MIO Conclave',
    year: '2023',
    achievement: '',
    image: '/compimages/mio.jpg',
    description: "VSSUT Robotics Society has participated in Make in Odisha Conclave - Utkarsh 2025.",
    content: "a premier event celebrating technological innovation. We showcased three advanced projects: an Autonomous Mobile Robot with cutting-edge navigation, a robust Surface Level Vehicle designed for diverse terrains, and a state-of-the-art Hexacopter offering precision aerial capabilities. These projects underscored our commitment to pioneering research and technological excellence. Engaging with industry leaders and innovators, we reinforced VSSUT's dedication to advancing robotics and automation, setting the stage for future collaborative breakthroughs.",
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
    id: 5,
    name: 'RoboWars',
    year: '2023',
    achievement: 'Quarter Finalists',
    image: '/images/comp2.jpg',
    description: 'Combat robotics competition featuring custom-built fighting robots.',
    content: 'Our combat robot showcased exceptional design and engineering in the RoboWars competition, reaching the quarter-finals.',
    gallery: [
      '/images/comp2.jpg',
      '/images/comp1.jpg'
    ]
  }
];

const CompetitionDetail = () => {
  const { id } = useParams();
  const competition = competitions.find(c => c.id === parseInt(id));

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