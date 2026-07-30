import { Link } from "react-router-dom";
import TeamPhoto from "../assets/team-photo.jpg";
import { memberCount, teamCount, advisor } from "../data/teams.js";
import { projectCount } from "../data/projects.js";
import "./Heroesection.css";

const APPLY_URL = "https://forms.gle/Xz8tnGbQK4EKTQrQ8";

function Herosection() {
  return (
    <section className="hero">
      <div className="shell hero__inner">
        <div className="hero__lede">
          <span className="eyebrow hero__eyebrow">
            Cornell University &middot; Est.&nbsp;2024
          </span>

          <h1 className="hero__headline">
            Advocating for
            <br />
            green tech.
          </h1>

          <p className="hero__sub measure">
            A student-led team helping Cornellians use computation and data to
            solve environmental challenges.
          </p>

          <div className="hero__actions">
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noreferrer"
              className="btn btn--solid"
            >
              Apply to join
            </a>
            <Link to="/projects" className="btn btn--text">
              See our work
            </Link>
          </div>
        </div>

        <figure className="hero__figure specimen">
          <div className="specimen__mount">
            <img
              src={TeamPhoto}
              alt="Sustainabytes members photographed together in a Cornell cloister."
            />
          </div>
          <figcaption className="specimen__label hero__caption mono">
            Sustainabytes &middot; Cornell University &middot; Ithaca, NY
          </figcaption>
        </figure>
      </div>

      {/* Measured facts, set as field data rather than marketing stat tiles. */}
      <div className="shell">
        <dl className="hero__record">
          <div className="hero__record-item">
            <dt>Teams</dt>
            <dd>{teamCount}</dd>
          </div>
          <div className="hero__record-item">
            <dt>Members</dt>
            <dd>{memberCount}</dd>
          </div>
          <div className="hero__record-item">
            <dt>Active projects</dt>
            <dd>{projectCount}</dd>
          </div>
          <div className="hero__record-item hero__record-item--wide">
            <dt>Advised by</dt>
            <dd>
              {advisor.name} — {advisor.title}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export default Herosection;
