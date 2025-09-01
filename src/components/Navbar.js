import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#timeline">Timeline</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#tech">Skill</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
