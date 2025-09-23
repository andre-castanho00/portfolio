import "./experience.css";

function Experience() {
    const rhp = {
        link: "https://rhp.consulting/",
        path: "/images/RHP_Logo.jpg",
        alt: "RHP_Logo"
    }
    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2 className="section-title">Work Experience</h2>
                <div className="exp-grid">
                    {/* <ExperienceCard
                        title={"Full Stack Developer (internship)"}
                        place={"RHP (Reliable Healthcare Partners) - Pinhal Novo, Portugal"}
                        timeline={"April 2025 - Jully 2025 (486 hours)"}
                        description={["Desenvolvimento de aplicações web em React Vite, React Native, NestJS, Strapi, TypeScript, JavaScript, SQL (MySQL, SQLite).",
                            "Manutenção e atualização de websites em WordPress (Elementor, WPBakery, Avada) e Drupal, assegurando gestão de conteúdos e criação de módulos.",
                            "Colaboração em projeto internacional, como ContentHubADC, plataforma científica com sistema de encomendas, gestão de utilizadores e permissões, dashboards personalizados e workflows de aprovação de artigos.",
                            "Implementação de soluções de gestão de eventos, repositórios de documentos, e ferramentas de certificação digital com exportação em múltiplos formatos.",
                            "Suporte técnico em eventos online e desenvolvimento de funcionalidades para gestão de conteúdos multimédia.",
                            "Adoção de metodologias ágeis (Scrum/Kanban) em equipa multidisciplinar de design e desenvolvimento."
                        ]}
                    /> */}

                    <ExperienceCard
                        logo={rhp}
                        title={"Full Stack Developer (internship)"}
                        place={"RHP (Reliable Healthcare Partners) - Pinhal Novo, Portugal"}
                        timeline={"April 2025 - Jully 2025"}
                        description={[
                            "Development of web applications in React Vite, React Native, NestJS, Strapi, TypeScript, JavaScript, SQL (MySQL, SQLite).",
                            "Collaboration in an international project in the healthcare area, a scientific platform with an ordering system, user and permission management, customized dashboards, and article approval workflows.",
                            "Maintenance and updating of websites in WordPress (Elementor, WPBakery, Avada) and Drupal, ensuring content management and module creation.",
                            "Implementation of solutions for event management, document repositories, and digital certification tools with export in multiple formats.",
                            "Experience with agile methodologies (Scrum/Kanban) within a multidisciplinary design and development team."
                        ]}
                    />
                </div>
            </div>
        </section>
    );
}

export default Experience;

function ExperienceCard({ logo, title, place, timeline, description }) {
    return (
        <div className="exp-grid-content">
            <div className="exp-header">
                {/* <img src="/images/RHP_Logo.jpg" alt="RHP_Logo" height={"80px"} /> */}

                <a
                    href={logo?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                // onClick={() => handleClick({ title }, `Visit ${title} website`)}
                >
                    <img src={logo?.path} alt={logo?.alt} height={"80px"} />
                </a>

                <div>
                    <h3>{title}</h3>
                    <p><b>{place}</b></p>
                    <p><i>{timeline}</i></p>
                </div>
            </div>

            <br />

            <ul className="exp-ul">
                {description.map((elem) => (
                    <li>{elem}</li>
                ))}
            </ul>
        </div>
    );
}