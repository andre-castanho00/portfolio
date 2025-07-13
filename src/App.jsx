import "./App.css";
import "./responsive.css";
import About from "./components/about/about";
import Contacts from "./components/contacts/contacts";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";

import ReactGA from "react-ga4";

ReactGA.initialize("G-01JFDT7N4Z");

import { useEffect, useState } from "react";

/**
 * The main app component, which simply renders all the other components.
 * @returns {React.ReactElement} The JSX for the app.
 */
function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      return storedTheme === "dark";
    }

    return true;
  });

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

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

    ReactGA.event({
      category: "Theme",
      action: isDarkMode ? "Light" : "Dark",
    });
  };

  return (
    <>
      <Header isDarkMode={isDarkMode} />
      <Hero toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <About ReactGA={ReactGA} />
      <Skills />
      <Projects isDarkMode={isDarkMode} ReactGA={ReactGA} />
      <Contacts isDarkMode={isDarkMode} ReactGA={ReactGA} />
      <Footer />
    </>
  );
}

export default App;
