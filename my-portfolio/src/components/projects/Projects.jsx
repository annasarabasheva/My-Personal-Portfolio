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
      "User authentication and public/private routing: Secure login, registration, and logout with protected routes and client-side validation.",
      "CRUD operations for managing art posts: Create, read, update, and delete records, with options to like and comment on artwork.",
      "Search functionality: Search for artworks by category with a prominent search bar for efficient browsing.",
      "User profiles and activity: Manage personal profiles, view liked artworks, and track activity history.",
      "Detailed art pages: View detailed information about specific artwork, including artist info and user comments.",
      "Error handling and validation: Display error messages for failed actions, ensuring a smooth user experience.",
      "Collaborative space for feedback: Engage with the community by providing feedback and connecting with fellow artists."
    ],
    github: "https://github.com/annasarabasheva/ReactJS-Personal-Project"
  },
  {
    logo: '/UniMatch.png',
    title: "UniMatch Web App",
    description:
      "Connects prospective students with current university students for real-time guidance.",
    features: [
      "User Authentication: Secure login, registration, and logout functionality for all users.",
      "Forum Functionality: Create categories, threads, and posts. Like, reply, and interact with posts.",
      "Student Profiles: Manage personal profiles, send messages, and rate students' helpfulness.",
      "University Management: View university details, add new universities, and edit existing entries.",
      "Search Functionality: Search for universities by country and filter results efficiently.",
      "Activity Summary: View user activity, including threads created, posts made, and likes received.",
      "Student Management: Current students can provide information about their studies and university."
    ],
    github: "https://github.com/annasarabasheva/Personal-Project-with-Django"
  },
  {
    logo: '/pet-logo.png',
    title: "PetCare Connect Web App",
    description:
      "A platform for pet owners to connect with trusted caregivers for reliable pet care support.",
    features: [
      "Find Caregivers: Browse profiles of local pet sitters and select the right match for your pet.",
      "Become a Caregiver: Apply to be a pet sitter by filling out a simple form, even if you don't own a pet.",
      "Ratings and Reviews: Check reviews from other pet owners to ensure trustworthy care for your pet.",
      "Rate and Review: Share feedback by rating and reviewing caregivers after each service.",
      "Connect with Confidence: Build a trusted network of pet lovers ready to provide care and support.",
      "Private Chats: Communicate directly with caregivers and pet owners through one-on-one messaging.",
      "Forum: Ask questions, join discussions, and explore top-rated topics in the PetCare community forum.",
      "Calendar: Organize requests and schedules easily with a built-in calendar for managing pet care appointments."
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
            <div className="features-wrapper">
              <ul className="features">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
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