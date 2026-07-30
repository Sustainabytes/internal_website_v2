import { projects } from "../data/projects.js";
import "./ProjectSection.css";

function ProjectSection() {
  return (
    <div className="projects">
      <header className="projects__head">
        <div className="shell">
          <span className="eyebrow">
            {projects.length} active {projects.length === 1 ? "project" : "projects"}
          </span>
          <h1 className="projects__title">Our projects</h1>
          <p className="projects__intro measure">
            Working Groups partner with organizations and Cornell labs to build
            tools that make environmental work measurable.
          </p>
        </div>
      </header>

      <div className="shell projects__list">
        {projects.map((project) => (
          <article key={project.id} className="project">
            <div className="project__identity">
              <div className="project__logo">
                <img src={project.logo} alt="" />
              </div>
              <div>
                <h2 className="project__name">{project.name}</h2>
                {/* Skip the partner line when it just repeats the project name. */}
                {project.partner !== project.name && (
                  <p className="project__partner mono">{project.partner}</p>
                )}
              </div>
            </div>

            <div className="project__work">
              <span className="eyebrow eyebrow--rule">Workstreams</span>
              <dl className="workstreams">
                {project.workstreams.map((stream) => (
                  <div key={stream.name} className="workstream">
                    <dt>{stream.name}</dt>
                    <dd>
                      <p>{stream.summary}</p>
                      {stream.skills?.length > 0 && (
                        <ul
                          className="tags workstream__skills"
                          aria-label={`Skills used on ${stream.name}`}
                        >
                          {stream.skills.map((skill) => (
                            <li key={skill}>{skill}</li>
                          ))}
                        </ul>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default ProjectSection;
