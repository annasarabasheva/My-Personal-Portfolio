import React from "react";
import { FaGithub } from "react-icons/fa";
import "./Projects.css";

const projectData = [
  {
    logo: '/ArtCompany.png',
    title: "The Art Company Web App",
    description:
      "A responsive platform inspired by Pinterest/Tumblr for artists to share and explore creative work.",
    features: [
      "User authentication and public/private routing",
      "CRUD operations for managing art posts",
      "Collaborative space for feedback and creativity"
    ],
    github: "https://github.com/annasarabasheva/ReactJS-Personal-Project"
  },
  {
    logo: '/UniMatch.png',
    title: "UniMatch Web App",
    description:
      "Connects prospective students with current university students for real-time guidance.",
    features: [
      "Interactive forums and direct messaging",
      "Community-driven knowledge sharing",
      "User profiles and messaging features"
    ],
    github: "https://github.com/annasarabasheva/Personal-Project-with-Django"
  },
  {
    logo: '/pet-logo.png',
    title: "PetCare Connect Web App",
    description:
      "A platform for pet owners to connect with trusted caregivers for reliable pet care support.",
    features: [
      "Verified caregiver profiles and forums",
      "Direct messaging for secure interactions",
      "Community-based advice sharing"
    ],
    github: "https://github.com/annasarabasheva/Project-with-Django-2"
  }
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-logo">
                <img src={project.logo} alt={`${project.title} logo`} />
            </div>
            <h3>{project.title}</h3>
            <p className="description">{project.description}</p>
            <ul className="features">
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
              <FaGithub className="github-icon" />
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
