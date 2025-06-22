import "./App.css";
import About from "./components/about/about";
import Contacts from "./components/contacts/contacts";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";

/**
 * The main app component, which simply renders all the other components.
 * @returns {React.ReactElement} The JSX for the app.
 */
function App() {
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
