import React from "react";
import "./TechSkills.css";
import { FaPython, FaJsSquare, FaHtml5, FaCss3Alt, FaGit, FaDocker, FaNodeJs, FaReact, FaBootstrap } from "react-icons/fa";
import { SiExpress, SiPostgresql, SiMongodb, SiPycharm, SiPostman, SiDjango } from "react-icons/si";
import { VscAzure, VscVscode } from "react-icons/vsc";

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <FaJsSquare /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> }
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "PyCharm", icon: <SiPycharm /> },
      { name: "VS Code", icon: <VscVscode /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Git", icon: <FaGit /> },
      { name: "Docker", icon: <FaDocker /> }
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "Django", icon: <SiDjango /> },
      { name: "ReactJS", icon: <FaReact /> },
      { name: "ExpressJS", icon: <SiExpress /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "Node.js", icon: <FaNodeJs /> }
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> }
    ],
  },
  {
    category: "Cloud & Deployment",
    skills: [
      { name: "Azure", icon: < VscAzure /> }
    ],
  }
];

const TechSkills = () => {
  return (
    <section className="technical-skills">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {skillsData.map((section, index) => (
          <div key={index} className="skills-category">
            <h3>{section.category}</h3>
            <div className="skills-list">
              {section.skills.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <div className="skill-icon">{skill.icon}</div>
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechSkills;
