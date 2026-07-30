import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import EcoFest from "../assets/ecofest.jpg";
import TechnicalTeams from "../assets/TechnicalTeams.png";
import "./HomeBody.css";

const groups = [
  {
    label: "Technical Teams",
    title: "Upskill through service",
    description:
      "Through Working Groups, we apply data analytics and software engineering to real-world sustainability work and serve the local area.",
    tags: ["Data Analytics", "Web Dev", "Community Impact"],
    path: "/team",
    action: "Meet the teams",
    photo: TechnicalTeams,
    alt: "Members of a Sustainabytes technical team working together.",
  },
  {
    label: "Education & Engagement",
    title: "Professional development",
    description:
      "Socials, networking events, career panels, and guest speakers. We cultivate a computational sustainability community at Cornell and beyond.",
    tags: ["Network", "Career Development", "Guest Speakers"],
    path: "/education",
    action: "See the event timeline",
    photo: EcoFest,
    alt: "Sustainabytes members hosting a table at EcoFest.",
  },
];

function HomeBody() {
  return (
    <>
      <section className="vision">
        <div className="shell vision__inner">
          <span className="eyebrow vision__eyebrow">Our vision</span>
          <h2 className="vision__statement">
            Cornell&rsquo;s first Computational Sustainability Club, driving
            meaningful change through events, hands-on projects, and advocacy.
          </h2>
        </div>
      </section>

      <section className="groups">
        <div className="shell">
          {groups.map((group) => (
            <article key={group.label} className="group">
              <div className="group__text">
                <span className="eyebrow eyebrow--rule">{group.label}</span>
                <h2 className="group__title">{group.title}</h2>
                <p className="group__desc">{group.description}</p>

                <ul className="group__tags">
                  {group.tags.map((tag) => (
                    <li key={tag} className="mono">
                      {tag}
                    </li>
                  ))}
                </ul>

                <Link to={group.path} className="btn btn--quiet group__action">
                  {group.action}
                  <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
                </Link>
              </div>

              <div className="group__figure specimen">
                <div className="specimen__mount">
                  <img src={group.photo} alt={group.alt} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default HomeBody;
