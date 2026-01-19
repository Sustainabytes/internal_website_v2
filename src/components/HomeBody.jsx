import Msg from "../assets/Msg.svg";
import TeamPhoto from "../assets/TeamPhoto.svg";
import TechnicalTeams from "../assets/TechnicalTeams.png";
import Grass_1 from "../assets/grass_1.svg";
import Grass_2 from "../assets/grass_2.svg";
import { Rocket, BookCopy } from "lucide-react";
import "./HomeBody.css";

function HomeBody() {
  const groups = [
    {
      icon: Rocket,
      name: "Technical Teams",
      title: "Upskill Through Service",
      description:
        "Through Working Groups, we apply data analytics and software engineering to real-world sustainability and serve the local area.",
      tags: ["Data Analytics", "Web Dev", "Community Impact"],
      button: "Learn More",
      photo: TechnicalTeams,
    },
    {
      icon: BookCopy,
      name: "Education",
      title: "Professional Development",
      description:
        "Participate in socials, networking events, career panels, and guest speakers. We aim to cultivate a computational sustainability community at Cornell and beyond. ",
      tags: ["Network", "Career Development", "Guest Speakers"],
      button: "Event Timeline",
      photo: TeamPhoto,
    },
  ];

  return (
    <>
      <div className="ourVision centerFlex column">
        <div className="centerFlex" style={{ gap: "30px" }}>
          <h1>
            <em>Our Vision</em>
          </h1>
          <img src={Msg} alt="A message bubble image" />
        </div>

        <div className="centerFlex" style={{ gap: "20px" }}>
          <img src={Grass_1} alt="A doodle of a small leaf" />
          <p className="visionStatement">
            We aim to drive meaningful change and to build a vibrant community
            of passionate learners through <u>events</u>, hands-on{" "}
            <u>projects</u>, and <u>advocacy</u>.
          </p>
          <img src={Grass_2} alt="A doodle of a small leaf" />
        </div>
      </div>

      <div
        className="groups centerFlex column"
        style={{ padding: "100px 0", gap: "170px" }}
      >
        {groups.map((group, index) => {
          const Icon = group.icon;

          return (
            <div
            key={index}
              className="group-card centerFlex"
              style={{ flexDirection: index % 2 === 0 ? "row-reverse" : "row" }}
            >
              <div className="group-description" key={index}>
                <div className="group-header">
                  <Icon
                    size={40}
                    style={{
                      backgroundColor: "var(--clr-secondary-400)",
                      color: "white",
                      padding: "8px",
                      borderRadius: "10px",
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "24px",
                      color: "var(--clr-secondary-400)",
                    }}
                  >
                    {group.name}
                  </h3>
                </div>
                <h1
                  style={{ fontSize: "40px", color: "var(--clr-primary-800)" }}
                >
                  {group.title}
                </h1>
                <p style={{ maxWidth: "520px" }}>{group.description}</p>
                <div className="tags">
                  {group.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="group-button centerFlex">{group.button}</div>
              </div>
              <img src={group.photo} alt="" className="groupPhoto" />
            </div>
          );
        })}
      </div>

      {/* <div className="community centerFlex">
        <h1>Building a community</h1>
      </div> */}
    </>
  );
}

export default HomeBody;
