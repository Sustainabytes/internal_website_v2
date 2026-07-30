import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import BrandMark from "../assets/SUSB_Logo.svg";
import "./Navigation.css";

const APPLY_URL = "https://forms.gle/Xz8tnGbQK4EKTQrQ8";

function Navigation() {
  const links = [
    { name: "Teams", path: "/team" },
    { name: "Projects", path: "/projects" },
    { name: "Education", path: "/education" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="nav">
      <div className="nav__inner">
        <Link to="/" className="brand nav__brand" onClick={closeMenu}>
          <img className="brand__mark" src={BrandMark} alt="" />
          <span className="brand__word">Sustainabytes</span>
        </Link>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className={`nav__panel ${isOpen ? "is-open" : ""}`}>
          <ul className="nav__links">
            {links.map((link) => (
              <li key={link.name}>
                <NavLink to={link.path} className="nav__link" onClick={closeMenu}>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <a
            href={APPLY_URL}
            target="_blank"
            rel="noreferrer"
            className="btn btn--solid nav__apply"
            onClick={closeMenu}
          >
            Apply to join
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
