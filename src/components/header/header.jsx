import "./header.css";

/**
 * Header component that renders the main navigation header for the website.
 * It includes a logo and navigation links for different sections of the site:
 * Home, About, Skills, Projects, and Contact. The component also contains
 * commented code for a theme toggle button.
 *
 * @returns {JSX.Element} The JSX element representing the header section.
 */

function Header() {
  return (
    <header className="background: var(--bg-primary); backdrop-filter: none;">
      <nav className="container">
        <div className="logo">AC</div>
        <div className="display: flex; align-items: center;">
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
      </nav>
    </header>
  );
}

export default Header;
