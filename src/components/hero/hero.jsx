import "./hero.css";
import "./themeToggle.css";
import { useState, useEffect } from "react";

/**
 * @function Hero
 * @description A component that renders the hero section of the website.
 * The section includes a heading, a paragraph, and a call-to-action button.
 * @returns {React.ReactElement} A JSX element representing the hero section.
 */
function Hero() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <label className="switch">
          <input type="checkbox" onChange={toggleTheme} checked={isDarkMode} />
          <span className="slider"></span>
        </label>
        <h1>André Castanho</h1>
        <p>
          Full Stack Developer | Sotfware Engineer | Building Digital Solutions
        </p>
        <a href="#contact" className="cta-button">
          Get In Touch
        </a>
      </div>
    </section>
  );
}

export default Hero;
