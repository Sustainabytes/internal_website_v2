import Navigation from "../components/Navigation"
import Heroesection from "../components/Heroesection"
import HomeBody from "../components/HomeBody"

function Home () {
    return (
        <div>
            <Navigation />
            <main>
                <Heroesection />
                <HomeBody />
            </main>
        </div>
    )
}

export default Home