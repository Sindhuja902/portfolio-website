import React from 'react';
import './Skills.css';

const skillsData = [
  { skill: 'JavaScript', icon: '📜' }, // Updated icon
  { skill: 'React.js', icon: '⚛️' },
  { skill: 'Node.js', icon: '🌲' }, // Updated icon
  { skill: 'Python', icon: '🐍' },
  { skill: 'Java', icon: '☕' },
  { skill: 'SQL', icon: '📊' },
  { skill: 'HTML & CSS', icon: '🌐' },
  { skill: 'Git', icon: '🐙' }, // Updated icon
  { skill: 'TypeScript', icon: '🔷' }, // New skill
  { skill: 'MongoDB', icon: '🍃' }, // New skill
  { skill: 'Docker', icon: '🐳' }, // New skill
  { skill: 'GraphQL', icon: '🔮' }, // New skill
  { skill: 'AWS', icon: '☁️' }, // New skill
];

function Skills() {
  return (
    <div id="skills" className="skills">
      <h1 className="skills-title">My Skills</h1>
      <div className="skills-container">
        {skillsData.map((item, index) => (
          <div key={index} className="skill-card">
            <span className="skill-icon">{item.icon}</span>
            <h2 className="skill-name">{item.skill}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
