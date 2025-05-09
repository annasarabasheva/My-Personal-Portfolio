import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home'
import Header from './components/header/Header';
import TechSkills from './components/tech-skills/TechSkills';
import Education from './components/education/Education';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Certificates from './components/certificates/Certificates';


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/techskills" element={<TechSkills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App