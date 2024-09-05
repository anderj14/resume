import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? "auto" : "hidden";
  };

  const clonseMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className={`navbar ${menuOpen ? "menu-open" : ""}`}>
      <div className={`links ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={clonseMenu}>projects</Link>
          </li>
          <li>
            <Link to="/posts" onClick={clonseMenu}>posts</Link>
          </li>
          <li>
            <Link to="/about" onClick={clonseMenu}>about / contact</Link>
          </li>
        </ul>
      </div>
      <div className="name">
        <p>
          <Link to="/">Andder Frias</Link>
        </p>
      </div>
      <div className={`social-media ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a
              href="https://github.com/anderj14"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@andersonfrias001"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-medium"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.behance.net/eyanderson"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-square-behance"></i>
            </a>
          </li>
        </ul>
      </div>
      <button
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </div>
  );
}
