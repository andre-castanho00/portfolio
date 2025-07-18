import "./about.css";

/**
 * @function About
 * @description A component that renders the 'About Me' section of the portfolio.
 * It includes personal information about André, highlighting his experience as a
 * Full Stack Developer, his educational background, skills, and his approach to
 * software development. The section is designed to display an overview of André's
 * professional journey and expertise in building web applications.
 * @returns {JSX.Element} A JSX element representing the 'About Me' section.
 */

function About({ ReactGA }) {
  const handleClick = () => {
    ReactGA.event({
      category: "IPS",
      action: "Visit IPS website",
    });
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="profile-image"></div>
          <div className="about-text">
            <p>
              Hi, I'm André, a Full Stack Developer with expertise in building
              dynamic and responsive web applications and digital solutions.
              With a strong foundation in both frontend and backend
              technologies, I strive to create seamless user experiences and
              robust server-side functionalities.
            </p>
            <p>
              I have a Bachelor's Degree in Software Engineer from{" "}
              <a
                style={{ color: "var(--accent-primary)" }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://estsetubal.ips.pt/"
                onClick={handleClick}
              >
                Instituto Politécnico de Setúbal
              </a>
              , where I learned and developed a solid understanding of software
              engineering principles. Over the years, I've improved my skills in
              various programming languages and frameworks, more about that
              below.
            </p>
            <p>
              I believe in writing clean, efficient, and maintainable code. My
              approach involves thorough planning, iterative development, and
              testing to ensure that every application I build is scalable and
              reliable. I am always keen to learn new technologies and best
              practices and newer frameworks to improve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
