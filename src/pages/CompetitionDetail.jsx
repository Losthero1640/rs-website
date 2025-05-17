import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/CompetitionDetail.css';

const competitions = [
  {
    id: 1,
    name: 'Smart India Hackathon',
    year: '2024',
    achievement: 'Finalists',
    image: '/images/comp2.jpg',
    description: 'National level hackathon focused on solving real-world problems using technology.',
    content: 'Our team participated in the Smart India Hackathon 2024, where we developed innovative solutions for societal challenges. The competition involved intense coding sessions, mentorship from industry experts, and collaboration with other talented teams.',
  },
  {
    id: 2,
    name: 'Innovision at NIT Rourkela',
    year: '2024',
    achievement: 'Winner',
    image: '/images/comp1.jpg',
    description: 'Technical fest competition showcasing innovative robotics projects.',
    content: 'Our team emerged victorious in the robotics competition at Innovision 2024. We demonstrated our autonomous robot that could navigate complex terrains and perform specific tasks with high precision.',
  }
];

const CompetitionDetail = () => {
  const { id } = useParams();
  const competition = competitions.find(c => c.id === parseInt(id));

  if (!competition) {
    return <div className="container"><h2>Competition Not Found</h2></div>;
  }

  return (
    <div className="competition-detail container">
      <h1>{competition.name}</h1>
      <p className="year">{competition.year}</p>
      <p className="achievement">Achievement: {competition.achievement}</p>
      <img src={competition.image} alt={competition.name} className="competition-image" />
      <p className="description">{competition.description}</p>
      <div className="content">{competition.content}</div>
    </div>
  );
};

export default CompetitionDetail; 