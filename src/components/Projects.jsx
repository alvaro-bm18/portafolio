import React from "react";

const Projects = ({lang}) => {
    return(
        <section id="projects">
            <h1>{lang === "es" ? "Proyectos" : "Projects"}</h1>
        </section>
    );
}

export default Projects;