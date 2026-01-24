import "./HeroCarousel.css";
import { useState } from "react";

import Carla from "../assets/CarlaGomes.svg";
import CarlaVector from "../assets/CarlaVector.svg";
import Frame from "../assets/MemberFrame.svg"
import Mail from "../assets/Mail.svg"
import Arrow from "../assets/OurTeamsArrow.svg"
import NextArrow from "../assets/NextArrow.svg"
import BackArrow from "../assets/BackArrow.svg"
import TeamPhoto from "../assets/TeamPhoto.svg"
import linkedInImg from "../assets/LinkedIn_icon.png"
import AbbyC from "../assets/AbbyChilds.JPG"
import AmandaZ from "../assets/AmandaZhu.jpeg"
import ArshK from "../assets/ArshKaur.jpeg"
import CinnieL from "../assets/CinnieLin.jpeg"
import EricZ from "../assets/EricZhu.jpg"
import KaavyaP from "../assets/KaavyaPaladugu.jpeg"
import KaliaC from "../assets/KaliaCheung.png"
import MinhT from "../assets/MinhTran.png"
import MurphyR from "../assets/MurphyRendon.jpeg"
import SeokyunH from "../assets/SeokyunHong.jpg"
import WillowC from "../assets/WillowChen.jpg"
import KyleC from "../assets/KyleChun.png"
import TianyiC from "../assets/TianyiChen.png"
import JerryC from "../assets/JerryChen.png"
import AishM from "../assets/AishMarieswaran.png"


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
                        linkedIn={member.linkedIn}
                        portfolio={member.portfolio}
                        color={textColor}
                        photo={member.photo}
                    />
                ))}
            </div>
        </div>
    );
}


function MemberPhoto({ name, role, email, linkedIn = "", portfolio = "", color, photo = Mail}) {
    return (
        <div className="memPhoto">
            <div className="aboveFrame">
                <h3 style={{ color }}>{role}</h3>
                <h4 style={{ color }}>{name}</h4>
                <div className="emailBtn">
                    <img src={Mail} alt="Mail" className="emailImg"/>
                    <div className="emailLink" style={{ color }}>{email}                         
                        {linkedIn && (
                            <a href={linkedIn}>
                                <img src={linkedInImg} className="linkedInImg" />
                            </a>
                        )}
                        {portfolio && (
                            <a href={portfolio}>
                                <img src={Mail} className="portfolioImg" />
                            </a>
                        )}                        
                    </div>


                </div>
            </div>


            <div className="photoFrame">

                <img src={Frame} alt="Member frame" className="frame"/>

                <img src={photo} className="headShot" />

            </div>
                
            
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
        img: TeamPhoto,
        title: "E-Board",
        desc: "Founders",
        scroll: "eboard",
    },
    {
        img: TeamPhoto,
        title: "Operations",
        desc: "Organization Vision & Direction",
        scroll: "operations",
    },
    {
        img: TeamPhoto,
        title: "Data Analytics",
        desc: "Computation and Machine Learning",
        scroll: "data-analytics",
    },
    {
        img: TeamPhoto,
        title: "Engagement and Education",
        desc: "Professional Development and Events",
        scroll: "engagement-education",
    },
    {
        img: TeamPhoto,
        title: "Web Development",
        desc: "Software and Apps",
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


            <div className="carlaSection">
                <div className="carlaLeftside">
                    <img src={Carla} alt="Carla Gomes" className="carlaPic"/>
                    <img src={CarlaVector} className="carlaVec"/>
                </div>

                <div className="carlaRightside">
                    <h2 className=" font-sans"><span className="advisor">Advisor</span> Carla Gomes</h2>
                    <h4>Director of the Institute for Computational Sustainability at Cornell University</h4>
                </div>
            </div>



            <div className="theTeams">

                
                <TeamsSection
                    id="eboard"
                    backColor="linear-gradient(90deg, #AD99FF, #F5FAF7)"
                    textColor="#3111B2"
                    text="E-Board"
                    arr={[{ name: "Tianyi C.", role: "President", email: "tc757@cornell.edu", photo: TianyiC},
                        { name: "Kyle C.", role: "Vice President", email: "seiyoungchun@gmail.com", linkedIn: "https://www.linkedin.com/in/kyle-chun-50b817244/", photo: KyleC}, 
                        { name: "Mikael M-R.", role: "Secretary", email: "mm3446@cornell.edu", photo: MurphyR}
                    ]}  
                />
                <TeamsSection
                    id="operations"
                    backColor="linear-gradient(90deg, #F3E880, #F5FAF7)"
                    textColor="#C9AB27"
                    text="Operations"
                    arr={[{ name: "Jerry C.", role: "Social Media", email: "jc3689@cornell.edu", phot: JerryC }, 
                        { name: "Kalia C.", role: "Treasurer", email: "kc2274@cornell.edu", linkedIn: "https://www.linkedin.com/in/kaliacheung", photo: KaliaC}, 
                        { name: "Kaavya P.", role: "Business", email: "kp627@cornell.edu", linkedIn: "https://www.linkedin.com/in/kaavya-paladugu", photo: KaavyaP}, 
                        { name: "Aish M.", role: "External Affairs", email: "am3369@cornell.edu", photo: AishM }, 
                        { name: "RECRUITING", role: "Social Coordinator", email: "Apply today!" }, 
                        { name: "RECRUITING", role: "Interal Affairs", email: "Apply today!" }
                    ]}
                />
                <TeamsSection
                    id="data-analytics"
                    backColor="linear-gradient(90deg, #93C4A6, #F5FAF7)"
                    textColor="#51B976"
                    text="Data Analytics"
                    arr={[{ name: "Seokyun H.", role: "Lead", email: "sh2656@cornell.edu", photo: SeokyunH }, 
                        { name: "Abby C.", role: "Lead", email: "aac265@cornell.edu", linkedIn: "https://www.linkedin.com/in/abigail-childs-6a6599271/?skipRedirect=true", photo: AbbyC }, 
                        { name: "Eric Z.", role: "Member", email: "ez323@cornell.edu", linkedIn: "https://www.linkedin.com/in/eric-zhu-501392298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", photo: EricZ }, 
                        { name: "Minh T.", role: "Member", email: "nt428@cornell.edu", linkedIn: "https://www.linkedin.com/in/nhat-minh-tran-ngoc-1b90642a9/", photo: MinhT}, 
                    ]}
                />
                <TeamsSection
                    id="engagement-education"
                    backColor="linear-gradient(90deg, #FBBEF6, #FAF5F9)"
                    textColor="#EF71E5"
                    text="Engagement and Education"
                    arr={[{ name: "Tristan A.", role: "Member", email: "" },
                        { name: "Jimmy Z.", role: "Member", email: "" }
                    ]}
                />
                <TeamsSection
                    id="web-dev"
                    backColor="linear-gradient(90deg, #BED8FB, #F5F8FA)"
                    textColor="#7EB3F8"
                    text="Web Development"
                    arr={[{ name: "Arsh K.", role: "Lead", email: "ak2676@cornell.edu", linkedIn: "https://linkedin.com/in/arshdeepkaur13", portfolio: "https://www.arshdeepk.com/", photo: ArshK},
                        { name: "Cinnie L.", role: "Lead", email: "cl2728@cornell.edu", linkedIn: "https://www.linkedin.com/in/cinnie-lin-287671351", photo: CinnieL},
                        { name: "Winnie C.", role: "Lead", email: "wc679@cornell.edu" },
                        { name: "Amanda Z.", role: "Member", email: "az565@cornell.edu", linkedIn: "https://www.linkedin.com/in/amanda-zhu-3a0680279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", photo: AmandaZ},
                        { name: "Anusha K.", role: "Member", email: "ark279@cornell.edu" },
                        { name: "Willow C.", role: "Member", email: "wc697@cornell.edu", linkedIn: "https://www.linkedin.com/in/willowchen29", photo: WillowC}
                    ]}
                />
            </div>


            
        </div>
    )

}

export default HeroCarousel;