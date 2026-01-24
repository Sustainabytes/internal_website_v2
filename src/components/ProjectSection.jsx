import "./ProjectSection.css";
import ReUse from "../assets/projectLogos/Reuse.svg";
import MogheLab from "../assets/projectLogos/MogheLab.svg";
import ReUseBio from "../assets/ReUseBio.svg"
import RubiBio from "../assets/RubiBio.svg"

function ProjectSection() {
  const projects = [
    {
      title: "ReUse",
      logo: ReUse,
      description: ReUseBio,
    },
    {
      title: "MogheLab",
      logo: MogheLab,
      description: RubiBio,
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
          <div className="image-container centerFlex column">
            <img src={project.logo} alt="The project logo"/>
            <h2>{project.title}</h2>
          </div>
          <div className="column card-bio">
            <img src={project.description} style={{maxWidth: "40vw"}} />
          </div>
        </div>
      ))}

      </div>
    </div>
  );
}

export default ProjectSection;
