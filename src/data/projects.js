/**
 * Project records.
 *
 * The workstream copy below was previously baked into ReUseBio.svg and
 * RubiBio.svg as vector paths — unselectable, unsearchable, and invisible to
 * screen readers. It lives here as real text now.
 */

import ReUseLogo from "../assets/projectLogos/Reuse.svg";
import MogheLabLogo from "../assets/projectLogos/MogheLab.svg";

export const projects = [
  {
    id: "reuse",
    name: "ReUse",
    logo: ReUseLogo,
    partner: "ReUse",
    workstreams: [
      {
        name: "Impact Tracker",
        summary: "Helping customers visualize their environmental footprint.",
      },
      {
        name: "Product Color Wheel",
        summary: "Revamping customer satisfaction behind-the-scenes.",
      },
    ],
  },
  {
    id: "moghelab",
    name: "MogheLab",
    logo: MogheLabLogo,
    partner: "Moghe Lab, Cornell University",
    workstreams: [
      {
        name: "RubiScan",
        summary: "Making plant protein research accessible to all.",
      },
    ],
  },
];

export const projectCount = projects.length;
