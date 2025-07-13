import { Menu } from "../icons";
import "./header.css";
import { useState } from "react";

/**
 * Header component that renders the main navigation header for the website.
 * It includes a logo and navigation links for different sections of the site:
 * Home, About, Skills, Projects, and Contact. The component also contains
 * commented code for a theme toggle button.
 *
 * @returns {JSX.Element} The JSX element representing the header section.
 */

function Header({ isDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="background: var(--bg-primary); backdrop-filter: none;">
      <nav className="container">
        <img
          style={{ maxWidth: "350px" }}
          src={
            isDarkMode
              ? "/images/my-logo-white-v2.png"
              : "/images/my-logo-black-v2.png"
          }
          alt="logo"
        />
        <div className="nav">
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          {/* <button className="theme-toggle" id="themeToggle">
            🌙
          </button> */}
        </div>
        <div className="nav-mobile">
          <div className="menu-toggle" id="menuToggle" onClick={toggleMenu}>
            <Menu color={isDarkMode ? "#ffffff" : "#000000"} />
          </div>
          <ul
            className="nav-links-mobile"
            id="nav-links-mobile"
            style={{ display: isMenuOpen ? "flex" : "none" }}
          >
            <li>
              <a href="#home" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={toggleMenu}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
