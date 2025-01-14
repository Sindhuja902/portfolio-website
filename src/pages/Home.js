// src/pages/Home.js
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <img src="/images/portfolio.jpg" alt="Sindhuja" className="profile-pic" />
        
      <p>
        Hi, I'm Sindhuja, a highly motivated full-stack developer with expertise in Python, Java, and modern frameworks. 
        Explore my skills, projects, and experiences as you navigate through this website!
      </p>
      <a href="#contact" className="btn">Get in Touch</a>
    </div>
  );
}

export default Home;
