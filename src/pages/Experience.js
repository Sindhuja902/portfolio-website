import React from "react";
import "./Experience.css";
import { experienceData } from '../data/ExperienceData';


function Experience() {
  return (
    <div id="experience" className="experience">
      <h1 className="experience-title">Work Experience</h1>
      <div className="timeline">
        {experienceData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h2>{item.title}</h2>
              <h3>{item.company}</h3>
              <span className="timeline-date">{item.date}</span>
              <ul>
                {item.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
