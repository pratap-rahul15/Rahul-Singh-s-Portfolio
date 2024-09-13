import React from "react";
import "./project.css";
import projects from "../../projects";
const Project = () => {
  return (
    <section id="project">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container projectContainer">
        {projects.map((project) => (
          <article className="projectItems" key={project.id}>
            <div className="projectItemImage">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="stack">
              <h3>{project.title}</h3>
              {project.stacks.map((stack, index) => (
                <img
                  src={stack}
                  alt={`Stack ${index + 1}`}
                  key={index}
                  className="stackImg"
                />
              ))}
            </div>
            <div className="projectItemCta">
              <a href={project.github} className="btn" target="_blank">
                Github
              </a>
              <a
                href={project.demo}
                className={
                  project.demo === ""
                    ? "btn btn-primary liveDemoDisabled"
                    : "btn btn-primary"
                }
                target="_blank"
              >
                LIVE Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Project;
