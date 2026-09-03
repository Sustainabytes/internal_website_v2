import { ArrowRight } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { memberCount, teamCount } from "../data/teams.js";
import { projectCount } from "../data/projects.js";
import "./Apply.css";

const APPLICATION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScJiRIM9V9epovbBy5iHKrUqD2ZhxW0IOKqHQMfZ8wXpzX30w/closedform";

const benefits = [
  {
    numeral: "I",
    title: "Build useful skills",
    description:
      "Grow through hands-on work in data analytics, software engineering, research, and project collaboration.",
  },
  {
    numeral: "II",
    title: "Work on real problems",
    description:
      "Partner with organizations and Cornell labs to make environmental work more measurable and more effective.",
  },
  {
    numeral: "III",
    title: "Find your people",
    description:
      "Meet students who care about sustainability, computation, and using what they know to serve the local area.",
  },
  {
    numeral: "IV",
    title: "Grow beyond the project",
    description:
      "Take part in socials, networking events, career panels, and guest talks that keep the community connected.",
  },
];

function Apply() {
  const handleApplicationClick = (event) => {
    if (APPLICATION_URL === "#") {
      event.preventDefault();
    }
  };

  return (
    <>
      <Navigation />
      <main className="apply-page">
        <header className="apply-page__head">
          <div className="shell apply-page__head-inner">
            <div className="apply-page__intro">
              <span className="eyebrow">Join Sustainabytes</span>
              <h1>Bring your curiosity. Leave with a community.</h1>
              <p className="measure">
                We are a student-led team using computation and data to take on
                environmental challenges at Cornell and beyond.
              </p>
              <div className="apply-page__status">
                <a
                  href={APPLICATION_URL}
                  className="btn btn--solid"
                  onClick={handleApplicationClick}
                >
                  <em>Applications open soon</em>
                  <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="apply-page__signal">
              <span className="eyebrow eyebrow--rule">The short version</span>
              <p>
                Come to learn, contribute, and find a close-knit group of people
                who want to make sustainability practical.
              </p>
            </div>
          </div>
        </header>

        <section className="apply-page__benefits" aria-labelledby="benefits-title">
          <div className="shell">
            <div className="apply-page__section-head">
              <span className="eyebrow">What you get out of joining</span>
              <h2 id="benefits-title">A place to practice, participate, and belong.</h2>
            </div>

            <ol className="benefit-list">
              {benefits.map(({ numeral, title, description }) => (
                <li className="benefit" key={title}>
                  <span className="benefit__numeral mono">{numeral}</span>
                  <div className="benefit__text">
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="apply-page__community" aria-labelledby="community-title">
          <div className="shell apply-page__community-inner">
            <div>
              <span className="eyebrow">How we work together</span>
              <h2 id="community-title">Small enough to know one another. Ambitious enough to make things happen.</h2>
            </div>
            <div className="apply-page__community-copy">
              <p>
                We like staying a close, tight-knit group of people. That means
                asking good questions, sharing what we learn, and making room for
                different backgrounds and ways of thinking. You do not need to
                arrive with every skill figured out.
              </p>
              <dl className="apply-page__record">
                <div>
                  <dt>Working groups</dt>
                  <dd>{teamCount}</dd>
                </div>
                <div>
                  <dt>Members</dt>
                  <dd>{memberCount}</dd>
                </div>
                <div>
                  <dt>Active projects</dt>
                  <dd>{projectCount}</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Apply;