
import './Home.css';
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <section className="home">
      <div className="home-container">
        <div className="image-section">
          <img src="/Me.jpg" alt="Anna" className="profile-img" />
        </div>

        <div className="intro-section">
          <h1>Hi, I'm Anna</h1>
          <p>
          Welcome to my Web Development Journey ! <br/> Take a look around and see what I've been working on.
          </p>

          <Link to="/about" className="about-btn">About Me</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
