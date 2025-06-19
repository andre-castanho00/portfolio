import "./skills.css";

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
              <span className="skill-tag">Angular</span>
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">TypeScript</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Backend Development</h3>
            <div className="skill-tags">
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">C#</span>
              <span className="skill-tag">SQL</span>
              <span className="skill-tag">REST APIs</span>
              <span className="skill-tag">C</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Database &amp; Cloud</h3>
            <div className="skill-tags">
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">SSMS</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">Azure</span>
              <span className="skill-tag">Firebase</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Tools &amp; Others</h3>
            <div className="skill-tags">
              <span className="skill-tag">VS Code</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">GitHub</span>
              <span className="skill-tag">Postman</span>
              <span className="skill-tag">Figma</span>
              <span className="skill-tag">Jira</span>
              <span className="skill-tag">JiraPD</span>
              <span className="skill-tag">Confluence</span>
              <span className="skill-tag">Agile</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
