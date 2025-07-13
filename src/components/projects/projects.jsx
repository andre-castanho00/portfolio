import "./projects.css";
import { GitHub, Website } from "../icons";

/**
 * @function Projects
 * @description A component that renders the 'Featured Projects' section of the portfolio.
 * This section displays a collection of project cards, each highlighting a specific project
 * with its corresponding image, title, description, technologies used, and links.
 * The layout is organized in a grid format for better visual presentation.
 * @returns {JSX.Element} A JSX element representing the 'Featured Projects' section.
 */

function Projects({ isDarkMode, ReactGA }) {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          <ProjectCard
            image={"/carbonvault_thumbnail.png"}
            title={"Carbon Vault"}
            description={
              "A full-featured e-commerce platform built for buying and selling Carbon Credits with a marketplace, user authentication, payment processing, user and admin dashboard and more. Built with modern technologies for scalability and performance as well as deployment on Azure."
            }
            tags={[
              "C#",
              "Angular",
              "ASP.NET Core",
              "TypeScript",
              "Azure",
              "Stripe API",
              "HTML",
              "CSS",
            ]}
            links={[
              "https://carbonvaultclient-h8cuhcfma2exc4bu.northeurope-01.azurewebsites.net/",
              "https://github.com/rodrigosantos003/carbon-vault",
            ]}
            isDarkMode={isDarkMode}
            ReactGA={ReactGA}
          />

          <ProjectCard
            image={"/trading_calc_thumbnail.png"}
            title={"Trading Leverage Calculator"}
            description={
              "A simple React-based tool that allows you to calculate the leverage you need to enter a trade. The tool takes into account the stop loss percentage, the capital to enter the trade, and the amount you want to risk. The tool then calculates the leverage you need to enter the trade."
            }
            tags={["React", "Vite", "JavaScript", "CSS"]}
            links={[
              "https://crypto-leverage-calculator.vercel.app/",
              "https://github.com/andre-castanho00/Crypto-Leverage-Calculator",
            ]}
            isDarkMode={isDarkMode}
            ReactGA={ReactGA}
          />

          <ProjectCard
            image={"/SEO/SEO_thumbnail.png"}
            title={"André Castanho | Portfolio"}
            description={
              "Personal Portfolio designed and developed using React.js and Vite, showcasing my skills and experience as a Full Stack Developer and Software Engineer. It serves as presentation of my work, background, and the projects I’ve contributed to."
            }
            tags={["React", "JavaScript", "CSS", "HTML", "Vercel"]}
            links={[
              "https://andrecastanho-portfolio.vercel.app/",
              "https://github.com/andre-castanho00/portfolio",
            ]}
            isDarkMode={isDarkMode}
            ReactGA={ReactGA}
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;

/**
 * @function ProjectCard
 * @description A component that renders a single project card, which consists of
 * an image, title, description, list of technologies used, and links to the
 * project's live demo and GitHub repository.
 * @param {{ image: string, title: string, description: string, tags: string[], links: string[] }} props
 * @prop {string} image The path to the project image.
 * @prop {string} title The title of the project.
 * @prop {string} description A brief description of the project.
 * @prop {string[]} tags A list of technologies used in the project.
 * @prop {string[]} links A list of links to the project's live demo and GitHub
 * repository.
 * @returns {JSX.Element} A JSX element representing a single project card.
 */
export function ProjectCard({
  image,
  title,
  description,
  tags,
  links,
  isDarkMode,
  ReactGA,
}) {
  const handleClick = (cat, action) => {
    ReactGA.event({
      category: cat,
      action: action,
    });
  };

  return (
    <div className="project-card">
      <div className="project-image">
        <a
          className="project-img"
          href={links[0]}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleClick({ title }, `Visit ${title} website`)}
        >
          <img
            className="project-img"
            src={image ? image : "/test.jpg"}
            alt={title}
          />
        </a>
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
          <div className="contact-icon">
            <Website />
            <a
              href={links[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              onClick={() => handleClick({ title }, `Visit ${title} website`)}
            >
              Live Website
            </a>
          </div>
          <div>|</div>
          <div className="contact-icon">
            <GitHub color={isDarkMode ? "#ffffff" : "#000000"} />
            <a
              href={links[1]}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              onClick={() => handleClick({ title }, `Visit ${title} GitHub`)}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
