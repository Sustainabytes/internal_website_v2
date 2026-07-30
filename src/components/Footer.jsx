import { Link } from "react-router-dom";
import { Instagram, Linkedin, Github } from "lucide-react";
import SUSBLogo from "../assets/SUSB_Logo.png";
import "./Footer.css";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/cusustainabytes/",
    Icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/computational-sustainability-club/",
    Icon: Linkedin,
  },
  { label: "GitHub", href: "https://github.com/Sustainabytes", Icon: Github },
];

function Footer() {
  return (
    <div className="foot">
      <div className="shell">
        <div className="foot__top">
          <div className="foot__brand">
            <img src={SUSBLogo} alt="" width="34" height="34" />
            <span className="foot__wordmark">Sustainabytes</span>
          </div>

          <ul className="foot__social">
            {socials.map((social) => {
              const Icon = social.Icon;

              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                  >
                    <Icon size={20} strokeWidth={1.5} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <hr className="rule foot__divider" />

        <div className="foot__body">
          <p className="foot__mission measure">
            We aim to drive meaningful change and to build a vibrant community of
            passionate learners through events, hands-on projects, and advocacy.
          </p>

          <nav className="foot__nav" aria-label="Footer">
            <Link to="/team">Teams</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/education">Education</Link>
          </nav>
        </div>

        <div className="foot__legal mono">
          <p>&copy; 2026 Cornell Sustainabytes</p>
          <p>A Registered Student Organization of Cornell University</p>
          <a
            href="https://hr.cornell.edu/about/workplace-rights/equal-education-and-employment"
            target="_blank"
            rel="noreferrer"
          >
            Equal Education &amp; Employment
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
