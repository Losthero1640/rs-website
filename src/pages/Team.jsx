import React, { useState } from 'react';
import MemberCard from '../components/MemberCard';
import '../styles/Team.css';
import { FaGithub, FaLinkedin , FaInstagram } from 'react-icons/fa';



const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [activeFilter, setActiveFilter] = useState(null);

  const yearFilters = ['Freshers', 'Sophomores', 'Pre Final Years', 'Final Years'];

  const getYearGroup = (filter) => {
    switch (filter) {
      case 'Freshers': return ['First Year'];
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
      role: 'Software Lead',
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
                <h3>Current Projects</h3>
                <ul>
                  {selectedMember.projects.map((project, index) => (
                    <li key={index}>{project}</li>
                  ))}
                </ul>
              </div>

              <div className="detail-section">
                <h3>Skills</h3>
                <div className="skills">
                  {selectedMember.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
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
                  {selectedMember.instagram && (
                    <a 
                      href={selectedMember.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="icon-link"
                    >
                      <FaInstagram size={24} />
                    </a>
                  )}
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

