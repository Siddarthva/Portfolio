import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaDocker,
  FaCode,
  FaTerminal,
} from 'react-icons/fa';
import {
  SiSpringboot,
  SiFastapi,
  SiScikitlearn,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiKubernetes,
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    {
      category: 'Languages',
      skills: [
        { name: 'Java', icon: <FaJava /> },
        { name: 'C', icon: <FaCode /> },
        { name: 'C++', icon: <FaCode /> },
      ],
    },
    {
      category: 'Web Technologies',
      skills: [
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
        { name: 'JavaScript', icon: <FaJsSquare /> },
      ],
    },
    {
      category: 'Frameworks & Libraries',
      skills: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Spring Boot', icon: <SiSpringboot /> },
        { name: 'FastAPI', icon: <SiFastapi /> },
        { name: 'Scikit-learn', icon: <SiScikitlearn /> },
      ],
    },
    {
      category: 'Databases',
      skills: [
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
      ],
    },
    {
      category: 'Tools & Platforms',
      skills: [
        { name: 'GitHub', icon: <FaGithub /> },
        { name: 'Docker', icon: <FaDocker /> },
        { name: 'Kubernetes', icon: <SiKubernetes /> },
        { name: 'VS Code', icon: <FaTerminal /> },
      ],
    },
    {
      category: 'Concepts',
      skills: [
        { name: 'OOP', icon: <FaCode /> },
        { name: 'RESTful APIs', icon: <FaNodeJs /> },
        { name: 'Data Structures', icon: <FaDatabase /> },
        { name: 'Basic ML Models', icon: <SiScikitlearn /> },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div key={index} className="skill-category glass-card">
              <h3 className="category-title">{category.category}</h3>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-icon">{skill.icon}</div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
