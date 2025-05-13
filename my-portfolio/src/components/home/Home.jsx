
import './Home.css';
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <section className="home">
      <div className="home-container">
        <div className="image-section">
          <img src="/Anna.jpg" alt="Anna" className="profile-img" />
        </div>

        <div className="intro-section">
          <h1>Hi, I'm Anna</h1>
          <p>
          I'm trying to become a Web Developer — consider this my first big step.  
          (Well, not the first, but definitely the time to show them all.)
          </p>

          <Link to="/about" className="about-btn">About Me</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
