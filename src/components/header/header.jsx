function Header() {
  return (
    <header className="background: var(--bg-primary); backdrop-filter: none;">
      <nav className="container">
        <div className="logo">JD</div>
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
