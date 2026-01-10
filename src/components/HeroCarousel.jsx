import "./Herocarousel.css";

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
                        <h2 className="font-sans">Operations</h2>
                        <h4>Description goes here</h4>
                    </div>
                    
                    <button className="learnMoreBtn">Learn More</button>
                </div>
            </div>
        </div>
    )

}

export default HeroCarousel;