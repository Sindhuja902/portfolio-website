import React from "react";
import "./Projects.css";
import { projectsData } from "../data/ProjectsData";

function Projects() {
  return (
    <div id="projects" className="projects">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-container">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <ul className="tech-stack">
              {project.techStack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
