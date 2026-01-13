import Navigation from "../components/Navigation"
import Heroesection from "../components/Heroesection"
import HomeBody from "../components/HomeBody"
import Footer from "../components/Footer"

function Home () {
    return (
        <div>
            <Navigation />
            <main>
                <Heroesection />
                <HomeBody />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Home