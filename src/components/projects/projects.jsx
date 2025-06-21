import "./projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          <ProjectCard
            image={"/carbonvault_thumbnail.png"}
            title={"Carbon Vault"}
            description={
              "A full-featured e-commerce platform with user authentication, payment processing, and admin dashboard. Built with modern technologies for scalability and performance."
            }
            tags={[
              "C#",
              "TypeScript",
              "HTML",
              "CSS",
              "JavaScript",
              "Azure",
              "Stripe API",
            ]}
            links={[
              "https://carbonvaultclient-h8cuhcfma2exc4bu.northeurope-01.azurewebsites.net/",
              "https://github.com/rodrigosantos003/carbon-vault",
            ]}
          />

          <ProjectCard
            image={"/test.jpg"}
            title={"Task Management App"}
            description={
              "A collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface."
            }
            tags={["Vue.js", "Express.js", "Socket.io", "MongoDB"]}
            links={["#", "#"]}
          />

          <ProjectCard
            image={"/test.jpg"}
            title={"Analytics Dashboard"}
            description={
              "A comprehensive analytics dashboard with interactive charts, real-time data visualization, and customizable reporting features for business insights."
            }
            tags={["React", "TypeScript", "D3.js", "Python"]}
            links={["#", "#"]}
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;

export function ProjectCard({ image, title, description, tags, links }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img className="project-img" src={image} alt={title} />
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tech">
          {tags.map((tag, index) => (
            <span key={index} className="tech-tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="project-links">
          <a
            href={links[0]}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Live Demo
          </a>
          <a
            href={links[1]}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
