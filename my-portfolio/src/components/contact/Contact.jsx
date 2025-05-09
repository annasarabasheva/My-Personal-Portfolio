import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub } from "react-icons/fa";
import "./Contact.css";

const contactData = [

    {
        icon: <FaMapMarkerAlt />,
        title: "Location",
        value: "Stara Zagora, Bulgaria",
        link: "https://goo.gl/maps/xyz" // Replace with actual Google Maps link
        },
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "annasarabasheva@gmail.com",
    link: "mailto:annasarabasheva@gmail.com"
  },
  {
    icon: <FaPhone />,
    title: "Phone",
    value: "+359893696644",
    link: "tel:+359893696644"
  },

  {
    icon: <FaGithub />,
    title: "GitHub",
    value: "github.com/annasarabasheva",
    link: "https://github.com/annasarabasheva"
  }
];

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-grid">
        {contactData.map((contact, index) => (
          <a 
            key={index} 
            href={contact.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-card"
          >
            <div className="contact-icon">{contact.icon}</div>
            <div className="contact-info">
              <h3>{contact.title}</h3>
              <p>{contact.value}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
