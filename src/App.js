import React, { useEffect, useState } from 'react';
import './App.css';
import About from './About'; 
import Projects from './Projects';
import Timeline from "./components/Timeline";
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from './components/ScrollToTop';
import Achievements from './components/Achievements';
import '@fortawesome/fontawesome-free/css/all.min.css';



const rotatingTexts = [
  "Software Engineer",
  "Design-Minded Developer",
  "Lover of Clean Code",
  "Built in Chennai"
];

function App() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
  AOS.init({ duration: 800, once: true });
}, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % rotatingTexts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
  <>
  <Navbar />
      <div className="hero" id="hero">
        <h1 className="name">ABINANTHAN V</h1>
        <p className="subtitle">{rotatingTexts[index]}</p>
        <div className="scroll-indicator">↓ Scroll to explore</div>
      </div>
  <About />
  <Timeline />
  <Projects />
  <Achievements />
  <TechStack />
  <Contact />
  <Footer />
  <ScrollToTop />
  </>
  );
}

export default App;
