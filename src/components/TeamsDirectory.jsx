import { Mail, Globe, Linkedin, ArrowRight } from "lucide-react";
import CarlaPhoto from "../assets/carla-gomes.jpg";
import FillerHeadshot from "../assets/fillerHeadshot.png";
import { teams, advisor, memberCount } from "../data/teams.js";
import "./TeamsDirectory.css";

const headcountOf = (team) => team.members.filter((m) => !m.isOpening).length;

const plural = (n) => `${n} ${n === 1 ? "member" : "members"}`;

function MemberCard({ member, index }) {
  const { name, role, email, linkedIn, portfolio, photo, isOpening, description } =
    member;

  const hasEmail = Boolean(email) && email.includes("@");

  return (
    <li className={`member specimen ${isOpening ? "member--open" : ""}`}>
      <div className="specimen__mount member__mount">
        <img
          src={photo || FillerHeadshot}
          alt={isOpening ? "" : `${name}, ${role}`}
          loading={index < 4 ? "eager" : "lazy"}
        />
      </div>

      <div className="specimen__label member__label">
        <span className="eyebrow member__role">{role}</span>
        <h3 className="member__name">{name}</h3>

        {hasEmail ? (
          <div className="member__contact">
            <a href={`mailto:${email}`} className="member__email" aria-label={`Email ${name}`}>
              <Mail size={14} strokeWidth={1.5} aria-hidden="true" />
              <span>{email}</span>
            </a>

            <span className="member__links">
              {linkedIn && (
                <a
                  href={linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${name} on LinkedIn`}
                >
                  <Linkedin size={16} strokeWidth={1.5} />
                </a>
              )}
              {portfolio && (
                <a
                  href={portfolio}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${name}'s portfolio`}
                >
                  <Globe size={16} strokeWidth={1.5} />
                </a>
              )}
            </span>
          </div>
        ) : (
          <div className="member__contact member__contact--plain">
            <p className="mono">{email}</p>
            {description && <p className="member__description">{description}</p>}
          </div>
        )}
      </div>
    </li>
  );
}

/* Index rather than a carousel: it shows every team at once, states how big
   each one is, and jumps to the roster. Buttons rather than anchors because
   HashRouter already owns the URL fragment. */
function TeamIndex() {
  const jumpTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="index">
      <div className="shell">
        <span className="eyebrow">Working groups</span>

        <ul className="index__list">
          {teams.map((team) => (
            <li key={team.id}>
              <button
                type="button"
                className="index__row"
                onClick={() => jumpTo(team.id)}
              >
                <span className="index__name">{team.name}</span>
                <span className="index__count mono">
                  {plural(headcountOf(team))}
                </span>
                <ArrowRight
                  className="index__arrow"
                  size={16}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function TeamRoster({ team }) {
  return (
    <section id={team.id} className="team">
      <div className="shell">
        <header className="team__header">
          <h2 className="team__name">{team.name}</h2>
          <span className="team__count mono">{plural(headcountOf(team))}</span>
        </header>

        <ul className="team__members">
          {team.members.map((member, index) => (
            <MemberCard key={member.name} member={member} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function TeamsDirectory() {
  return (
    <div className="teamsPage">
      <header className="teamsPage__head">
        <div className="shell">
          <span className="eyebrow">
            {teams.length} teams &middot; {memberCount} members
          </span>
          <h1 className="teamsPage__title">Our team</h1>
          <p className="teamsPage__intro measure">
            Sustainabytes runs as four working groups. Each one owns a piece of the
            club&rsquo;s work, from data analysis to the events that bring the
            community together.
          </p>
        </div>
      </header>

      <TeamIndex />

      {/* Advisor — the club's strongest credibility signal, given its own room. */}
      <section className="advisor">
        <div className="shell advisor__inner">
          <div className="advisor__figure specimen">
            <div className="specimen__mount">
              <img src={CarlaPhoto} alt={advisor.name} />
            </div>
          </div>

          <div className="advisor__text">
            <span className="eyebrow eyebrow--rule">Faculty advisor</span>
            <h2 className="advisor__name">{advisor.name}</h2>
            <p className="advisor__title">{advisor.title}</p>
            <p className="advisor__affiliation mono">{advisor.affiliation}</p>
          </div>
        </div>
      </section>

      <div className="teamsPage__roster">
        {teams.map((team) => (
          <TeamRoster key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
}

export default TeamsDirectory;
