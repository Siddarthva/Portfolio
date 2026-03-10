import {
  FaJava, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs,
  FaDatabase, FaGithub, FaDocker, FaCode, FaTerminal,
} from 'react-icons/fa';
import {
  SiSpringboot, SiFastapi, SiScikitlearn, SiMysql,
  SiPostgresql, SiMongodb, SiKubernetes,
} from 'react-icons/si';
import Reveal, { StaggerContainer, StaggerItem } from './Reveal';
import './Skills.css';

const skillsData = [
  {
    category: 'Languages', skills: [
      { name: 'Java', icon: <FaJava /> }, { name: 'C', icon: <FaCode /> }, { name: 'C++', icon: <FaCode /> },
    ]
  },
  {
    category: 'Web Technologies', skills: [
      { name: 'HTML', icon: <FaHtml5 /> }, { name: 'CSS', icon: <FaCss3Alt /> }, { name: 'JavaScript', icon: <FaJsSquare /> },
    ]
  },
  {
    category: 'Frameworks & Libraries', skills: [
      { name: 'React', icon: <FaReact /> }, { name: 'Spring Boot', icon: <SiSpringboot /> },
      { name: 'FastAPI', icon: <SiFastapi /> }, { name: 'Scikit-learn', icon: <SiScikitlearn /> },
    ]
  },
  {
    category: 'Databases', skills: [
      { name: 'MySQL', icon: <SiMysql /> }, { name: 'PostgreSQL', icon: <SiPostgresql /> }, { name: 'MongoDB', icon: <SiMongodb /> },
    ]
  },
  {
    category: 'Tools & Platforms', skills: [
      { name: 'GitHub', icon: <FaGithub /> }, { name: 'Docker', icon: <FaDocker /> },
      { name: 'Kubernetes', icon: <SiKubernetes /> }, { name: 'VS Code', icon: <FaTerminal /> },
    ]
  },
  {
    category: 'Concepts', skills: [
      { name: 'OOP', icon: <FaCode /> }, { name: 'RESTful APIs', icon: <FaNodeJs /> },
      { name: 'Data Structures', icon: <FaDatabase /> }, { name: 'Basic ML Models', icon: <SiScikitlearn /> },
    ]
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <Reveal className="skills-header">
          <p className="section-label">02 — Skills</p>
          <h2 className="section-heading">Skills &amp; Technologies</h2>
        </Reveal>

        <StaggerContainer className="skills-grid" stagger={0.1}>
          {skillsData.map((cat, i) => (
            <StaggerItem key={i}>
              <div className="skill-cat glass-card">
                <h3 className="cat-title font-accent">{cat.category}</h3>
                <div className="skill-items">
                  {cat.skills.map((s, j) => (
                    <div key={j} className="skill-chip">
                      <span className="skill-icon">{s.icon}</span>
                      <span className="skill-name">{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Skills;
