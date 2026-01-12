import "./Herocarousel.css";
import Clara from "../assets/ClaraGomes.svg";
import ClaraVector from "../assets/ClaraVector.svg";
import Frame from "../assets/MemberFrame.svg"
import Mail from "../assets/Mail.svg"

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
                    arr={[{ name: "Tianyi C.", role: "President", email: "tc757@cornell.edu" },
                        { name: "Kyle C.", role: "VP", email: "ksc224@cornell.edu" }, 
                        { name: "Mikael M-R.", role: "Secretary", email: "mm3446@cornell.edu" }
                    ]}  
                />
                <TeamsSection
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
                    backColor="linear-gradient(90deg, #FBBEF6, #FAF5F9)"
                    textColor="#EF71E5"
                    text="Engagement and Education"
                    arr={[{ name: "Tristan A.", role: "Member", email: "tja75@cornell.edu" },
                        { name: "Jimmy Z.", role: "Member", email: "yz3439@cornell.edu" }
                    ]}
                />
                <TeamsSection
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