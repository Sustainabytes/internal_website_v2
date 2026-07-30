import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Mascot from "../assets/Mascot.svg";
import "./Error.css";

function Error() {
  return (
    <>
      <Navigation />
      <main className="notFound">
        <div className="shell notFound__inner">
          <div className="notFound__text">
            <span className="eyebrow">Error 404</span>
            <h1 className="notFound__title">
              This page
              <br />
              isn&rsquo;t here.
            </h1>
            <p className="notFound__body measure">
              The link may be out of date, or the page may have moved. Everything
              else is still where you left it.
            </p>
            <div className="notFound__actions">
              <Link to="/" className="btn btn--solid">
                Back to home
              </Link>
              <Link to="/projects" className="btn btn--text">
                See our projects
              </Link>
            </div>
          </div>

          {/* The mascot lives here and nowhere else. */}
          <img
            src={Mascot}
            alt=""
            className="notFound__mascot"
            aria-hidden="true"
          />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Error;
