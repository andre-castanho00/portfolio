import "./hero.css";

/**
 * @function Hero
 * @description A component that renders the hero section of the website.
 * The section includes a heading, a paragraph, and a call-to-action button.
 * @returns {React.ReactElement} A JSX element representing the hero section.
 */
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
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
