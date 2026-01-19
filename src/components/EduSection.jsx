import "./EduSection.css";
import { Sprout } from "lucide-react";
import AndSign from "../assets/andSign.svg"
import NextArrow from "../assets/NextArrow.svg"
import { useState } from "react";


function EduHeroText({ title, desc, onNext }) {
    return (
        <div className="eduHeroText"> 
            <h2 id="heroTitle" className="font-sans">{title}</h2>

            <div className="heroDescriptionBox">
                <h4 id="herodesc">{desc}</h4>

                <img
                    src={NextArrow}
                    alt="nextArrow"
                    className="nestArrow"
                    onClick={onNext}
                    style={{ cursor: "pointer" }}
                />
            </div>
        </div>
    );
}

function EduBodyEvent({title, date, desc}) {
    return (
        <div className="eventCard">
            <h2 className="eventTitle">{title}</h2>
            <h3 className="eventDate">{date}</h3>
            <h4 className="eventDescription">{desc}</h4>
        </div>
    )
}




function EduSection() {
    const heroTexts = [
        {
            title: "I. Build Community",
            desc: (
                <>
                    We aim to foster and host <span className="pink">interdisciplinary</span> collaborations across data, tech, and environment and sustainability groups on campus through <span className="pink">engagement</span> and <span className="pink">outreach initiatives</span> (podcast, etc.).
                </>
                
            )
        },
        {
            title: "II. Professional Development",
           desc: (
                <>
                    We strive to connect computational sustainability/green tech professionals and like-minded peers through <span className="pink">socials</span>, <span className="pink">networking events</span>, <span className="pink">career panels</span>, and <span className="pink">guest speakers</span>. 
                </>
                
            )
        }
    ];

    const bodyEvents = [
        {
            title: "Information Session 1",
            date: "Wednesday, January 28th (5:00pm-5:30pm)",
            desc: (
                <>
                    description goes here 1
                </>
                
            )
        },
        {
            title: "Applications Open",
            date: "Thursday, January 29th",
            desc: (
                <>
                    description goes here 2
                </>
                
            )
        },
        {
            title: "Information Session 2",
            date: "Tuesday, Febuaray 3rd (5:00pm-6:00pm)",
            desc: (
                <>
                    description goes here 2
                </>
                
            )
        },
        {
            title: "Applications Close",
            date: "Wednesday, February 4",
            desc: (
                <>
                    description goes here 2
                </>
                
            )
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) =>
            (prev + 1) % heroTexts.length
        );
    };
    
       return (
        <>
            <div className="eduHero">
                <div className="heroLeft">
                    <div id="heroLeftUpper">
                        <h1>Education</h1>
                        <Sprout size={80} id="sprout" />
                    </div>

                    <div id="heroLeftLower">
                        <img src={AndSign} id="andSign"/>
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
                    />
                ))}
            </div>

        </>
    );
}



export default EduSection;
