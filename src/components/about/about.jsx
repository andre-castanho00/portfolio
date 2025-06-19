import "./about.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="profile-image">👨‍💻</div>
          <div className="about-text">
            <p>
              I'm a passionate Full Stack Engineer with 5+ years of experience
              building scalable web applications and digital solutions. I
              specialize in modern JavaScript frameworks, cloud technologies,
              and creating seamless user experiences.
            </p>
            <p>
              My expertise spans both frontend and backend development, with a
              strong focus on writing clean, maintainable code and following
              best practices. I enjoy solving complex problems and turning ideas
              into reality through technology.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open source projects, or sharing knowledge with
              the developer community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
