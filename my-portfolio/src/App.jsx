import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home'
import Header from './components/header/Header';
import TechSkills from './components/tech-skills/TechSkills';


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<TechSkills />} />
      </Routes>
    </>
  )
}

export default App