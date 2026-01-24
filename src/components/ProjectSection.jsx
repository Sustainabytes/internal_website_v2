import "./ProjectSection.css";

function ProjectSection() {
  const projects = [
    {
      title: "ReUse",
      description:
        "TCamp is an organizartion that focuses on saving the lives of amphibians during their migration",
    },
    {
      title: "Rubi",
      description:
        "TCamp is an organizartion that focuses on saving the lives of amphibians during their migration",
    },
    {
      title: "TCamp",
      description:
        "TCamp is an organizartion that focuses on saving the lives of amphibians during their migration",
    },
  ];

  return (
    <div>
      <div className="projectHero">
        <h1>Our Projects</h1>
      </div>
      <div className="projectContainer centerFlex column">
        {projects.map((project, index) => (
        <div key={index} className="centerFlex projectCard">
          <div className="image-container"></div>
          <div className="centerFlex column">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
          </div>
        </div>
      ))}

      </div>
    </div>
  );
}

export default ProjectSection;
