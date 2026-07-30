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

const events = [];

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
          <span className="eyebrow">Our aims</span>
          <ol className="aims__list">
            {aims.map((aim) => (
              <li key={aim.numeral} className="aim">
                <span className="aim__numeral mono">{aim.numeral}</span>
                <div className="aim__text">
                  <h2 className="aim__title">{aim.title}</h2>
                  <p className="aim__body measure">{aim.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="events">
        <div className="shell">
          <span className="eyebrow eyebrow--rule">Upcoming events</span>

          {events.length > 0 ? (
            <ul className="events__list">
              {events.map((event) => (
                <li key={event.title} className="event">
                  <span className="event__date mono">{event.date}</span>
                  <div>
                    <h3 className="event__title">{event.title}</h3>
                    <p className="event__desc measure">{event.description}</p>
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
    </div>
  );
}

export default EduSection;
