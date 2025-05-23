const projects = [
  {
    id: 1,
    title: 'AMR',
    description:
      'Developing a Mars rover prototype with autonomous navigation capabilities.',
    longdescription:
      'The Smart Waiter is a state-of-the-art autonomous wheeled robot designed to transform indoor operations in environments like restaurants, malls, and warehouses. By integrating advanced robotics and AI, it delivers seamless navigation and task automation, enhancing efficiency and reducing manual workload.',
    image: 'projects/amr.jpg',
    gallery:[],
    technologies: ['ROS 2', 'Python', 'Raspberry pi','Lidar'],
  },
  {
    id: 2,
    title: 'UAV',
    description:
      '6-axis robotic arm with computer vision for object manipulation.',
    longdescription:
      'The VSSUT Robotics Society’s Quadcopter UAV (e.g., UAV 14.0) is designed for disaster management and competitions. It features a carbon-fiber or 3D-printed frame with four 1000–1400 KV brushless motors, offering a 2 kg payload capacity and 30-minute flight time. ',
    image: 'projects/uav.jpg',
    gallery:[],
    technologies: ['GPS Navigation', 'IMU sensors: Gyrpscope, Accelerometer and Barometer', 'Pixhawk Controller'],
  },
  {
    id: 3,
    title: '3D - Printer',
    description:
      'A 3D printer is a machine that creates physical objects by building them layer by layer from a digital design, using materials like plastic, resin, or metal. It is a popular tool for prototyping, manufacturing, and producing complex parts.',
    longdescription:
      'The VSSUT Robotics Society’s Low-Cost 3D Printer, Odisha’s first student-made model, is an FDM-based system for prototyping. It features a custom aluminum or acrylic frame, NEMA 17 stepper motors, and a 0.4 mm nozzle extruder for PLA filament, with a ~200 x 200 x 200 mm build volume.',
    image: 'projects/3d.jpg',
    gallery:[],
    technologies: ['Arduino Mega with RAMPS 1.4', 'CUra', 'Slicer'],
  },
  {
    id: 4,
    title: 'ROUV',
    description: 'A remotely operated underwater vehicle designed for real-time aquatic exploration and task execution.',
    longdescription:
      'The ROUV project focuses on developing an underwater robotic vehicle capable of navigating and performing tasks in challenging aquatic environments. The initial version laid the groundwork by addressing fundamental challenges such as waterproofing, basic maneuverability, and real-time operator control. Building on this foundation, the upgraded ROUV 2.0 incorporates advanced technologies that enhance autonomy, precision, and environmental sensing. This next-generation vehicle aims to operate efficiently in complex underwater conditions, leveraging innovative motion control and intelligent systems to expand its range of applications.',
    image: 'projects/rouv.jpg',
    gallery:[],
    technologies: ['HD camera', 'Sensors:Depth & Temperature', 'Arduino or Raspberry pi'],
  },
  {
    id: 5,
    title: 'E-Cycle',
    description: 'An eco-friendly electric bicycle powered by a rechargeable battery and pedal-charging system, built to reduce fuel dependency and promote green mobility.',
    longdescription:
      'Electric Cycle is one of the effective solutions to tackle the global menace of Environmental Pollution & increase in the prices of Petrol and Diesel. Equipped with a Li-on battery, DC motor, and Controller, It has various features like rechargeable battery which gets fully charged in 2 hours, battery is getting charged pedaling, so there is no problem with the battery draining, attains a maximum speed of 20 mph with a Payload of 65 Kg, has mileage of 20-25 Km in one full charge.',
    image: 'projects/ecycle.jpg',
    gallery:[],
    technologies: ['Python', 'TensorFlow', 'OpenCV'],
  },
  {
    id: 6,
    title: 'Surface Level Vehicle',
    description: 'An autonomous water-surface vehicle designed for efficient seafloor mapping and remote operations using GPS and magnetometer guidance.',
    longdescription:
      'SLV is an autonomous vessel designed for seafloor mapping, deploying an ROV with GPS and magnetometer guidance. Its modular structure supports future enhancements, including sonar-based obstacle detection and improved navigation control. It is designed for various water-related operations, enhancing efficiency and safety. It reduces costs, minimizes human risk, and provides reliable data while operating in extreme conditions.',
    image: 'projects/slv.jpg',
    gallery:[],
    technologies: [],
  },
  {
    id:7,
    title: 'StabPID',
    description: 'A PID-controlled self-balancing system that stabilizes a platform in real-time using sensors, servo motors, and a custom PCB setup.',
    longdescription:
    'StabiPID is a self-balancing system that uses a PID controller to maintain stability on a seesaw-like platform. It processes real-time data from a Sharp IR sensor via an Arduino Nano and adjusts platform tilt using high-torque RDS3225 v7 servo motors. A custom PCB integrates all components, powered by a 12V Li-ion battery, and the system is housed in a CAD-designed structure for optimal balance.',
    image: 'projects/stabpid.jpg',
    gallery:[],
    technologies: ['Arduino Nano', 'Sharp IR Sensor', 'RDS3225 Servo Motors', 'Custom PCB & Li-ion Battery','CAD Frame'],
  },
  {
    id: 8,
    title: 'Robominton',
    description: 'A robotic badminton player that autonomously plays and trains users using advanced sensors and control systems.',
    longdescription:
    'Robominton is an autonomous badminton-playing robot developed for Robocon 2015, engineered around a pneumatic mobility system that enables smooth gliding across the arena. Designed to perform shuttle strikes and strategic movements, the bot was programmed with precise control algorithms to autonomously participate in a game of badminton, showcasing advanced integration of motion control and game logic. Built for speed, accuracy, and coordination, ROBOMINTON not only demonstrated engineering excellence but also highlighted the potential of robotics in simulating real-world sports dynamics. It proved to be a significant milestone for the VSSUT Robotics Society by earning national recognition—All India Rank 26 at Robocon Nationals (MIT Pune) and AIR 27 overall, proudly holding the Rank 1 position in Odisha.',
    image: 'projects/robominton.jpg',
    gallery:[],
    technologies: ['ATmega2560', 'Pneumatic System', 'Compressor & Air Tank', 'Solenoid Valves'],
  },
  {
    id: 9,
    title: 'Hybrid Pole Climbing Bot',
    description: 'A robotic climbing bot that navigates and balances on a pole using a combination of sensors and actuators.',
    longdescription:
    'Hybrid Pole Climbing Bot is a specialized vertical mobility robot developed for Robocon 2016, designed to climb upright poles or vertical surfaces using a pneumatic actuation mechanism. Engineered to work in tandem with its counterpart, the eco-bot, this robot showcases an innovative solution for tackling gravity-driven challenges without external support. Its gripping and climbing capabilities make it suitable for industrial applications such as maintenance of wind turbines, inspection of vertical pipelines, and electrical pole servicing. The robot exemplifies robust engineering and automation potential in hard-to-reach environments. Its performance was nationally recognized with an All India Rank 20 at Robocon Nationals (MIT Pune), reinforcing VSSUT Robotics Society’s position as a frontrunner in competitive robotics innovation.',
    image: 'projects/hybridpole.jpg',
    gallery:[],
    technologies: ['Arduino Uno', 'GPS Navigation', 'Laser Sensor', 'Robotic Arm', 'Gripper'],
  },
  {
    id: 10,
    title: 'Photogrammetry Tool',
    description: 'A photogrammetry tool for 3D scanning and modeling of architectural structures.',
    longdescription:
    'The Photogrammetry Tool is a compact, low-cost device designed to automate the process of capturing multiple images of a physical object from various angles for the purpose of generating accurate 3D digital models. The system features a rotating subject plate and a vertically adjustable camera mount, operated by a lead screw mechanism, allowing for thorough image acquisition from multiple heights and perspectives. Designed for ease of use and replicability, the device utilizes 3D-printed components and standard electronic hardware, and integrates with open-source photogrammetry software. It is ideal for applications in product design, education, cultural preservation, 3D printing, and digital content creation. ',
    image: 'projects/photogrammetry.jpg',
  }
  
]

export default projects
