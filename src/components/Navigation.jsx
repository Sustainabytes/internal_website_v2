import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import NavLogo from "../assets/NavLogo.png";
import "./Navigation.css";

function Navigation() {
  const links = [
    { name: "Teams", path: "/team" },
    { name: "Projects", path: "/projects" },
    { name: "Education", path: "/education" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav>
      <div className="logo">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={NavLogo} alt="The logo of Cornell's Computational club" />
        </Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      <div className={`links ${isOpen ? "active" : ""}`}>
        <ul className="centerFlex">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="link"
              onClick={closeMenu} 
            >
              {link.name}
            </NavLink>
          ))}
          <li className="mobile-only">
            <a
              href="https://forms.gle/Xz8tnGbQK4EKTQrQ8"
              target="_blank"
              className="apply-btn"
            >
              Apply!
            </a>
          </li>
        </ul>
      </div>

      <div className="apply centerFlex desktop-only">
        <a
          href="https://forms.gle/Xz8tnGbQK4EKTQrQ8"
          target="_blank"
          style={{ color: "white", textDecoration: "none" }}
        >
          <p>Apply!</p>
        </a>
      </div>
    </nav>
  );
}

export default Navigation;
