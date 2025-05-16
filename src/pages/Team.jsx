import React, { useState } from 'react';
import MemberCard from '../components/MemberCard';
import '../styles/Team.css';
import { FaGithub, FaLinkedin , FaInstagram } from 'react-icons/fa';



const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [activeFilter, setActiveFilter] = useState(null);

  const yearFilters = [ 'Sophomores', 'Pre Final Years', 'Final Years'];

  const getYearGroup = (filter) => {
    switch (filter) {
      case 'Sophomores': return ['2'];
      case 'Pre Final Years': return [ '3'];
      case 'Final Years': return ['4'];
      default: return [];
    }
  };

  const teamMembers = [
  

    //Sophomores
    {
      id: 1,
      name: 'Dibyaseni sethi',
      role: '',
      branch: 'Civil Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/DibyaSeni.jpeg',
      github: '',
      linkedin: '',
      instagram: ''
    },

    {
      id: 2,
      name: 'Peeyush Priyadarshan Rana ',
      role: '',
      branch: 'Civil Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Peeyush.jpg',
      github: '',
      linkedin: '',
      instagram: 'https://www.instagram.com/_peeyush__rana_?igsh=OXh6aGRiMnAzeXhw'
    },

    {
      id: 3,
      name: 'Abhay Kumar Sahani ',
      role: '',
      branch: 'Civil Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Abhay.jpg',
      github: 'https://github.com/redabhay',
      linkedin: 'https://www.linkedin.com/in/abhay-sahani-9073b4296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: ''
    },

    {
      id: 4,
      name: 'Anushka Priyadarshini ',
      role: '',
      branch: 'Civil Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Anushka Priyadarshini.jpg',
      github: '',
      linkedin: '',
      instagram: ''
    },

    //CSE

    {
      id: 5,
      name: 'Suman Dash',
      role: '',
      branch: 'Computer Science and Engg.',
      year: '2',
      projects: [],
      skills: [],
      bio: ' Mujhe Farak Nahi Ye Zamana Kya Kehta Hai',
      image: '/teamimages/SumanD.jpg',
      github: 'https://github.com/sumandashw16',
      linkedin: 'https://www.linkedin.com/in/suman-dash-219163319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/suman_dash_w16?igsh=NXQzd3dzdncyaDh2'
    },

    {
      id: 6,
      name: 'Aryan Rajguru',
      role: '',
      branch: 'Computer Science and Engg.',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: ' Professional Ctrl+C , Ctrl+V Engineer',
      image: '/teamimages/AryanR.jpg',
      github: 'https://github.com/Aryan-R-18',
      linkedin: 'https://www.linkedin.com/in/aryan-rajguru-a1333230a/',
      instagram: 'https://www.instagram.com/vln_aryan_18/'
    },

    {
      id: 7,
      name: 'Debidutta Sahoo',
      role: '',
      branch: 'Computer Science and Engg.',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Debidutta.jpg',
      github: 'https://github.com/Deb-269',
      linkedin: 'www.linkedin.com/in/debidutta-sahoo-64455a336',
      instagram: 'https://www.instagram.com/debb.rxy?igsh=Ymp1NWpkYTk2eWph'
    },

    {
      id: 8,
      name: 'Remit Kumar Patra',
      role: '',
      branch: 'Computer Science and Engg.',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: "Existence is pain, unless you're solving problems like a caffeinated Meeseeks",
      image: '/teamimages/Remit2.jpg',
      github: 'https://github.com/NotRemit',
      linkedin: 'https://www.linkedin.com/in/remit-patra',
      instagram: ''
    },

    {
      id: 9,
      name: 'Swagatika Bhairab Sahu ',
      role: '',
      branch: 'Computer Science and Engg.',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Swagatika.png',
      github: 'https://github.com/swagatikabhairab',
      linkedin: 'www.linkedin.com/in/swagatika-bhairab-sahu-59a34a34a',
      instagram: 'https://www.instagram.com/_sswagatikka?utm_source=qr&igsh=enYzM2RseWpuM2Zu'
    },

    {
      id: 10,
      name: 'Sayeda Saba Amtul Hallim',
      role: '',
      branch: 'Computer Science and Engg.',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'In between chaos and deadlines',
      image: '/teamimages/Saba.jpg',
      github: 'https://github.com/SayedaSaba',
      linkedin: 'https://www.linkedin.com/in/sayeda-saba-amtul-hallim-827386315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/sayeda._/'
    },

    {
      id: 11,
      name: 'Nityananda Giri',
      role: '',
      branch: 'Computer Science and Engg.',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/NityanandaGiri.jpg',
      github: 'https://github.com/Nitin119-web',
      linkedin: 'https://www.linkedin.com/in/nityananda-giri-716151361?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/nitinn.__01/'
    },

    {
      id: 12,
      name: 'Swaraj Soubhagya Khandai',
      role: '',
      branch: 'Computer Science and Engg.',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Swaraj.jpg',
      github: '',
      linkedin: '',
      instagram: 'https://www.instagram.com/_9swaraj?igsh=ajZha3AzYzA0dm1x'
    },

    {
      id: 13,
      name: 'Pratyush Parida',
      role: '',
      branch: 'Computer Science and Engg.',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Pratyush.jpg',
      github: 'https://github.com/Pratyush1104',
      linkedin: 'https://www.linkedin.com/in/pratyush-parida-16a8a7315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: ''
    },

    {
      id: 14,
      name: 'Chinnari Harsha Vardhan ',
      role: '',
      branch: 'Computer Science and Engg.',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Harsha.jpg',
      github: 'https://github.com/chinnariharshavardhan',
      linkedin: 'https://www.linkedin.com/in/harsha-vardhan-chinnari-578729330',
      instagram: 'https://www.instagram.com/pro_harsha49?igsh=MW0wdncyMG9iM2F0bQ==&utm_source=ig_contact_invite'
    },

    {
      id: 15,
      name: 'Somya Tridarsini Dash',
      role: '',
      branch: 'Electrical Engineering.',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Somya.jpg',
      github: 'https://github.com/SomyaTDash',
      linkedin: 'https://www.linkedin.com/in/somyatridarsinidash',
      instagram: 'https://www.instagram.com/_somyatridarsini_/'
    },

    {
      id: 16,
      name: 'Shradha Suman Mohapatra',
      role: '',
      branch: 'Electrical Engineering.',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Shradha.jpeg',
      github: 'https://github.com/Shradha-Suman-Mohapatra',
      linkedin: '',
      instagram: 'https://www.instagram.com/_itz.shradha.here_/'
    },

    {
      id: 17,
      name: 'Suman Rath',
      role: '',
      branch: 'Electrical Engineering.',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/SumanR.png',
      github: 'https://github.com/SiniLemon',
      linkedin: '',
      instagram: 'https://www.instagram.com/suman_27506?igsh=Mmx0MXo4ZzhjbDd4'
    },

    {
      id: 18,
      name: 'Anibes Mohanty',
      role: '',
      branch: 'Electrical Engineering.',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Anibes.jpg',
      github: '',
      linkedin: '',
      instagram: ''
    },

    {
      id: 19,
      name: 'Sunil Sahu',
      role: '',
      branch: 'Electrical Engineering.',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Sunil.jpg',
      github: '',
      linkedin: '',
      instagram: ''
    },

    {
      id: 20,
      name: 'Roshan Dang',
      role: '',
      branch: 'Electrical Engineering.',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Roshan2.jpg',
      github: '',
      linkedin: '',
      instagram: 'https://www.instagram.com/roshan_x_69?igsh=MWk2dWJrNDVibWxuZg=='
    },

    {
      id: 21,
      name: 'Anshik Meher',
      role: '',
      branch: 'Electrical Engineering.',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Anshik.jpg',
      github: 'https://github.com/anshik347',
      linkedin: 'https://www.linkedin.com/in/anshik-meher-218996333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/ansh_ik348?igsh=MTI2ZDR4aW4zeHE1dg=='
    },

    //EEE

    {
      id: 22,
      name: 'Gayatrirani Samantaray ',
      role: '',
      branch: 'Electrical and Electronics Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Gayatrirani.jpg',
      github: '',
      linkedin: 'https://www.linkedin.com/in/gayatrirani-samantaray-69a128362?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/_gayatrirani_/'
    },

    {
      id: 23,
      name: 'Aryaman Singh ',
      role: '',
      branch: 'Electrical and Electronics Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Aryaman.webp',
      github: '',
      linkedin: '',
      instagram: ''
    },

    {
      id: 24,
      name: 'Samagnya Dash ',
      role: '',
      branch: 'Electrical and Electronics Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Turning caffeine into questionable life choices😔✋.',
      image: '/teamimages/Samagnya.jpg',
      github: 'https://github.com/Samagnyadash30',
      linkedin: 'https://www.linkedin.com/in/samagnya-dash-ab2773212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/_.samagnya_dash._/'
    },

    {
      id: 25,
      name: 'Sriyanshu Sekhar Pradhan',
      role: '',
      branch: 'Electrical and Electronics Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Sriyanshu.jpg',
      github: '',
      linkedin: '',
      instagram: ''
    },

    {
      id: 26,
      name: 'Bikash Barik',
      role: '',
      branch: 'Electrical and Electronics Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Bikash.jpg',
      github: '',
      linkedin: '',
      instagram: ''
    },

    {
      id: 27,
      name: 'Dibyajyoti Samal',
      role: '',
      branch: 'Electrical and Electronics Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Dibya.jpeg',
      github: '',
      linkedin: '',
      instagram: ''
    },

    //ETC
    {
      id: 28,
      name: 'Aradhya Rath',
      role: '',
      branch: 'Electronics and Telecommunication Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Aradhya.jpg',
      github: '',
      linkedin: '',
      instagram: ''
    },

     {
      id: 29,
      name: 'Suhani Sabat',
      role: '',
      branch: 'Electronics and Telecommunication Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Suhani.jpg',
      github: '',
      linkedin: '',
      instagram: ''
    },

     {
      id: 30,
      name: 'Arpita Majumdar',
      role: '',
      branch: 'Electronics and Telecommunication Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Arpita.jpg',
      github: '',
      linkedin: '',
      instagram: ''
    },

     {
      id: 31,
      name: 'Rudra Narayan Panda',
      role: '',
      branch: 'Electronics and Telecommunication Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/rudra.jpg',
      github: '',
      linkedin: '',
      instagram: ''
    },

     {
      id: 32,
      name: 'Abinash Dash',
      role: '',
      branch: 'Electronics and Telecommunication Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Abinash.jpg',
      github: '',
      linkedin: '',
      instagram: ''
    },

     {
      id: 33,
      name: 'Manas Babu',
      role: '',
      branch: 'Electronics and Telecommunication Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Manas.jpeg',
      github: '',
      linkedin: '',
      instagram: ''
    },

     {
      id: 34,
      name: 'Aditya Swarup Khuntia ',
      role: '',
      branch: 'Electronics and Telecommunication Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Aditya.jpg',
      github: '',
      linkedin: '',
      instagram: ''
    },

     {
      id: 35,
      name: 'Sai Satyaprakash Parida',
      role: '',
      branch: 'Electronics and Telecommunication Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Sai.jpg',
      github: '',
      linkedin: '',
      instagram: ''
    },

     {
      id: 36,
      name: 'Pritam Swain',
      role: '',
      branch: 'Electronics and Telecommunication Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Pritam.jpg',
      github: '',
      linkedin: '',
      instagram: ''
    },

     {
      id: 37,
      name: 'Rounak Senapati',
      role: '',
      branch: 'Electronics and Telecommunication Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Rounak.jpg',
      github: '',
      linkedin: '',
      instagram: ''
    },

     {
      id: 38,
      name: 'Soumya Ranjan Behera',
      role: '',
      branch: 'Electronics and Telecommunication Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Soumya.png',
      github: '',
      linkedin: '',
      instagram: ''
    },

     {
      id: 39,
      name: 'Sidhartha Kumar Nayak',
      role: '',
      branch: 'Electronics and Telecommunication Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Sidhartha.jpg',
      github: 'https://github.com/itsSidshub?tab=repositories',
      linkedin: 'https://www.linkedin.com/in/sidhartha-kumar-nayak-042432357?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/imsidhartha27?igsh=MWxlaTZxb2IwYjNraQ=='
    },

     {
      id: 40,
      name: 'Hari Shah',
      role: '',
      branch: 'Electronics and Telecommunication Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Hari.jpg',
      github: '',
      linkedin: '',
      instagram: ''
    },

     {
      id: 41,
      name: 'Mahasangram Kar',
      role: '',
      branch: 'Electronics and Telecommunication Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Mahasangram.jpg',
      github: '',
      linkedin: '',
      instagram: ''
    },

     {
      id: 42,
      name: 'Mantosh Barik',
      role: '',
      branch: 'Electronics and Telecommunication Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Mantosh.jpg',
      github: '',
      linkedin: '',
      instagram: ''
    },

     {
      id: 43,
      name: 'Shimadri Yashwant',
      role: '',
      branch: 'Electronics and Telecommunication Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Shimadri.jpg',
      github: '',
      linkedin: '',
      instagram: ''
    },

     {
      id: 44,
      name: 'Kamal Muduli',
      role: '',
      branch: 'Electronics and Telecommunication Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Kamal.jpg',
      github: '',
      linkedin: '',
      instagram: ''
    },

    //ME
    {
      id: 45,
      name: 'Ansika priyadarshini Mishra',
      role: '',
      branch: 'Mechanical Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Ansika.jpg',
      github: '',
      linkedin: '',
      instagram: ''
    },

    {
      id: 46,
      name: 'Aditya Pradhan',
      role: '',
      branch: 'Mechanical Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/AdityaP.jpg',
      github: '',
      linkedin: '',
      instagram: ''
    },

    {
      id: 47,
      name: 'Roshan Kumar',
      role: '',
      branch: 'Mechanical Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Roshan.jpg',
      github: '',
      linkedin: '',
      instagram: ''
    },

    //MME
    {
      id: 48,
      name: 'Supriya Patra',
      role: '',
      branch: 'MME',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/SupriyaP.png',
      github: '',
      linkedin: '',
      instagram: ''
    },


    {
      id: 49,
      name: 'Chandini Suhagini',
      role: '',
      branch: 'MME',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Chandini.jpg',
      github: '',
      linkedin: '',
      instagram: ''
    },

    //pe
    {
      id: 50,
      name: 'Stuti Agarwal',
      role: '',
      branch: 'Production Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Stuti.jpg',
      github: '',
      linkedin: '',
      instagram: ''
    },

    {
      id: 51,
      name: 'Soumit Kumar Mohanta',
      role: '',
      branch: 'Production Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Soumit.jpg',
      github: '',
      linkedin: '',
      instagram: ''
    },

    {
      id: 52,
      name: 'Santosh Panda',
      role: '',
      branch: 'Production Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Santosh.jpg',
      github: '',
      linkedin: '',
      instagram: ''
    },

    {
      id: 53,
      name: 'Trisha Samal',
      role: '',
      branch: 'Production Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Trisha.jpg',
      github: '',
      linkedin: '',
      instagram: ''
    },

    //chem
     {
      id: 54,
      name: 'Ankita Priyadarsini Nayak',
      role: '',
      branch: 'Chemical Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Ankita.jpg',
      github: '',
      linkedin: '',
      instagram: ''
    },

     {
      id: 55,
      name: 'Jyotiraditya Biswal',
      role: '',
      branch: 'Chemical Engineering',
      year: '2',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/teamimages/Jyoti.jpg',
      github: '',
      linkedin: '',
      instagram: ''
    },

    //pre-final year
    {
      id: 56,
      name: 'Prerana Priyadarsini Das',
      role: 'Assistant Coordinator',
      branch:'Information Technology',
      year:'3',
      projects: [],
      skills: [],
      bio: 'Specializes in Data Science and Data Analysis',
      image:'/prefinal/prerana.jpg',
      github:'https://github.com/preranadas2003',
      linkedin:'https://www.linkedin.com/in/preranapriyadarsinidas?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram:''
    },

    {
      id: 57,
      name: 'Pattanaik Ayushman Alok',
      role: '',
      branch:'Information Technology',
      year:'3',
      bio: 'specializes in Web Development and OpenCV',
      image:'/prefinal/Ayushman.jpg',
      github:'https://github.com/Losthero1640',
      linkedin:'https://www.linkedin.com/in/pattanaik-ayushman-alok-b66a90273/',
      instagram:'https://www.instagram.com/https://www.instagram.com/_.ayushman._00/'
    },
    
    {
      id: 58,
      name: 'Biswajit Mallik',
      role: '',
      branch:'Information Technology',
      year:'3',
      bio: 'specializes in Python and OpenCV',
      image:'/prefinal/Biswajit.jpg',
      github:'https://github.com/Bit-Mik',
      linkedin:'https://www.linkedin.com/in/biswajit-mallik-b4k?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram:''
    },

    {
      id: 59,
      name: 'Aditi Panda',
      role: '',
      branch:'Computer Science and Engineering',
      year:'3',
      bio: 'specializes in Data Science and Data Analysis',
      image:'/prefinal/Aditi.jpg',
      github:'',
      linkedin:'https://www.linkedin.com/in/aditi-panda-6987552ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram:''
    },

    {
      id: 60,
      name: 'Sumanta Kumar Dutta',
      role: '',
      branch:'Electronics and Telecommunication Engineering',
      year:'3',
      bio: 'specializes in Arduino and Electronics',
      image:'/prefinal/Sumanta.jpg',
      github:'https://github.com/SumantaDutta5',
      linkedin:'www.linkedin.com/in/sumanta-kumar-dutta-41a834293',
      instagram:''
    },

    {
      id: 61,
      name: 'Arnav Nayak ',
      role: '',
      branch:'Electronics and Telecommunication Engineering',
      year:'3',
      bio: 'specializes in Arduino and Electronics',
      image:'/prefinal/Arnav.jpg',
      github:'https://github.com/ImArnavNayak0',
      linkedin:'https://www.linkedin.com/in/arnav-nayak-46b966319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram:''
    },

    {
      id: 62,
      name: 'Himansu Sekhar Baral',
      role: '',
      branch:'Electronics and Telecommunication Engineering',
      year:'3',
      bio: 'specializes in Arduino and Electronics',
      image:'/prefinal/Himansu.jpg',
      github:'https://github.com/HIMANSUsekharBaral',
      linkedin:'https://www.linkedin.com/in/himansu-sekhar-baral-0674852aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram:''
    },
    
    

    
    // Add more members with appropriate year tags: 'First Year', 'Second Year', etc.
  ];

  const filteredMembers = activeFilter
    ? teamMembers.filter(member => getYearGroup(activeFilter).includes(member.year))
    : teamMembers;

  return (
  <div className="team-page">
    <div className="container">
      <h1 className="section-title">Our Team</h1>

      {selectedMember ? (
        <div className="member-detail">
          <button className="back-btn" onClick={() => setSelectedMember(null)}>
            &larr; Back to Team
          </button>
          <div className="detail-content">
            <img 
              src={selectedMember.image} 
              alt={selectedMember.name} 
              className="detail-image"
            />
            <div className="detail-info">
              <h2>{selectedMember.name}</h2>
              <p className="role">{selectedMember.role}</p>

              <div className="detail-section">
                <h3>About</h3>
                <p>{selectedMember.bio}</p>
              </div>

              <div className="detail-section">
                <h3>Academic Information</h3>
                <p><strong>Branch:</strong> {selectedMember.branch}</p>
                <p><strong>Year:</strong> {selectedMember.year}</p>
              </div>

              

              <div className="detail-section">
                <h3>Connect</h3>
                <div className="social-links">
                  {selectedMember.github && (
                    <a 
                      href={selectedMember.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="icon-link"
                    >
                      <FaGithub size={24} />
                    </a>
                  )}
                  {selectedMember.linkedin && (
                    <a 
                      href={selectedMember.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="icon-link"
                    >
                      <FaLinkedin size={24} />
                    </a>
                  )}
                  {/* {selectedMember.instagram && (
                    <a 
                      href={selectedMember.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="icon-link"
                    >
                      <FaInstagram size={24} />
                    </a>
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="filter-buttons">
            {yearFilters.map(filter => (
              <button 
                key={filter} 
                onClick={() => setActiveFilter(filter)} 
                className={activeFilter === filter ? 'active-filter' : ''}
              >
                {filter}
              </button>
            ))}
            <button 
              onClick={() => setActiveFilter(null)} 
              className={!activeFilter ? 'active-filter' : ''}
            >
              All
            </button>
          </div>

          <div className="team-grid">
            {(activeFilter ? filteredMembers : teamMembers).map(member => (
              <MemberCard 
                key={member.id} 
                member={member} 
                onClick={() => setSelectedMember(member)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  </div>
);

};

export default Team;

