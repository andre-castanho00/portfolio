function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills &amp; Technologies</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend Development</h3>
            <div className="skill-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">Vue.js</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">Sass</span>
              <span className="skill-tag">Tailwind CSS</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Backend Development</h3>
            <div className="skill-tags">
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Express.js</span>
              <span className="skill-tag">Django</span>
              <span className="skill-tag">FastAPI</span>
              <span className="skill-tag">REST APIs</span>
              <span className="skill-tag">GraphQL</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Database &amp; Cloud</h3>
            <div className="skill-tags">
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">Redis</span>
              <span className="skill-tag">AWS</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">Kubernetes</span>
              <span className="skill-tag">Firebase</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Tools &amp; Others</h3>
            <div className="skill-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">GitHub</span>
              <span className="skill-tag">VS Code</span>
              <span className="skill-tag">Webpack</span>
              <span className="skill-tag">Jest</span>
              <span className="skill-tag">CI/CD</span>
              <span className="skill-tag">Agile</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
