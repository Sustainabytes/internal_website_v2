import Navigation from "../components/Navigation";
import TeamsDirectory from "../components/TeamsDirectory";
import Footer from "../components/Footer";

function Teams() {
  return (
    <>
      <Navigation />
      <main>
        <TeamsDirectory />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Teams;
