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
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      localStorage.setItem("theme", "light");
    }

    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
