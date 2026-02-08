import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      title: 'Udaan – Crowdfunding Platform',
      description: 'A comprehensive crowdfunding platform with secure payment integration and campaign management.',
      tech: ['React', 'Node.js', 'MongoDB', 'JWT', 'Razorpay'],
      features: [
        'JWT Authentication',
        'Razorpay Payment Integration',
        'REST APIs for campaigns and users',
        'Reduced campaign creation steps by 40%',
      ],
      github: 'https://github.com/Siddarthva',
      demo: '#',
      //image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'BloodLink – Blood Donation Platform',
      description: 'Real-time blood donation platform connecting donors with recipients in emergency situations.',
      tech: ['React', 'MongoDB'],
      features: [
        'Real-time donor–recipient matching',
        'Emergency focused design',
        'Fast connection under 5 minutes',
      ],
      github: 'https://github.com/Siddarthva',
      demo: '#',
      //image: 'https://images.pexels.com/photos/6823567/pexels-photo-6823567.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Lend a Hand – Service Booking App',
      description: 'Mobile service booking application with intelligent scheduling and real-time communication.',
      tech: ['React Native', 'Node.js', 'MongoDB'],
      features: [
        'Conflict-free scheduling algorithm',
        'Real-time chat',
        '50+ mock transactions',
      ],
      github: 'https://github.com/Siddarthva',
      demo: '#',
      //image: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'AlgoVisualizer',
      description: 'Interactive algorithm visualization tool for learning sorting algorithms with speed controls.',
      tech: ['JavaScript', 'HTML5 Canvas'],
      features: [
        'Sorting visualizations',
        'Bubble, Merge, Quick Sort',
        'Speed control',
      ],
      github: 'https://github.com/Siddarthva',
      demo: 'https://algo-viz-gamma-flame.vercel.app/',
      //image: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Resume Analyzer Pro',
      description: 'AI-powered resume analysis tool providing instant ATS scoring and detailed feedback for job seekers.',
      tech: ['React', 'AI Integration', 'Tailwind CSS'],
      features: [
        'Instant ATS Score generation',
        'Keyword gap analysis',
        'Actionable improvement suggestions',
        'PDF resume parsing',
      ],
      github: 'https://github.com/Siddarthva',
      demo: 'https://resume-analyzer-jrjg5o1t0-siddarths-projects-f72c4c95.vercel.app/',
      //image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800', 
    },
    {
      title: '2048 – Neon Edition',
      description: 'A modern neon-themed remake of the classic 2048 puzzle game with smooth animations, responsive design, and keyboard controls.',
      tech: ['React', 'Vite', 'JavaScript', 'CSS'],
      features: [
        'Neon dark-mode UI',
        'Smooth tile animations',
        'Keyboard and touch support',
        'Responsive across devices',
        'Optimized game logic',
      ],
      github: 'https://github.com/Siddarthva',
      demo: 'https://2048-game-umber-six.vercel.app/',
      //image: '/projects/2048-neon-preview.png',
  }
,
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card glass-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View GitHub Repository"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="project-features">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;