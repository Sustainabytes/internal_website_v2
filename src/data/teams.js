/**
 * Single source of truth for the roster.
 *
 * The Teams page renders this, and the homepage credential strip counts from
 * it — so member totals stay correct without anyone editing two places.
 *
 * `name: "RECRUITING"` marks an open position rather than a person. Use the
 * `isOpening` flag to keep it out of member counts.
 */

export const teams = [
  {
    id: "eboard",
    name: "E-Board",
    members: [
      {
        name: "Tianyi C.",
        role: "President",
        email: "tc757@cornell.edu",
        photo: "/Members/TianyiChen.png",
      },
      {
        name: "Kyle C.",
        role: "Vice President",
        email: "seiyoungchun@gmail.com",
        linkedIn: "https://www.linkedin.com/in/kyle-chun-50b817244/",
        photo: "/Members/KyleChun.png",
      },
      {
        name: "Kalia C.",
        role: "VP of Finance",
        email: "kc2274@cornell.edu",
        linkedIn: "https://www.linkedin.com/in/kaliacheung",
        photo: "/Members/KaliaCheung.png",
      },
      {
        name: "Mikael M-R.",
        role: "Secretary",
        email: "mm3446@cornell.edu",
        photo: "/Members/MurphyRendon.jpeg",
      },
      {
        name: "RECRUITING",
        role: "Social Chair",
        email: "Apply today!",
        isOpening: true,
        description:
          "This role will help organize socials and promote the club on social media.",
      },
    ],
  },
  {
    id: "data-analytics",
    name: "Data Analytics",
    members: [
      {
        name: "Seokyun H.",
        role: "Lead",
        email: "sh2656@cornell.edu",
        photo: "/Members/SeokyunHong.jpg",
      },
      {
        name: "Abby C.",
        role: "Lead",
        email: "aac265@cornell.edu",
        linkedIn:
          "https://www.linkedin.com/in/abigail-childs-6a6599271/?skipRedirect=true",
        photo: "/Members/AbbyChilds.JPG",
      },
      {
        name: "Minh T.",
        role: "Member",
        email: "nt428@cornell.edu",
        linkedIn: "https://www.linkedin.com/in/nhat-minh-tran-ngoc-1b90642a9/",
        photo: "/Members/MinhTran.png",
      },
      {
        name: "Finn E.",
        role: "Member",
        email: "fce7@cornell.edu",
        linkedIn: "https://www.linkedin.com/in/finn-ericson-468149349/",
        photo: "/Members/FinnEricson.JPEG",
      },
    ],
  },
  {
    id: "engagement-education",
    name: "Engagement & Education",
    members: [
      {
        name: "Tristan A.",
        role: "Member",
        email: "tja75@cornell.edu",
        photo: "/Members/TristanAlbano.jpeg",
      },
      {
        name: "Jimmy Z.",
        role: "Member",
        email: "yz3439@cornell.edu",
        photo: "/Members/JimmyZhong.jpeg",
      },
      {
        name: "Katelyn T.",
        role: "Member",
        email: "bt377@cornell.edu",
      },
    ],
  },
  {
    id: "web-dev",
    name: "Web Development",
    members: [
      {
        name: "Arsh K.",
        role: "Lead",
        email: "ak2676@cornell.edu",
        linkedIn: "https://linkedin.com/in/arshdeepkaur13",
        portfolio: "https://www.arshdeepk.com/",
        photo: "/Members/ArshKaur.jpeg",
      },
      {
        name: "Amanda Z.",
        role: "Member",
        email: "az565@cornell.edu",
        linkedIn:
          "https://www.linkedin.com/in/amanda-zhu-3a0680279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        photo: "/Members/AmandaZhu.jpeg",
      },
      {
        name: "Sandy Y.",
        role: "Member",
        email: "syy6@cornell.edu",
        photo: "/Members/SandyYang.jpeg",
      },
    ],
  },
];

export const advisor = {
  name: "Carla Gomes",
  title: "Director, Institute for Computational Sustainability",
  affiliation: "Cornell University",
};

/** People only — open positions are excluded. */
export const memberCount = teams.reduce(
  (total, team) => total + team.members.filter((m) => !m.isOpening).length,
  0,
);

export const teamCount = teams.length;
