import React, { useState } from "react";
import "./Projects.scss";
import GallerySS from "./GallerySS";
import projectsInfo from "./projects.js";

const Projects = ({ lang }) => {
    const [expand, setExpand] = useState(true);
    return (
        <section id="projects">
            <h1>📁 {lang === "es" ? "Proyectos" : "Projects"}</h1>
            <div className="project-container">
                {projectsInfo.map((project, index) => {
                    if (expand && index > 2) {
                        return <></>;
                    }
                    return <div className="project" key={`pj-${index}`}>
                        <h2>{project.title}</h2>
                        <p className="desc-project">{project.description[lang]}</p>
                        <div className="tech-tags">
                            {project.tech.map((techSkill, ind) => <p><strong>{techSkill}</strong>{ind === (project.tech.length - 1) ? '' : ' 🔹 '}</p>)}
                        </div>
                        <div className="links-project">
                            <p>🔗 <a href={project.link}>{project.title}</a></p>
                        </div>
                        <GallerySS screenshots={project.screenshots} />
                    </div>;
                })}

                <div className="button-show" onClick={() => setExpand(!expand)}>{expand ? "ver más" : "ver menos"}</div>
            </div>
        </section>
    );
}

export default Projects;