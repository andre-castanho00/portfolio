import "./skills.css";

/**
 * @function Skills
 * @description A component that renders a grid of skills and technologies.
 * The component renders four categories: Frontend Development, Backend Development, Database &amp; Cloud, and Tools &amp; Others.
 * Each category is rendered as a separate SkillCategory component.
 * @returns {object} A JSX element representing the Skills section of the website.
 */
function Skills() {
  const frontendSkills = ["React", "Angular", "HTML5", "CSS3", "TypeScript"];
  const backendSkills = [
    "JavaScript",
    "Node.js",
    "Python",
    "Java",
    "C#",
    "SQL",
    "REST APIs",
    "C",
  ];
  const databaseSkills = ["MySQL", "SSMS", "MongoDB", "Azure", "Firebase"];
  const otherSkills = ["VS Code", "Git", "GitHub", "Jira", "Trello", "Slack"];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills &amp; Technologies</h2>
        <div className="skills-grid">
          <SkillCategory
            color={"var(--frontend-color)"}
            skillCategory="Frontend Development"
            skillsList={frontendSkills}
          />

          <SkillCategory
            color={"var(--backend-color)"}
            skillCategory="Backend Development"
            skillsList={backendSkills}
          />

          <SkillCategory
            color={"var(--database-color)"}
            skillCategory="Database &amp; Cloud"
            skillsList={databaseSkills}
          />

          <SkillCategory
            color={"var(--tools-color)"}
            skillCategory="Tools &amp; Others"
            skillsList={otherSkills}
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;

/**
 * @function SkillCategory
 * @description A component that renders a category of skills.
 * @param {string} skillCategory The name of the category.
 * @param {array} skillsList A list of skills in the category.
 * @returns {object} A JSX element representing the category of skills.
 */
export function SkillCategory({ color, skillCategory, skillsList }) {
  return (
    <div className="skill-category" style={{ border: `3px solid ${color}` }}>
      <h3>{skillCategory}</h3>
      <div className="skill-tags">
        {skillsList.map((skill) => (
          <span key={skill} className="skill-tag" style={{ background: color }}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
