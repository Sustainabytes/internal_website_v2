import Msg from "../assets/Msg.svg";
import TeamPhoto from "../assets/TeamPhoto.svg"
import { Rocket, BookCopy } from "lucide-react";
import "./HomeBody.css";

function HomeBody() {
  const groups = [
    {
      icon: Rocket,
      name: "Working Groups",
      title: "Upskill Through Service",
      description:
        "Through Working Groups, we apply data analytics and software engineering to real-world sustainability and serve the local area.",
      tags: ["Data Analytics", "Web Dev", "Community Impact"],
      button: "Learn More",
      photo: TeamPhoto
    },
    {
      icon: BookCopy,
      name: "Education",
      title: "Professional Development",
      description:
        "Participate in socials, networking events, career panels, and guest speakers. ",
      tags: ["Network", "Career Development", "Guest Speakers"],
      button: "Event Timeline",
      photo: TeamPhoto
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

        <p className="visionStatement">
          We aim to drive meaningful change and to build a vibrant community of
          passionate learners through <u>events</u>, hands-on <u>projects</u>,
          and <u>advocacy</u>.
        </p>
      </div>

      <div className="groups centerFlex column" style={{padding: "100px 0", gap: "170px"}}>
        {groups.map((group, index) => {
          const Icon = group.icon;

          return (
            <div className="group-card centerFlex" style={{ flexDirection: index % 2 === 0 ? "row-reverse" : "row" }}>
              <div className="group-description" key={index}>
                <div className="group-header">
                  <Icon size={32} />
                  <h3>{group.name}</h3>
                </div>
                <h4>{group.title}</h4>
                <p>{group.description}</p>
                <div className="tags">
                  {group.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <button>{group.button}</button>
              </div>
              <img src={group.photo} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default HomeBody;
