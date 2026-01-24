import { Link, NavLink } from "react-router-dom";
import NavLogo from "../assets/NavLogo.png";
import "./Navigation.css";

function Navigation() {
  const links = [
    { name: "Teams", path: "/team" },
    { name: "Projects", path: "/projects" },
    { name: "Education", path: "/education" },
  ];

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
      <div className="links">
        <ul className="centerFlex">
          {links.map((link) => (
            <NavLink key={link.name} to={link.path} className="link">
              {link.name}
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="apply centerFlex">
        <a
          href="https://forms.gle/Xz8tnGbQK4EKTQrQ8"
          target="_blank"
          style={{ color: "var(--clr-neutral-100)", textDecoration: "none" }}
        >
          <p>Apply!</p>
        </a>
      </div>
    </nav>
  );
}

export default Navigation;
