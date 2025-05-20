const projects = [
  {
    id: 1,
    title: 'AMR',
    description:
      'Developing a Mars rover prototype with autonomous navigation capabilities.',
    longdescription:
      'The Smart Waiter is a state-of-the-art autonomous wheeled robot designed to transform indoor operations in environments like restaurants, malls, and warehouses. By integrating advanced robotics and AI, it delivers seamless navigation and task automation, enhancing efficiency and reducing manual workload.',
    image: 'projects/amr.jpg',
    status: 'In Progress',
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
    status: 'Completed',
    technologies: ['GPS Navigation', 'IMU sensors: Gyrpscope, Accelerometer and Barometer', 'Pixhawk Controller'],
  },
  {
    id: 3,
    title: '3D - Printer',
    description:
      'Autonomous drone navigation system using GPS and computer vision.',
    longdescription:
      'The VSSUT Robotics Society’s Low-Cost 3D Printer, Odisha’s first student-made model, is an FDM-based system for prototyping. It features a custom aluminum or acrylic frame, NEMA 17 stepper motors, and a 0.4 mm nozzle extruder for PLA filament, with a ~200 x 200 x 200 mm build volume.',
    image: 'projects/3d.jpg',
    status: 'Completed',
    technologies: ['Arduino Mega with RAMPS 1.4', 'CUra', 'Slicer'],
  },
  {
    id: 4,
    title: 'ROUV',
    description: '',
    longdescription:
      'The ROUV project focuses on developing an underwater robotic vehicle capable of navigating and performing tasks in challenging aquatic environments. The initial version laid the groundwork by addressing fundamental challenges such as waterproofing, basic maneuverability, and real-time operator control. Building on this foundation, the upgraded ROUV 2.0 incorporates advanced technologies that enhance autonomy, precision, and environmental sensing. This next-generation vehicle aims to operate efficiently in complex underwater conditions, leveraging innovative motion control and intelligent systems to expand its range of applications.',
    image: 'projects/rouv.jpg',
    status: 'Completed',
    technologies: ['HD camera', 'Sensors:Depth & Temperature', 'Arduino or Raspberry pi'],
  },
  {
    id: 5,
    title: 'E-Cycle',
    description: '',
    longdescription:
      'Electric Cycle is one of the effective solutions to tackle the global menace of Environmental Pollution & increase in the prices of Petrol and Diesel. Equipped with a Li-on battery, DC motor, and Controller, It has various features like rechargeable battery which gets fully charged in 2 hours, battery is getting charged pedaling, so there is no problem with the battery draining, attains a maximum speed of 20 mph with a Payload of 65 Kg, has mileage of 20-25 Km in one full charge.',
    image: 'projects/ecycle.jpg',
    status: 'In Progress',
    technologies: ['Python', 'TensorFlow', 'OpenCV'],
  },
  {
    id: 6,
    title: 'Surface Water Vehicle',
    description: '',
    longdescription:
      'SLV is an autonomous vessel designed for seafloor mapping, deploying an ROV with GPS and magnetometer guidance. Its modular structure supports future enhancements, including sonar-based obstacle detection and improved navigation control. It is designed for various water-related operations, enhancing efficiency and safety. It reduces costs, minimizes human risk, and provides reliable data while operating in extreme conditions.',
    image: 'projects/.jpg',
    status: 'In Progress',
    technologies: [],
  },
  {
    id:7,
    title: 'StabPID',
    description: '',
    longdescription:
    'StabiPID is a self-balancing system that uses a PID controller to maintain stability on a seesaw-like platform. It processes real-time data from a Sharp IR sensor via an Arduino Nano and adjusts platform tilt using high-torque RDS3225 v7 servo motors. A custom PCB integrates all components, powered by a 12V Li-ion battery, and the system is housed in a CAD-designed structure for optimal balance.',
    image: 'projects/stabpid.jpg',
    status: 'In Progress',
    technologies: ['Arduino Nano', 'Sharp IR Sensor', 'RDS3225 Servo Motors', 'Custom PCB & Li-ion Battery','CAD Frame'],
  }
]

export default projects
