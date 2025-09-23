import "./skills.css";

/**
 * @function Skills
 * @description A component that renders a grid of skills and technologies.
 * The component renders four categories: Frontend Development, Backend Development, Database &amp; Cloud, and Tools &amp; Others.
 * Each category is rendered as a separate SkillCategory component.
 * @returns {object} A JSX element representing the Skills section of the website.
 */
function Skills() {
  const frontendSkills = [
    ["React", "Advanced", "/logos/frontend/React-icon_small.png"],
    ["Angular", "Intermediate", "/logos/frontend/angular-icon.png"],
    ["HTML5", "Advanced", "/logos/frontend/html-icon.png"],
    ["CSS3", "Advanced", "/logos/frontend/css-icon.png"],
    ["TypeScript", "Intermediate", "/logos/frontend/typescript-icon.png"]
  ];

  const backendSkills = [
    ["JavaScript", "Advanced", "/logos/backend/javascript.png"],
    ["Node.js", "Intermediate", "/logos/backend/nodejs-icon2.png"],
    ["Python", "Intermediate", "/logos/backend/python-icon.png"],
    ["Java", "Advanced", "/logos/backend/java-icon.png"],
    ["C#", "Advanced", "/logos/backend/cSharp-icon.png"],
    ["SQL", "Intermediate", "/logos/backend/sql-icon.png"],
    ["C", "Beginner", "/logos/backend/c-icon.png"]
  ];

  const databaseSkills = [
    ["MySQL", "Intermediate", "/logos/databases/my-sql.png"],
    ["SSMS", "Intermediate", "/logos/databases/ssms.png"],
    ["MongoDB", "Beginner", "/logos/databases/mongodb.png"],
    ["Azure", "Intermediate", "/logos/databases/azure.png"],
    ["Firebase", "Beginner", "/logos/databases/firebase.png"]];

  const otherSkills = [
    ["VS Code", "Advanced", "/logos/tools/vscode.png"],
    ["Git", "Intermediate", "/logos/tools/git.png"],
    ["GitHub", "Advanced", "/logos/tools/github.png"],
    ["Confluence", "Advanced", "/logos/tools/confluence.png"],
    ["Figma", "Intermediate", "/logos/tools/figma-icon.png"],
    ["Jira", "Intermediate", "/logos/tools/jira-icon.png"]
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
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <img src={skill[2]} style={{ height: "30px" }} />
            <div style={{ width: "90%" }}>
              <div className="flex-between">
                <p>{skill[0]}</p>
                <p>{skill[1]}</p>
              </div>
              <ProgressBar color={color} percentage={skill[1]} />
            </div>
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