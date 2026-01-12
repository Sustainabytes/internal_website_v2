import "./Herocarousel.css";
import { useState } from "react";

import Clara from "../assets/ClaraGomes.svg";
import ClaraVector from "../assets/ClaraVector.svg";
import Frame from "../assets/MemberFrame.svg"
import Mail from "../assets/Mail.svg"
import Arrow from "../assets/OurTeamsArrow.svg"
import NextArrow from "../assets/NextArrow.svg"
import BackArrow from "../assets/BackArrow.svg"

function TeamsSection({ id, backColor, textColor, text, arr }) {
    return (
        <div id={id} className="teamSection">
            <div className="teamTitle font-sans" style={{ background: backColor }}>
                {text}
            </div>

            <div className="teamMembers">
                {arr.map((member, index) => (
                    <MemberPhoto
                        key={index}
                        name={member.name}
                        role={member.role}
                        email={member.email}
                        color={textColor}
                    />
                ))}
            </div>
        </div>
    );
}


function MemberPhoto({ name, role, email, color }) {
    return (
        <div className="memPhoto">
            <div className="aboveFrame">
                <h3 style={{ color }}>{role}</h3>
                <h4 style={{ color }}>{name}</h4>
                <div className="emailBtn">
                    <img src={Mail} alt="Mail" className="emailImg"/>
                    <div className="emailLink" style={{ color }}>{email}</div>
                </div>
            </div>

            <img src={Frame} alt="Member frame" className="frame"/>
            
        </div>

    )
}

function TeamDescription({ imgLink, Title, Desc, Scroll, onNext, onPrev}) {
    return (
        <div className="heroMainBlock">
            <img
                src={BackArrow}
                className="backArrow"
                onClick={onPrev}
            />
            <img
                src={NextArrow}
                className="nextArrow"
                onClick={onNext}
            />

            <div className="heroLeftside">
                <div className="flashcards">
                    <div className="flashcard">
                        <img src={imgLink}/>
                    </div>
                </div>
            </div>
            
            <div className="heroRightside">
                <div className="heroText">
                    <h2 className="font-sans">{Title}</h2>
                    <h4>{Desc}</h4>
                </div>
                    <button
                    className="membersBtn"
                    onClick={() => {
                        document
                        .getElementById(Scroll)
                        ?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}>
                        Members
                    </button>
            </div>
        </div>
    )
}


function HeroCarousel() {

    const slides = [
    {
        img: Clara,
        title: "E-Board",
        desc: "Description here",
        scroll: "eboard",
    },
    {
        img: Mail,
        title: "Operations",
        desc: "Description here 2",
        scroll: "operations",
    },
    {
        img: ClaraVector,
        title: "Data Analytics",
        desc: "Description here 3",
        scroll: "data-analytics",
    },
    {
        img: Frame,
        title: "Engagement and Education",
        desc: "Description here 4",
        scroll: "engagement-education",
    },
    {
        img: Arrow,
        title: "Web Development",
        desc: "Description here 5",
        scroll: "web-dev",
    },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <div className="heroCarousel">

            <div className="ourTeamsTitle">
                <h1 className="ourTeams font-sans">Our <span className="teams">Teams</span></h1>
                <img src={Arrow} alt="arrow" className="arrow"/>
            </div>

            <TeamDescription
            imgLink={slides[currentSlide].img}
            Title={slides[currentSlide].title}
            Desc={slides[currentSlide].desc}
            Scroll={slides[currentSlide].scroll}
            onNext={() =>
                setCurrentSlide((prev) => (prev + 1) % slides.length)
            }
            onPrev={() =>
                setCurrentSlide((prev) =>
                prev === 0 ? slides.length - 1 : prev - 1
                )
            }
            />


            <div className="claraSection">
                <div className="claraLeftside">
                    <img src={Clara} alt="Clara Gomes" className="claraPic"/>
                    <img src={ClaraVector} className="claraVec"/>
                </div>

                <div className="claraRightside">
                    <h2 className=" font-sans"><span className="advisor">Advisor</span> Clara Gomes</h2>
                    <h4>Director of the Institute for Computational Sustainability at Cornell University</h4>
                </div>
            </div>



            <div className="theTeams">

                
                <TeamsSection
                    id="eboard"
                    backColor="linear-gradient(90deg, #AD99FF, #F5FAF7)"
                    textColor="#3111B2"
                    text="E-Board"
                    arr={[{ name: "Tianyi C.", role: "President", email: "tc757@cornell.edu" },
                        { name: "Kyle C.", role: "Vice President", email: "ksc224@cornell.edu" }, 
                        { name: "Mikael M-R.", role: "Secretary", email: "mm3446@cornell.edu" }
                    ]}  
                />
                <TeamsSection
                    id="operations"
                    backColor="linear-gradient(90deg, #F3E880, #F5FAF7)"
                    textColor="#C9AB27"
                    text="Operations"
                    arr={[{ name: "Jerry C.", role: "Social Media", email: "jc3689@cornell.edu" }, 
                        { name: "Kalia C.", role: "Treasurer", email: "kc2274@cornell.edu" }, 
                        { name: "Kaavya P.", role: "Business", email: "kp627@cornell.edu" }, 
                        { name: "Aish M.", role: "External Affairs", email: "am3369@cornell.edu" }, 
                    ]}
                />
                <TeamsSection
                    id="data-analytics"
                    backColor="linear-gradient(90deg, #93C4A6, #F5FAF7)"
                    textColor="#51B976"
                    text="Data Analytics"
                    arr={[{ name: "Seokyun H.", role: "Lead", email: "sh2656@cornell.edu" }, 
                        { name: "Abby C.", role: "Lead", email: "aac265@cornell.edu" }, 
                        { name: "Eric Z.", role: "Member", email: "ez323@cornell.edu" }, 
                        { name: "Minh T.", role: "Member", email: "tt536@cornell.edu" }, 
                    ]}
                />
                <TeamsSection
                    id="engagement-education"
                    backColor="linear-gradient(90deg, #FBBEF6, #FAF5F9)"
                    textColor="#EF71E5"
                    text="Engagement and Education"
                    arr={[{ name: "Tristan A.", role: "Member", email: "tja75@cornell.edu" },
                        { name: "Jimmy Z.", role: "Member", email: "yz3439@cornell.edu" }
                    ]}
                />
                <TeamsSection
                    id="web-dev"
                    backColor="linear-gradient(90deg, #BED8FB, #F5F8FA)"
                    textColor="#7EB3F8"
                    text="Web Development"
                    arr={[{ name: "Arsh K.", role: "Lead", email: "ak2676@cornell.edu" },
                        { name: "Cinnie L.", role: "Lead", email: "cl2728@cornell.edu" },
                        { name: "Winnie C.", role: "Lead", email: "email2@email.com" },
                        { name: "Amanda Z.", role: "Member", email: "az565@cornell.edu" },
                        { name: "Anusha K.", role: "Member", email: "wc697@cornell.edu" },
                        { name: "Willow C.", role: "Member", email: "ark279@cornell.edu" }
                    ]}
                />
            </div>


            
        </div>
    )

}

export default HeroCarousel;