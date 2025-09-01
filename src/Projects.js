import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "Student Verify App",
    description: "Verifies student data using Register No. and D.O.B with a clean React UI. JSON and Excel data driven.",
    tech: "React, JSON, Excel, GitHub Pages, Render",
    link: "https://github.com/mrbi10/student-verify"
  },
  {
    title: "Jarvis Voice Assistant",
    description: "Personal desktop assistant using voice commands for automating tasks like opening apps, searching, etc.",
    tech: "Python, pyttsx3, speechRecognition",
    link: "https://github.com/mrbi10/Jarvis-Voice-Assistant"
  },
  {
    title: "Student Info System",
    description: "Basic student info portal with registration, editing, and search functionalities.",
    tech: "Python, SQLite3, Tkinter",
    link: "https://github.com/mrbi10/studentinfo"
  },
  {
    title: "Reddit Fake News Detector",
    description: "Detects fake news from Reddit comments using NLP and machine learning models.",
    tech: "Python, NLP, scikit-learn, Reddit API",
    link: "https://github.com/mrbi10/reddit-fake-news-detector"
  },
  {
    title: "Hotel Management System",
    description: "Console-based hotel room booking and billing system with CRUD operations.",
    tech: "C++, File Handling",
    link: "https://github.com/mrbi10/Hotel-Management-System"
  },
 
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((proj, i) => (
          <div className="project-card" key={i}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <span className="tech">{proj.tech}</span>
            <a href={proj.link} className="link" target="_blank" rel="noopener noreferrer">
              View
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
