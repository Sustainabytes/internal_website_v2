import "./Herocarousel.css";
import Clara from "../assets/ClaraGomes.svg";
import ClaraVector from "../assets/ClaraVector.svg";
import Frame from "../assets/MemberFrame.svg"

function TeamsSection({ backColor, textColor, text, arr }) {
    return (
    <div className="teamSection">
        <div className="teamTitle font-sans" style={{background: backColor}}> 
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
    )
}

function MemberPhoto({ name, role, email, color }) {
    return (
        <div className="memPhoto">
            <h3 style={{ color }}>{role}</h3>
            <h4 style={{ color }}>{name}</h4>
            <h5 style={{ color }}>{email}</h5>
            <img src={Frame} alt="Member frame" />
        </div>
    )
}


function HeroCarousel() {
    return (
        <div className="heroCarousel">

            <h1 className="ourTeams font-sans">Our <span className="teams">Teams</span></h1>
            <div className="heroMainBlock">
                <div className="heroLeftside">
                    <div className="flashcards">
                        <div className="flashcard"></div>
                    </div>
                </div>
                <div className="heroRightside">
                    <div className="heroText">
                        <h2 className="font-sans">E-Board</h2>
                        <h4>Description goes here</h4>
                    </div>
                    <button className="membersBtn">Members</button>
                </div>
            </div>

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
                    backColor="linear-gradient(90deg, #AD99FF, #F5FAF7)"
                    textColor="#3111B2"
                    text="E-Board"
                    arr={[{ name: "Tianyi C.", role: "President", email: "email@email.com" },
                        { name: "Kyle C.", role: "VP", email: "d@email.com" }, 
                        { name: "Mikael M-R.", role: "Secretary", email: "email@email.com" }
                    ]}  
                />

                <TeamsSection
                    backColor="linear-gradient(90deg, #F3E880, #F5FAF7)"
                    textColor="#C9AB27"
                    text="Operations"
                    arr={[{ name: "Jerry C.", role: "Social Media", email: "email2@email.com" }, 
                        { name: "Kalia C.", role: "Treasurer", email: "email2@email.com" }, 
                        { name: "Kaavya P.", role: "Business", email: "email2@email.com" }, 
                        { name: "Aish M.", role: "External Affairs", email: "email2@email.com" }, 
                    ]}
                />

                    <TeamsSection
                    backColor="linear-gradient(90deg, #93C4A6, #F5FAF7)"
                    textColor="#51B976"
                    text="Data Analytics"
                    arr={[{ name: "Seokyun H.", role: "Lead", email: "email2@email.com" }, 
                        { name: "Abby C.", role: "Lead", email: "email2@email.com" }, 
                        { name: "Eric Z.", role: "Member", email: "email2@email.com" }, 
                        { name: "Minh T.", role: "Member", email: "email2@email.com" }, 
                    ]}
                />

                    <TeamsSection
                    backColor="linear-gradient(90deg, #FBBEF6, #FAF5F9)"
                    textColor="#EF71E5"
                    text="Engagement and Education"
                    arr={[{ name: "Tristan A.", role: "Member", email: "email2@email.com" },
                        { name: "Jimmy Z.", role: "Member", email: "email2@email.com" }
                    ]}
                />

                    <TeamsSection
                    backColor="linear-gradient(90deg, #BED8FB, #F5F8FA)"
                    textColor="#7EB3F8"
                    text="Web Development"
                    arr={[{ name: "Arsh K.", role: "Lead", email: "email2@email.com" },
                        { name: "Cinnie L.", role: "Lead", email: "email2@email.com" },
                        { name: "Winnie C.", role: "Lead", email: "email2@email.com" },
                        { name: "Amanda Z.", role: "Member", email: "email2@email.com" },
                        { name: "Anusha K.", role: "Member", email: "email2@email.com" },
                        { name: "Willow C.", role: "Member", email: "email2@email.com" }
                    ]}
                />
            </div>


            
        </div>
    )

}

export default HeroCarousel;