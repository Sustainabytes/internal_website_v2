import "./Herocarousel.css";

function HeroCarousel() {
    return (
        <>
        <div className="heroCarousel">
            <h1 className="ourTeams">Our Teams</h1>
            <div className="heroMainBlock">
                <div className="heroLeftside">
                    <div className="flashcards"></div>
                </div>
                <div className="heroRightSide">
                    <h2>Operations</h2>
                    <h4>Description goes here</h4>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
        </>
    )

}

export default HeroCarousel;