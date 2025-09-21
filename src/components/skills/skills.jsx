import "./skills.css";

/**
 * @function Skills
 * @description A component that renders a grid of skills and technologies.
 * The component renders four categories: Frontend Development, Backend Development, Database &amp; Cloud, and Tools &amp; Others.
 * Each category is rendered as a separate SkillCategory component.
 * @returns {object} A JSX element representing the Skills section of the website.
 */
function Skills() {
  const frontendSkills = [["React", "Advanced"], ["Angular", "Intermediate"], ["HTML5", "Advanced"], ["CSS3", "Advanced"], ["TypeScript", "Intermediate"]];
  const backendSkills = [
    ["JavaScript", "Advanced"],
    ["Node.js", "Intermediate"],
    ["Python", "Intermediate"],
    ["Java", "Advanced"],
    ["C#", "Advanced"],
    ["SQL", "Intermediate"],
    ["REST APIs", "Intermediate"],
    ["C", "Beginner"]
  ];
  const databaseSkills = [["MySQL", "Intermediate"], ["SSMS", "Intermediate"], ["MongoDB", "Beginner"], ["Azure", "Intermediate"], ["Firebase", "Beginner"]];
  const otherSkills = [
    ["VS Code", "Advanced"],
    ["Git", "Intermediate"],
    ["GitHub", "Advanced"],
    ["Confluence", "Advanced"],
    ["Figma", "Intermediate"],
    ["Jira", "Intermediate"]
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills &amp; Technologies</h2>

        <div className="skills-grid">
          <SkillCategory
            color={"frontend"}
            skillCategory="Frontend Development"
            skillsList={frontendSkills}
          />

          <SkillCategory
            color={"backend"}
            skillCategory="Backend Development"
            skillsList={backendSkills}
          />

          <SkillCategory
            color={"database"}
            skillCategory="Database &amp; Cloud"
            skillsList={databaseSkills}
          />

          <SkillCategory
            color={"tools"}
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
    <div className="skill-category" data-status={color}>
      <h3>{skillCategory}</h3>
      <div className="skill-tags">
        {skillsList.map((skill) => (
          <div>
            <div className="flex-between">
              <p>{skill[0]}</p>
              <p>{skill[1]}</p>
            </div>
            <ProgressBar color={color} percentage={skill[1]} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProgressBar({ color, percentage }) {
  return (
    <div className="progress-bar">
      <div className="progress-fill" data-status={color} level-status={percentage}>

      </div>
    </div>
  );
}