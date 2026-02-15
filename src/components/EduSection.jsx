import "./EduSection.css";
import { Sprout } from "lucide-react";
import AndSign from "../assets/andSign.svg";
import NextArrow from "../assets/NextArrow.svg";
import { useState } from "react";

function EduHeroText({ title, desc, onNext }) {
  return (
    <div className="eduHeroText">
      <h2 id="heroTitle" className="font-sans">
        {title}
      </h2>

      <div className="heroDescriptionBox">
        <h4 id="herodesc">{desc}</h4>

        <img src={NextArrow} className="nestArrow" onClick={onNext} />
      </div>
    </div>
  );
}

function EduBodyEvent({ title, date, desc, img }) {
  return (
    <div className="eventCard">
      <h2 className="eventTitle">{title}</h2>
      <h3 className="eventDate">{date}</h3>
      <div className="centerFlex event" style={{ gap: "10px", padding: "20px" }}>
        <img
          src={img}
          alt="The image for the event"
          style={{ maxWidth: "50vw", padding: "20px" }}
        />
        <div>{desc}</div>
      </div>
    </div>
  );
}

function EduSection() {
  const heroTexts = [
    {
      title: "I. Build Community",
      desc: (
        <>
          We aim to foster and host{" "}
          <span className="pink">interdisciplinary</span> collaborations across
          data, tech, and environment and sustainability groups on campus
          through <span className="pink">engagement</span> and{" "}
          <span className="pink">outreach initiatives</span> (podcast, etc.).
        </>
      ),
    },
    {
      title: "II. Professional Development",
      desc: (
        <>
          We strive to connect computational sustainability/green tech
          professionals and like-minded peers through{" "}
          <span className="pink">socials</span>,{" "}
          <span className="pink">networking events</span>,{" "}
          <span className="pink">career panels</span>, and{" "}
          <span className="pink">guest speakers</span>.
        </>
      ),
    },
  ];

  const bodyEvents = [
    {
      title: "Computational Sustainability Career Night",
      date: "Feb 25, 2026 @ 6 PM - 8 PM",
      desc: (
        <>
          <h2>Panel Speakers</h2>
          <br />
          <p>
            <b>Alumni:</b> Brian Warshay, Phillip Lanza <br />
            <b>Professors:</b> Andrew Bell, David Shmoys <br />
            <b>Grad students:</b> Abigail Grassick, Madeleine Allen, Katerina
            Tang
          </p>
          <br />
          <h2>
            Campus groups registration{" "}
            <a
              href="https://cglink.me/2ee/r2299244"
              style={{ color: "var(--clr-primary-500)" }}
            >
              link
            </a>
            !
          </h2>
          <br />
          <h3>There will be free food (pizza)</h3>
        </>
      ),
      eventImage: "/E&Events/ecoCareerNight.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroTexts.length);
  };

  return (
    <>
      <div className="eduHero">
        <div className="heroLeft">
          <div id="heroLeftUpper">
            <h1>Education</h1>
            <Sprout id="sprout" />
          </div>

          <div id="heroLeftLower">
            <img src={AndSign} id="andSign" />
            <h1 id="engagement">Engagement</h1>
          </div>
        </div>

        <EduHeroText
          title={heroTexts[currentIndex].title}
          desc={heroTexts[currentIndex].desc}
          onNext={handleNext}
        />
      </div>

      <div className="eduBody">
        <h2 className="bodyTitle font-sans">Upcoming Events</h2>

        {bodyEvents.map((event, index) => (
          <EduBodyEvent
            key={index}
            title={event.title}
            date={event.date}
            desc={event.desc}
            img={event.eventImage}
          />
        ))}
      </div>
    </>
  );
}

export default EduSection;
