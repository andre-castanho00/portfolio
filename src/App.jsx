import "./App.css";
import About from "./components/about/about";
import Contacts from "./components/contacts/contacts";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";

import { useEffect, useState } from "react";

/**
 * The main app component, which simply renders all the other components.
 * @returns {React.ReactElement} The JSX for the app.
 */
function App() {
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
    <>
      <Header isDarkMode={isDarkMode} />
      <Hero toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <About />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
