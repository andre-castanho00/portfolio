function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">🚀</div>
            <div className="project-content">
              <h3>E-Commerce Platform</h3>
              <p>
                A full-featured e-commerce platform with user authentication,
                payment processing, and admin dashboard. Built with modern
                technologies for scalability and performance.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">Stripe API</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">
                  Live Demo
                </a>
                <a href="#" className="project-link">
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">📱</div>
            <div className="project-content">
              <h3>Task Management App</h3>
              <p>
                A collaborative task management application with real-time
                updates, team collaboration features, and intuitive
                drag-and-drop interface.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Vue.js</span>
                <span className="tech-tag">Express.js</span>
                <span className="tech-tag">Socket.io</span>
                <span className="tech-tag">MongoDB</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">
                  Live Demo
                </a>
                <a href="#" className="project-link">
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">📊</div>
            <div className="project-content">
              <h3>Analytics Dashboard</h3>
              <p>
                A comprehensive analytics dashboard with interactive charts,
                real-time data visualization, and customizable reporting
                features for business insights.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">D3.js</span>
                <span className="tech-tag">Python</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">
                  Live Demo
                </a>
                <a href="#" className="project-link">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
