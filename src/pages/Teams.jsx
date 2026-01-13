import HeroCarousel from "../components/HeroCarousel"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

function Teams () {
    return (
        <div>
            <Navigation />
            <main>
                <HeroCarousel/>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Teams