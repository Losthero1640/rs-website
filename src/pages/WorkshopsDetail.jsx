import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/WorkshopsDetail.css';

const workshops = [
  {
    id: 1,
    title: 'Robotics Bootcamp',
    date: '17 March 2025',
    description: 'Kickstarting Tech Journey: Bootcamp 2025- Learning Before Launch',
    image: '/eventimages/boot1.jpg',
    content: 'The Robotics Society conducted a three-day bootcamp from 25th to 27th March 2025, prior to the induction program, offering students a comprehensive introduction to robotic structural coding and the Internet of Things (IoT). Through a series of informative sessions and interactive challenges, participants got to explore fundamental concepts, hands-on applications, and real-time problem-solving. The bootcamp provided an engaging platform for learners to deepen their understanding of emerging technologies in robotics and IoT.',
    gallery: [
      '/eventimages/bootcover.jpg',
      '/eventimages/boot2.jpg',
      '/eventimages/boot3.jpg',
      '/eventimages/boot4.jpg',
      '/eventimages/boot8.jpg',
      '/eventimages/boot5.jpg',
      '/eventimages/boot6.jpg',
      '/eventimages/boot7.jpg',

    ]
  },
  {
    id: 2,
    title: 'RoboXplore',
    date: '8 April 2025',
    description: 'Exploring Robotics Made Fun: Roboxplore 2025 - from basics to battle bots',
    image: '/eventimages/xplore1.jpg',
    content: 'The Robotics Society successfully organized Roboxplore, an orientation and workshop held on 8th and 9th February 2025 at the E-Learning Center. The event began with an engaging seminar on Line Following Bots, covering their working principles, essential components, and real-world applications. Following the session, participants were provided with bot kit, and they applied their learning by building their own bots and competing in an exciting track-based challenge. The workshop provided a hands-on learning experience and sparked great enthusiasm among budding robotics enthusiasts.',
    gallery: [
      '/eventimages/xplore2.jpg',
      '/eventimages/xplore3.jpg',
      '/eventimages/xplore5.jpg',
      '/eventimages/xplore6.jpg',
      '/eventimages/xplore7.jpg',
      '/eventimages/xplore8.jpg',
      '/eventimages/xplore4.jpg',
      '/eventimages/xplore9.jpg',
      '/eventimages/xplore10.jpg',
      '/eventimages/xplore11.jpg'
    ]
  },
  {
    id: 3,
    title: 'Robo Sumo',
    date: '20 & 21 Feb 2025',
    description: 'Pushing the Limits: Robo Sumo 2025',
    image: '/eventimages/sumo1.jpg',
    content: 'The Robotics Society organized a thrilling Robo Sumo competition during the annual technical fest Samavesh on 20th and 21st February 2025. In Robo Sumo, autonomous bots compete to push each other out of a circular arena. It is a test of speed, strength and strategy.Participants were guided by mentors and provided with essential components. They enthusiastically designed and built their own bots for the challenge. The event concluded with an exciting final round, where the top-performing teams were declared winners and felicitated.',
    gallery: [
      '/eventimages/sumo1.jpg',
      '/eventimages/sumo2.jpg',
      '/eventimages/sumo3.jpg',
      '/eventimages/sumo4.jpg',
      '/eventimages/sumo5.png'

    ]
  },
  {
    id: 4,
    title: 'Death Race',
    date: '22 June 2025',
    description: 'Speed meets skill: Death Race Ignites Samavesh 2025',
    image: '/eventimages/race1.jpg',
    content: 'The Robotics Society conducted an electrifying Death Race competition as part of the annual technical fest Samavesh. In this event, bots raced on a dedicated track filled with unpredictable challenging hurdles and extream terrain at every step, testing both speed and stability. Participants, under mentor guidance and equipped with necessary components, built their bots strategically to overcome obstacles and reach the finish line. The competition ended with a gripping final run, where the fastest and most efficient bots emerged as winners and were awarded.',
    gallery: [
      '/eventimages/race2.jpg',
      '/eventimages/race3.jpg',
      '/eventimages/race4.png',
      '/eventimages/race5.png'
    ]
  },
  {
    id: 5,
    title: 'Drone Dynamics',
    date: '7 October 2023',
    description: 'Drone Dynamics by VSSUT Robotics Society',
    image: '/eventimages/Drone1.png',
    content: 'On 7th October 2023, VSSUT Robotics organized Drone Dynamics at the Sir Visvesvaraya Auditorium. The event featured a seminar by Mr. Jajati Mohanty, founder of Aerorovers, who spoke about the growing scope of drone technology. The evening also included a live drone show that  featured stunning aerial displays, showcasing the precision and capabilities of modern drones. From breathtaking formations to real-world applications, the demonstration captivated the audience and opened minds to the future of unmanned aerial systems. It was a fun and informative experience for all who attended.',
    gallery: [
      '/eventimages/Drone2.jpg',
      '/eventimages/Drone3.jpg',
      '/eventimages/Drone4.jpg'
    ]
  },
  {
    id: 6,
    title: 'Tread-O-Quest',
    date: '4 March 2023',
    description: 'The Maze Awaits: A Robotic Adventure',
    image: '/eventimages/toq1.jpg',
    content: 'The Robotics Society of VSSUT, Burla, hosted their flagship event, "Tread-O-Quest", in which the participating teams build and program a bot that navigates through a spiralling maze autonomously and is put to the test of reaching the end within a set period of time. The team whose bot successfully exits the maze in the shortest time possible ultimately takes the top position and wins the competition.',
    gallery: [
      '/eventimages/toq2.jpg',
      '/eventimages/toq3.jpg',
      '/eventimages/toq4.jpg',
      '/eventimages/toq5.jpg',
      // '/images/w2.jpg'
    ]
  },
  {
    id: 7,
    title: 'Aeroflix',
    date: '6 March 2023',
    description: 'Design and control of robotic arms for industrial applications',
    image: '/eventimages/aero1.jpg',
    content: 'Aeroflix is an event in which we showcase our drones performance. Drone shows are held to present various acrobatics performed with drones and to demonstrate how we can capture cinematics shot with drone cameras.',
    gallery: [
      '/eventimages/aero2.jpg',
      '/eventimages/toq3.jpg'
      // '/images/w2.jpg'
    ]
  }
];

const WorkshopsDetail = () => {
  const { id } = useParams();
  const workshop = workshops.find(w => w.id === parseInt(id));

  if (!workshop) {
    return (
      <>
        <Navbar />
        <div className="container"><h2>Workshop Not Found</h2></div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="workshop-detail">
        <div className="container">
          <h1>{workshop.title}</h1>
          <span className="date">{workshop.date}</span>
          <p className="description">{workshop.description}</p>
          
          <div className="main-image-container">
            <img 
              src={workshop.image} 
              alt={workshop.title} 
              className="main-image"
            />
          </div>
          
          <div className="content">
            {workshop.content}
          </div>

          {workshop.gallery && workshop.gallery.length > 0 && (
            <>
              <h2 className="section-header">Gallery</h2>
              <div className="image-gallery">
                {workshop.gallery.map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`${workshop.title} - Image ${index + 1}`}
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

export default WorkshopsDetail; 