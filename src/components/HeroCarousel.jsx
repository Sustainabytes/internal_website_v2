import "./Herocarousel.css";
import Clara from "../assets/ClaraGomes.svg";
import ClaraVector from "../assets/ClaraVector.svg";

function TeamsSection(backColor, textColor, text) {
    return (
    <div className="teamSection">
        <div className="teamTitle" style={{backgroundColor: backColor}}> 
            {text}
        </div>
        
        <div className="teamMembers">

        </div>
    </div>
    )
}

// function MemberPhoto(name, role, email) {
//     return (
//         <div>

//         </div>
//     )
// }

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

            {TeamsSection("aqua", "white", "wow")}
            
        </div>
    )

}

export default HeroCarousel;