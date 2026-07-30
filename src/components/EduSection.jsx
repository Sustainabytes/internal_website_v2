import { upcomingEvents, pastEvents } from "../data/events.js";
import "./EduSection.css";

/* A real sequence — these are the two aims, in order — so the numerals carry
   information rather than decorating the list. */
const aims = [
  {
    numeral: "I",
    title: "Build community",
    body: "We host interdisciplinary collaborations across the data, tech, and environmental groups on campus through engagement and outreach initiatives.",
  },
  {
    numeral: "II",
    title: "Professional development",
    body: "We connect computational sustainability and green tech professionals with like-minded peers through socials, networking events, career panels, and guest speakers.",
  },
];

function PastEvent({ event }) {
  return (
    <article className="past">
      <div className="past__record">
        <span className="past__date mono">{event.date}</span>
        <h3 className="past__title">{event.title}</h3>
        {event.coHost && (
          <p className="past__cohost mono">Co-hosted with {event.coHost}</p>
        )}
        <p className="past__summary measure">{event.summary}</p>

        <dl className="panel">
          {event.panel.map((group) => (
            <div key={group.role} className="panel__group">
              <dt className="eyebrow">{group.role}</dt>
              <dd>{group.people.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </div>

      <figure className="past__figure specimen">
        {event.photo ? (
          <div className="specimen__mount">
            <img src={event.photo} alt={event.photoAlt} />
          </div>
        ) : (
          /* Space reserved for a photo. Set `photo` in src/data/events.js to
             swap this out. */
          <div className="past__plate" aria-hidden="true" />
        )}
      </figure>
    </article>
  );
}

function EduSection() {
  return (
    <div className="edu">
      <header className="edu__head">
        <div className="shell">
          <span className="eyebrow">Education &amp; Engagement</span>
          <h1 className="edu__title">
            Learning in
            <br />
            public.
          </h1>
          <p className="edu__intro measure">
            We build the events, workshops, and resources that make computational
            sustainability legible to the rest of campus.
          </p>
        </div>
      </header>

      <section className="aims">
        <div className="shell">
          <h2 className="eyebrow">Our aims</h2>
          <ol className="aims__list">
            {aims.map((aim) => (
              <li key={aim.numeral} className="aim">
                <span className="aim__numeral mono">{aim.numeral}</span>
                <div className="aim__text">
                  <h3 className="aim__title">{aim.title}</h3>
                  <p className="aim__body measure">{aim.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="events">
        <div className="shell">
          <h2 className="eyebrow eyebrow--rule">Upcoming events</h2>

          {upcomingEvents.length > 0 ? (
            <ul className="events__list">
              {upcomingEvents.map((event) => (
                <li key={event.title} className="event">
                  <span className="event__date mono">{event.date}</span>
                  <div>
                    <h3 className="event__title">{event.title}</h3>
                    <p className="event__desc measure">{event.summary}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="events__empty">
              <p className="events__empty-lead">
                Nothing on the calendar right now.
              </p>
              <p className="events__empty-body measure">
                We run socials, career panels, and guest speakers through the
                semester. Follow us on Instagram to hear about the next one first.
              </p>
              <a
                href="https://www.instagram.com/cusustainabytes/"
                target="_blank"
                rel="noreferrer"
                className="btn btn--quiet"
              >
                Follow @cusustainabytes
              </a>
            </div>
          )}
        </div>
      </section>

      {pastEvents.length > 0 && (
        <section className="pastEvents">
          <div className="shell">
            <h2 className="eyebrow eyebrow--rule">Past events</h2>
            <div className="pastEvents__list">
              {pastEvents.map((event) => (
                <PastEvent key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default EduSection;
