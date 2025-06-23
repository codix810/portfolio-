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
      title: 'E-commerce Platform',
      tech: ['React', 'Node.js', 'MongoDB'],
      desc: 'Modern e-commerce solution with advanced',
      img: Ecommerce,
    },
    {
      id: 2,
      title: 'Healthcare Dashboard',
      tech: ['Vue', 'Python', 'PostgreSQL'],
      desc: 'Analytics dashboard for healthcare providers',
      img: Healthcare,
    },
    {
      id: 3,
      title: 'Fitness App',
      tech: ['React Native', 'Firebase'],
      desc: 'Cross-platform mobile fitness tracking app',
      img: Fitness,
    },
    {
      id: 4,
      title: 'Real Estate System',
      tech: ['Laravel', 'MySQL', 'Bootstrap'],
      desc: 'Property listing and booking platform',
      img: Ecommerce,
    },
    {
      id: 5,
      title: 'Food Delivery',
      tech: ['Next.js', 'Supabase'],
      desc: 'Fast food ordering app with location tracking',
      img: Healthcare,
    },
    {
      id: 6,
      title: 'Online Learning',
      tech: ['React', 'Express', 'MongoDB'],
      desc: 'Educational platform for remote students',
      img: Fitness,
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
          <a href="#" className="text-blue-500 no-underline hover:underline">View Case Study</a>
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
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 p-6 overflow-auto">
         <button onClick={() => setShowAll(false)} 
           className="absolute top-6 right-6 text-white bg-red-600 p-2 rounded-full hover:bg-red-700" aria-label="Close">
           <HiX size={24} />
        </button>
          <h2 className="text-white text-2xl mb-4 text-center"> All projects</h2>
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
