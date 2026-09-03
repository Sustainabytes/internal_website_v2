/**
 * Events, split into what's coming and what's happened.
 *
 * To add a photo to a past event, drop the file in src/assets/events/, import
 * it, and set `photo`. Until then the card reserves the space.
 *
 * The Career Night details below were recovered from the version of
 * EduSection.jsx that listed it while it was still upcoming (commit 3aaaa9d).
 */

import careerNightPhoto from "../assets/events/career-night.webp";

export const upcomingEvents = [];

export const pastEvents = [
  {
    id: "career-night-2026",
    title: "Computational Sustainability Career Night",
    date: "February 25, 2026",
    coHost: "Environmental Collaborative @ Cornell",
    summary:
      "An evening panel on building a career at the intersection of computation and sustainability, with alumni, faculty, and graduate researchers taking questions from students.",
    photo: careerNightPhoto,
    photoAlt:
      "Students and panelists at the Computational Sustainability Career Night.",
    panel: [
      { role: "Alumni", people: ["Brian Warshay", "Phillip Lanza"] },
      { role: "Faculty", people: ["Andrew Bell", "David Shmoys"] },
      {
        role: "Graduate researchers",
        people: ["Abigail Grassick", "Madeleine Allen", "Katerina Tang"],
      },
    ],
  },
];
