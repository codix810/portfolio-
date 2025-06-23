import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Ecommerce from '../../assets/E-commerce.avif';
import Healthcare from '../../assets/Healthcare.jpg';
import Fitness from '../../assets/Fitness.webp';
import { HiOutlineArrowSmRight, HiX } from "react-icons/hi";

const Cards = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'speed_order',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind', 'Bootstrap'],
      desc: 'Modern speed_order solution with advanced',
      img: Ecommerce,
    },
    {
      id: 2,
      title: 'Shopy',
      tech: ['React', 'Vite','Tailwind'],
      desc: 'Analytics shopy for healthcare providers',
      img: Healthcare,
    },
    {
      id: 3,
      title: 'Stor',
      tech: ['React', 'Bootstrap'],
      desc: 'Cross-platform mobile fitness tracking app',
      img: Fitness,
    },
    {
      id: 4,
      title: 'TechNove',
      tech: ['React', 'Vite', 'Tailwind'],
      desc: 'Property listing and booking platform',
      img: Ecommerce,
    },
    {
      id: 5,
      title: 'E-commerce',
      tech: ['React', 'Bootstrap'],
      desc: 'Fast food ordering app with location tracking',
      img: Healthcare,
    },
    {
      id: 6,
      title: 'Library',
      tech: ['React', 'Bootstrap'],
      desc: 'Educational platform for remote students',
      img: Fitness,
      link:'https://al-mansouri-library.vercel.app'
    },
  ];

  const ProjectCard = ({ project }) => (
    <Card data-aos="fade-up" className='bg-black mb-5' style={{ width: '22rem' }}>
      <Card.Img variant="top" src={project.img} />
      <Card.Body>
        <Card.Title className='text-white'>{project.title}</Card.Title>
        <div className="px-2 pt-1 pb-1">
          {project.tech.map((tech, idx) => (
            <span key={idx} className="inline-block bg-blue-950 rounded-full px-2 py-1 text-sm font-semibold text-blue-300 mr-2 mb-2">
              {tech}
            </span>
          ))}
        </div>
        <Card.Text className='text-white'>{project.desc}</Card.Text>
        <div className='flex items-center px-1'>

          <a href={project.link} className="text-blue-500 no-underline hover:underline">View Case Study</a>
          <HiOutlineArrowSmRight size={22} color="blue" />
        </div>
      </Card.Body>
    </Card>
  );

  return (
    <div id='Projcts' className='bg-slate-950 text-white w-full'>
      <h1 data-aos="fade-up" className='text-center p-5 font-bold'>Featured Projects</h1>

      <div className='px-5 flex items-center flex-wrap justify-center gap-[80px]'>
        {projects.slice(0, 3).map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}

    
        <div className='flex items-center px-1'>
          <a  onClick={() => setShowAll(true)}
            href="#" className="text-blue-500 no-underline hover:underline">
            View all projects
          </a>
          <HiOutlineArrowSmRight size={22} color="blue" />
        </div>
    </div>

      {/* Full screen overlay */}
   {showAll && (
     <div className="fixed inset-0 bg-black bg-opacity-95 z-50 p-6 overflow-y-auto overflow-x-hidden">

    {/* زر الإغلاق */}
    <button
      onClick={() => setShowAll(false)}
      className="absolute top-6 right-6 text-white bg-blue-600 p-2 rounded-full hover:bg-blue-700 focus:outline-none"
      aria-label="Close"
    >
      <HiX size={24} />
    </button>

    <h2 className="text-white text-2xl mb-4 text-center mt-4">All projects </h2>

    {/* عرض الكروت */}
    <div className='px-5 flex items-center flex-wrap justify-center gap-[80px]'>
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </div>
)}
    </div>
  );
};

export default Cards;
