import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import MemberCard from '../components/MemberCard';
import CompetitionCard from '../components/CompetitionCard';
import '../styles/Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Home = () => {
  const latestProjects = [
    {
      id: 1,
      title: 'Autonomous Rover',
      description: 'Developing a Mars rover prototype with autonomous navigation capabilities.',
      image: '/images/rover.jpg',
      status: 'In Progress'
    },
    {
      id: 2,
      title: 'Robotic Arm',
      description: '6-axis robotic arm with computer vision for object manipulation.',
      image: '/images/robotic-arm.jpg',
      status: 'Completed'
    }
  ];

  const workshops = [
    {
      id: 1,
      title: 'Robotics Bootcamp',
      date: '17 March 2025',
      description: 'Hands-on Bootcamp on different domains of Robotics for the purpose of Induction.',
      image: '/images/w1.jpg'
    },
    {
      id: 2,
      title: 'RoboXplore',
      date: '8 April 2025',
      description: 'Making of Line follower bot and sharing knowledge on Arduino',
      image: '/images/w2.jpg'
    }
  ];

  const competitions = [
    {
      id: 1,
      name: 'Smart India Hackathon',
      year: '2024',
      achievement: 'Finalists',
      image: '/images/comp2.jpg'
    },
    {
      id: 2,
      name: 'Innovision at NIT Rourkela',
      year: '2024',
      achievement: 'Winner',
      image: '/images/comp1.jpg'
    }
  ];

  // Initialize particles
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <Particles
          id="tsparticles"
          init={particlesInit}
          className="hero-particles"
          options={{
            fullScreen: { enable: false },
            background: { 
              color: {
                value: "transparent"
              }
            },
            fpsLimit: 60,
            particles: {
              number: { 
                value: 80,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: { value: ["#00ffcc", "#00b8ff", "#0066ff"] },
              shape: { 
                type: ["circle", "triangle", "square"],
                stroke: { width: 1, color: "#00ffcc" }
              },
              opacity: {
                value: 0.6,
                random: true,
                animation: {
                  enable: true,
                  speed: 1,
                  minimumValue: 0.1,
                  sync: false
                }
              },
              size: {
                value: 4,
                random: true,
                animation: {
                  enable: true,
                  speed: 2,
                  minimumValue: 1,
                  sync: false
                }
              },
              links: {
                enable: true,
                distance: 150,
                color: "#00ffcc",
                opacity: 0.4,
                width: 1,
                triangles: {
                  enable: true,
                  opacity: 0.1
                }
              },
              move: {
                enable: true,
                speed: 2,
                direction: "none",
                outModes: {
                  default: "bounce",
                },
                attract: {
                  enable: true,
                  rotateX: 600,
                  rotateY: 1200
                }
              },
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: ["grab", "bubble"],
                },
                onClick: {
                  enable: true,
                  mode: "push"
                }
              },
              modes: {
                grab: {
                  distance: 200,
                  links: {
                    opacity: 0.8
                  }
                },
                bubble: {
                  distance: 200,
                  size: 6,
                  duration: 2,
                  opacity: 0.8,
                  speed: 3
                },
                push: {
                  quantity: 4
                }
              }
            },
            detectRetina: true
          }}
        />
        <div className="container hero-content">
          <h1>Innovating the Future of Robotics</h1>
          <p>Join us in building cutting-edge robotic solutions to real-world problems.</p>
          <Link to="/about" className="btn">
            Learn More
          </Link>
        </div>
      </section>

      <section className="latest-projects">
        <div className="container">
          <h2 className="section-title">Latest Projects</h2>
          <div className="projects-grid">
            {latestProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="workshops">
        <div className="container">
          <h2 className="section-title">Workshops Conducted</h2>
          <Carousel
            showArrows={true}
            autoPlay
            infiniteLoop
            showThumbs={false}
            className="workshop-carousel"
          >
            {workshops.map(workshop => (
              <div key={workshop.id}>
                <Link to={`/workshops/${workshop.id}`}>
                  <img src={workshop.image} alt={workshop.title} />
                  <div className="legend">
                    <h3>{workshop.title}</h3>
                    <p>{workshop.description}</p>
                    <small>{workshop.date}</small>
                  </div>
                </Link>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      <section className="competitions">
        <div className="container">
          <h2 className="section-title">Competitions Participated</h2>
          <Carousel
            showArrows={true}
            autoPlay
            infiniteLoop
            showThumbs={false}
            className="competition-carousel"
          >
            {competitions.map(competition => (
              <div key={competition.id}>
                <Link to={`/competitions/${competition.id}`}>
                  <img src={competition.image} alt={competition.name} />
                  <div className="legend">
                    <h3>{competition.name}</h3>
                    <p>{competition.achievement}</p>
                    <small>{competition.year}</small>
                  </div>
                </Link>
              </div>
            ))}
          </Carousel>
          <div className="view-all-container">
            <Link to="/competitions" className="btn btn-primary">View All Competitions</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
